'use client';

import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleQuantize } from 'd3-scale';
import { geoAlbersUsa } from 'd3-geo';

// Type definition for the regions and their corresponding carbon emissions
type RegionCarbonEmissions = {
  [key: string]: number;
};

// Mock data for carbon emissions by region (Replace with actual data)
const regionCarbonEmissions: RegionCarbonEmissions = {
  'Northeast': 10.5, // average carbon emissions (in metric tons) for buildings in the region
  'Midwest': 12.2,
  'South': 15.3,
  'West': 9.8,
  'Pacific': 8.1,
};

// U.S. regions with corresponding states (simplified for demo)
const usRegions: { [key: string]: string[] } = {
  'Northeast': ['NY', 'PA', 'NJ', 'CT', 'RI', 'MA', 'NH', 'VT', 'ME'],
  'Midwest': ['IL', 'WI', 'MI', 'IN', 'OH', 'MO', 'KY', 'MN', 'IA', 'ND', 'SD'],
  'South': ['TX', 'FL', 'GA', 'NC', 'VA', 'AL', 'SC', 'TN', 'MS', 'LA', 'AR', 'OK', 'KY'],
  'West': ['CA', 'WA', 'OR', 'NV', 'ID', 'MT', 'WY', 'UT', 'CO', 'AZ', 'NM', 'AK', 'HI'],
  'Pacific': ['CA', 'WA', 'OR'],
};

// Define types for GeoJSON properties and map states
interface GeoJsonProperties {
  NAME: string;
  STATE: string;
}

const USMapWithEmissions: React.FC = () => {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [tooltipCoords, setTooltipCoords] = useState<{ x: number, y: number }>({ x: 0, y: 0 });

  // Color scale for emissions range
  const colorScale = scaleQuantize<string>()  // Declare the return type as string
  .domain([0, 20]) // Emission range (min to max)
  .range(['#00FF00', '#FFFF00', '#FF6600', '#FF0000']); // Color range from green to red

  // Get region color based on its emissions
  const getRegionColor = (region: string): string => {
    return regionCarbonEmissions[region] ? colorScale(regionCarbonEmissions[region]) : '#E0E0E0';
  };

  // Handle hover event to display region emissions
  const handleRegionHover = (region: string | null, e: React.MouseEvent) => {
    if (region) {
      const { clientX, clientY } = e; // Get the mouse coordinates
      setTooltipCoords({ x: clientX, y: clientY });
    }
    setHoveredRegion(region);
  };

  return (
    <div className="map-container p-4 border rounded-lg shadow bg-white w-full">
      <h2 className="text-lg font-semibold mb-4">U.S. Regional Carbon Emissions</h2>
      <div className="map relative">
        <ComposableMap projection={geoAlbersUsa() as any} width={1000} height={600}>
          <Geographies geography="/us.json">
            {({ geographies }) =>
              geographies.map((geo) => {
                const region = Object.keys(usRegions).find((regionName) =>
                  usRegions[regionName].includes(geo.properties.STATE)
                );

                const color = region ? getRegionColor(region) : '#E0E0E0';

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={color}
                    stroke="#FFFFFF"
                    onMouseEnter={(e) => handleRegionHover(region || '', e)}
                    onMouseLeave={() => setHoveredRegion(null)}
                    style={{
                      default: {
                        outline: 'none',
                      },
                      hover: {
                        fill: '#FFA500', // Highlight color on hover
                        outline: 'none',
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
        
        {/* Tooltip Window */}
        {hoveredRegion && (
          <div
            className="absolute p-3 bg-white rounded shadow-md"
            style={{
              left: tooltipCoords.x + 10, // Add an offset to the tooltip position
              top: tooltipCoords.y + 10,
              pointerEvents: 'none', // Prevent blocking interactions behind the tooltip
            }}
          >
            <h3 className="text-lg font-semibold">Region: {hoveredRegion}</h3>
            <p className="text-sm">Average Carbon Emissions: {regionCarbonEmissions[hoveredRegion]} Metric Tons</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default USMapWithEmissions;
