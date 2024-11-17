import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import { useEffect, useState } from 'react';
import { emissionsData, EmissionLevel, StateEmissionData } from '../lib/emissions';
import { FeatureCollection, Geometry } from 'geojson';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import { offices } from '../lib/offices';
import { IoPin } from "react-icons/io5";
import ReactDOMServer from 'react-dom/server';
import Filter from './Filter';

// Helper function to determine emission level
const emissionLevel = (score: number): EmissionLevel => {
  if (score >= 75) return 'red';
  if (score >= 50) return 'yellow';
  return 'green';
};

const colorMapping: Record<EmissionLevel, string> = {
  green: '#2ecc71',  // Green
  yellow: '#f1c40f', // Yellow
  red: '#e74c3c',    // Red
};

// Function to create a React icon using IoPin
const createIcon = (color: string) => {
  return new L.DivIcon({
    html: ReactDOMServer.renderToString(
      <IoPin style={{ color, fontSize: "1.5rem" }} />
    ),
    className: "custom-div-icon",
  });
};

const USMap: React.FC = () => {
  const [geoData, setGeoData] = useState<FeatureCollection<Geometry>>({
    type: 'FeatureCollection',
    features: [],
  });

  const [filters, setFilters] = useState({ red: true, yellow: true, green: true });

  useEffect(() => {
    // Fetch GeoJSON data from public folder
    fetch('/data/us-states.geojson')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("Fetched GeoJSON data:", data); // Debugging log

        // Merge emissions data with GeoJSON features
        const updatedFeatures = data.features.map((feature: any) => {
          const stateName: string | undefined = feature.properties['NAME'];

          const emissionEntry = emissionsData.find(
            (data) => data.state.toLowerCase() === stateName.toLowerCase()
          );

          const emissionScore: number = emissionEntry?.emissionScore || 100; // Default to 100 if no data
          const emission: EmissionLevel = emissionLevel(emissionScore);

          return {
            ...feature,
            properties: {
              ...feature.properties,
              emission,
              emissionScore,
            },
          };
        });

        setGeoData({ ...data, features: updatedFeatures });
      })
      .catch(error => {
        console.error('Error fetching GeoJSON data:', error);
      });
  }, []);

  const onEachFeature = (feature: any, layer: L.Layer) => {
    const stateName: string = feature.properties.NAME || "Unknown";
    const emission: EmissionLevel = feature.properties.emission || 'red';
    const emissionScore: number = feature.properties.emissionScore || 0;

    if (!filters[emission]) {
      layer.remove();
      return;
    }

    layer.setStyle({
      fillColor: colorMapping[emission],
      fillOpacity: 0.7,
      color: '#ffffff',
      weight: 1,
    });

    const popupContent = `
      <div style="text-align: center;">
        <strong>${stateName}</strong><br/>
        Emission Score: ${emissionScore}%<br/>
        <div style="width: 100px; background-color: #e0e0e0; height: 10px; border-radius: 5px; margin-top: 5px;">
          <div style="
            width: ${emissionScore}%;
            height: 100%;
            background-color: ${
              emissionScore >= 75 ? '#e74c3c' : emissionScore >= 50 ? '#f1c40f' : '#2ecc71'
            };
            border-radius: 5px;
          "></div>
        </div>
      </div>
    `;

    layer.bindPopup(popupContent);
  };

  const handleFilterChange = (updatedFilters: { red: boolean; yellow: boolean; green: boolean }) => {
    setFilters(updatedFilters);
  };

  return (
    <div className="w-full h-screen flex flex-col relative">
      <Filter onFilterChange={handleFilterChange} />
      <MapContainer
        center={[37.8, -96]}
        zoom={4}
        scrollWheelZoom={false}
        className="flex-1"
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {geoData.features.length > 0 && (
          <GeoJSON data={geoData} onEachFeature={onEachFeature} />
        )}

        {/* Updated Office Markers */}
        {offices.map((office, index) => {
          if (!filters[emissionLevel(office.emissionScore)]) {
            return null;
          }
          return (
            <Marker
              key={index}
              position={office.coordinates}
              icon={createIcon('#000000')}
            >
              <Popup>
                <div style={{ textAlign: 'center', minWidth: '150px' }}>
                  <strong>{office.name}</strong><br />
                  Emission Score: {office.emissionScore}%<br />
                  <div style={{ width: '100%', backgroundColor: '#e0e0e0', height: '10px', borderRadius: '5px', marginTop: '5px' }}>
                    <div
                      style={{
                        width: `${office.emissionScore}%`,
                        height: '100%',
                        backgroundColor:
                          office.emissionScore >= 75
                            ? '#e74c3c' // red
                            : office.emissionScore >= 50
                            ? '#f1c40f' // yellow
                            : '#2ecc71', // green
                        borderRadius: '5px',
                      }}
                    ></div>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {/* Legend Overlay */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-6 bg-white bg-opacity-75 p-4 rounded-lg shadow-md">
        <div className="flex items-center">
          <span className="block w-4 h-4 bg-green-500 mr-2"></span> Low: 0-49%
        </div>
        <div className="flex items-center">
          <span className="block w-4 h-4 bg-orange-500 mr-2"></span> Moderate: 50-74%
        </div>
        <div className="flex items-center">
          <span className="block w-4 h-4 bg-red-500 mr-2"></span> High: 75-100%
        </div>
      </div>
    </div>
  );
};

export default USMap;