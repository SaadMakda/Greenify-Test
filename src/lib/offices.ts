// src/lib/offices.ts

export type EmissionLevel = 'green' | 'orange' | 'red';

export interface Office {
  name: string;
  state: string;
  city: string;
  coordinates: [number, number]; // [latitude, longitude]
  emissionScore: number; // 0-100%
}

export const offices: Office[] = [
  // Alabama
  {
    name: "Birmingham Commercial Real Estate",
    state: "Alabama",
    city: "Birmingham",
    coordinates: [33.43773422187041, -86.73200036448158],
    emissionScore: 85,
  },

  // Arizona
  {
    name: "Phoenix Commercial Real Estate",
    state: "Arizona",
    city: "Phoenix",
    coordinates: [33.50832015149481, -112.02632407585948],
    emissionScore: 65,
  },
  {
    name: "Tucson Commercial Real Estate",
    state: "Arizona",
    city: "Tucson",
    coordinates: [32.273311856572654, -110.94626132884747],
    emissionScore: 60,
  },

  // Arkansas
  {
    name: "Fayetteville Commercial Real Estate",
    state: "Arkansas",
    city: "Fayetteville",
    coordinates: [36.11451693984074, -94.15159465594638],
    emissionScore: 80,
  },
  {
    name: "Little Rock Commercial Real Estate",
    state: "Arkansas",
    city: "Little Rock",
    coordinates: [34.7465, -92.2896],
    emissionScore: 78,
  },

  // California
  {
    name: "Central Valley Commercial Real Estate",
    state: "California",
    city: "Fresno",
    coordinates: [36.7378, -119.7871],
    emissionScore: 40,
  },
  {
    name: "Los Angeles Commercial Real Estate",
    state: "California",
    city: "Los Angeles",
    coordinates: [34.0522, -118.2437],
    emissionScore: 35,
  },
  {
    name: "Oakland Commercial Real Estate",
    state: "California",
    city: "Oakland",
    coordinates: [37.8044, -122.2711],
    emissionScore: 32,
  },
  {
    name: "Orange County Commercial Real Estate",
    state: "California",
    city: "Irvine",
    coordinates: [33.6846, -117.8265],
    emissionScore: 38,
  },
  {
    name: "Palo Alto Commercial Real Estate",
    state: "California",
    city: "Palo Alto",
    coordinates: [37.4419, -122.1430],
    emissionScore: 28,
  },
  {
    name: "Roseville Commercial Real Estate",
    state: "California",
    city: "Roseville",
    coordinates: [38.7521, -121.2880],
    emissionScore: 30,
  },
  {
    name: "Sacramento Commercial Real Estate",
    state: "California",
    city: "Sacramento",
    coordinates: [38.5816, -121.4944],
    emissionScore: 33,
  },
  {
    name: "San Diego Commercial Real Estate",
    state: "California",
    city: "San Diego",
    coordinates: [32.7157, -117.1611],
    emissionScore: 35,
  },
  {
    name: "San Francisco Commercial Real Estate",
    state: "California",
    city: "San Francisco",
    coordinates: [37.7749, -122.4194],
    emissionScore: 25,
  },
  {
    name: "San Francisco Peninsula Commercial Real Estate",
    state: "California",
    city: "San Mateo",
    coordinates: [37.5630, -122.3255],
    emissionScore: 27,
  },
  {
    name: "San Jose Commercial Real Estate",
    state: "California",
    city: "San Jose",
    coordinates: [37.3382, -121.8863],
    emissionScore: 29,
  },
  {
    name: "Walnut Creek Commercial Real Estate",
    state: "California",
    city: "Walnut Creek",
    coordinates: [37.9022, -122.0651],
    emissionScore: 31,
  },

  // Colorado
  {
    name: "Colorado Commercial Real Estate",
    state: "Colorado",
    city: "Denver",
    coordinates: [39.7392, -104.9903],
    emissionScore: 42,
  },
  {
    name: "Colorado Springs Commercial Real Estate",
    state: "Colorado",
    city: "Colorado Springs",
    coordinates: [38.8339, -104.8214],
    emissionScore: 45,
  },

  // Connecticut
  {
    name: "Hartford Commercial Real Estate",
    state: "Connecticut",
    city: "Hartford",
    coordinates: [41.7658, -72.6734],
    emissionScore: 50,
  },
  {
    name: "Stamford Commercial Real Estate",
    state: "Connecticut",
    city: "Stamford",
    coordinates: [41.0534, -73.5387],
    emissionScore: 48,
  },

  // Delaware
  {
    name: "Wilmington Commercial Real Estate",
    state: "Delaware",
    city: "Wilmington",
    coordinates: [39.7391, -75.5398],
    emissionScore: 60,
  },

  // District of Columbia
  {
    name: "Washington, D.C. Commercial Real Estate",
    state: "District of Columbia",
    city: "Washington, D.C.",
    coordinates: [38.9072, -77.0369],
    emissionScore: 30,
  },

  // Florida
  {
    name: "Fort Lauderdale Commercial Real Estate",
    state: "Florida",
    city: "Fort Lauderdale",
    coordinates: [26.1224, -80.1373],
    emissionScore: 70,
  },
  {
    name: "Jacksonville Commercial Real Estate",
    state: "Florida",
    city: "Jacksonville",
    coordinates: [30.3322, -81.6557],
    emissionScore: 68,
  },
  {
    name: "Melbourne Commercial Real Estate",
    state: "Florida",
    city: "Melbourne",
    coordinates: [28.0836, -80.6081],
    emissionScore: 65,
  },
  {
    name: "Miami Commercial Real Estate",
    state: "Florida",
    city: "Miami",
    coordinates: [25.7617, -80.1918],
    emissionScore: 75,
  },
  {
    name: "Naples Commercial Real Estate",
    state: "Florida",
    city: "Naples",
    coordinates: [26.1420, -81.7948],
    emissionScore: 72,
  },
  {
    name: "Northwest Florida Commercial Real Estate",
    state: "Florida",
    city: "Pensacola",
    coordinates: [30.4213, -87.2169],
    emissionScore: 70,
  },
  {
    name: "Orlando Commercial Real Estate",
    state: "Florida",
    city: "Orlando",
    coordinates: [28.5383, -81.3792],
    emissionScore: 68,
  },
  {
    name: "Palm Beach County Commercial Real Estate",
    state: "Florida",
    city: "West Palm Beach",
    coordinates: [26.7153, -80.0534],
    emissionScore: 66,
  },
  {
    name: "Tampa Commercial Real Estate",
    state: "Florida",
    city: "Tampa",
    coordinates: [27.9506, -82.4572],
    emissionScore: 69,
  },

  // Georgia
  {
    name: "Atlanta Commercial Real Estate",
    state: "Georgia",
    city: "Atlanta",
    coordinates: [33.7490, -84.3880],
    emissionScore: 85,
  },
  {
    name: "Savannah Commercial Real Estate",
    state: "Georgia",
    city: "Savannah",
    coordinates: [32.0809, -81.0912],
    emissionScore: 82,
  },

  // Hawaii
  {
    name: "Hawaii Commercial Real Estate",
    state: "Hawaii",
    city: "Honolulu",
    coordinates: [21.3069, -157.8583],
    emissionScore: 25,
  },

  // Idaho
  {
    name: "Boise Commercial Real Estate",
    state: "Idaho",
    city: "Boise",
    coordinates: [43.6150, -116.2023],
    emissionScore: 80,
  },

  // Illinois
  {
    name: "Chicago Commercial Real Estate",
    state: "Illinois",
    city: "Chicago",
    coordinates: [41.8781, -87.6298],
    emissionScore: 68,
  },

  // Indiana
  {
    name: "Indianapolis Commercial Real Estate",
    state: "Indiana",
    city: "Indianapolis",
    coordinates: [39.7684, -86.1581],
    emissionScore: 85,
  },

  // Iowa
  {
    name: "Des Moines Commercial Real Estate",
    state: "Iowa",
    city: "Des Moines",
    coordinates: [41.5868, -93.6250],
    emissionScore: 70,
  },

  // Kentucky
  {
    name: "Louisville Commercial Real Estate",
    state: "Kentucky",
    city: "Louisville",
    coordinates: [38.2527, -85.7585],
    emissionScore: 88,
  },

  // Maryland
  {
    name: "Baltimore Commercial Real Estate",
    state: "Maryland",
    city: "Baltimore",
    coordinates: [39.2904, -76.6122],
    emissionScore: 35,
  },
  {
    name: "Bethesda Commercial Real Estate",
    state: "Maryland",
    city: "Bethesda",
    coordinates: [38.9847, -77.0947],
    emissionScore: 32,
  },

  // Massachusetts
  {
    name: "Boston Commercial Real Estate",
    state: "Massachusetts",
    city: "Boston",
    coordinates: [42.3601, -71.0589],
    emissionScore: 30,
  },
  {
    name: "New England Commercial Real Estate",
    state: "Massachusetts",
    city: "Boston",
    coordinates: [42.3601, -71.0589],
    emissionScore: 28,
  },

  // Michigan
  {
    name: "Detroit Commercial Real Estate",
    state: "Michigan",
    city: "Detroit",
    coordinates: [42.3314, -83.0458],
    emissionScore: 65,
  },
  {
    name: "Grand Rapids Commercial Real Estate",
    state: "Michigan",
    city: "Grand Rapids",
    coordinates: [42.9634, -85.6681],
    emissionScore: 62,
  },

  // Minnesota
  {
    name: "Minneapolis St-Paul Commercial Real Estate",
    state: "Minnesota",
    city: "Minneapolis-St. Paul",
    coordinates: [44.9778, -93.2650],
    emissionScore: 40,
  },

  // Mississippi
  {
    name: "Jackson Commercial Real Estate",
    state: "Mississippi",
    city: "Jackson",
    coordinates: [32.2988, -90.1848],
    emissionScore: 85,
  },

  // Missouri
  {
    name: "Kansas City Commercial Real Estate",
    state: "Missouri",
    city: "Kansas City",
    coordinates: [39.0997, -94.5786],
    emissionScore: 80,
  },
  {
    name: "St. Louis Commercial Real Estate",
    state: "Missouri",
    city: "St. Louis",
    coordinates: [38.6270, -90.1994],
    emissionScore: 82,
  },

  // Nebraska
  {
    name: "Omaha Commercial Real Estate",
    state: "Nebraska",
    city: "Omaha",
    coordinates: [41.2565, -95.9345],
    emissionScore: 85,
  },

  // Nevada
  {
    name: "Las Vegas Commercial Real Estate",
    state: "Nevada",
    city: "Las Vegas",
    coordinates: [36.1699, -115.1398],
    emissionScore: 70,
  },
  {
    name: "Reno Commercial Real Estate",
    state: "Nevada",
    city: "Reno",
    coordinates: [39.5296, -119.8138],
    emissionScore: 68,
  },

  // New Hampshire
  {
    name: "Manchester Commercial Real Estate",
    state: "New Hampshire",
    city: "Manchester",
    coordinates: [42.9956, -71.4548],
    emissionScore: 25,
  },

  // New Jersey
  {
    name: "Northern New Jersey Commercial Real Estate",
    state: "New Jersey",
    city: "Newark",
    coordinates: [40.7357, -74.1724],
    emissionScore: 35,
  },
  {
    name: "Southern New Jersey Commercial Real Estate",
    state: "New Jersey",
    city: "Trenton",
    coordinates: [40.2171, -74.7429],
    emissionScore: 38,
  },

  // New Mexico
  {
    name: "Albuquerque Commercial Real Estate",
    state: "New Mexico",
    city: "Albuquerque",
    coordinates: [35.0844, -106.6504],
    emissionScore: 60,
  },

  // New York
  {
    name: "Albany Commercial Real Estate",
    state: "New York",
    city: "Albany",
    coordinates: [42.6526, -73.7562],
    emissionScore: 32,
  },
  {
    name: "Buffalo Commercial Real Estate",
    state: "New York",
    city: "Buffalo",
    coordinates: [42.8864, -78.8784],
    emissionScore: 34,
  },
  {
    name: "Rochester Commercial Real Estate",
    state: "New York",
    city: "Rochester",
    coordinates: [43.1566, -77.6088],
    emissionScore: 36,
  },
  {
    name: "Syracuse Commercial Real Estate",
    state: "New York",
    city: "Syracuse",
    coordinates: [43.0481, -76.1474],
    emissionScore: 38,
  },
  {
    name: "Upstate New York Commercial Real Estate",
    state: "New York",
    city: "Rochester",
    coordinates: [43.1566, -77.6088],
    emissionScore: 35,
  },
  {
    name: "Long Island Commercial Real Estate",
    state: "New York",
    city: "Hempstead",
    coordinates: [40.7282, -73.7949],
    emissionScore: 40,
  },
  {
    name: "New York City Commercial Real Estate",
    state: "New York",
    city: "New York City",
    coordinates: [40.7128, -74.0060],
    emissionScore: 30,
  },

  // North Carolina
  {
    name: "Charlotte Commercial Real Estate",
    state: "North Carolina",
    city: "Charlotte",
    coordinates: [35.2271, -80.8431],
    emissionScore: 68,
  },
  {
    name: "Greensboro Commercial Real Estate",
    state: "North Carolina",
    city: "Greensboro",
    coordinates: [36.0726, -79.7920],
    emissionScore: 65,
  },
  {
    name: "Raleigh Commercial Real Estate",
    state: "North Carolina",
    city: "Raleigh",
    coordinates: [35.7796, -78.6382],
    emissionScore: 62,
  },

  // North Dakota
  {
    name: "Fargo Commercial Real Estate",
    state: "North Dakota",
    city: "Fargo",
    coordinates: [46.8772, -96.7898],
    emissionScore: 88,
  },

  // Ohio
  {
    name: "Akron Commercial Real Estate",
    state: "Ohio",
    city: "Akron",
    coordinates: [41.0814, -81.5190],
    emissionScore: 90,
  },
  {
    name: "Cincinnati Commercial Real Estate",
    state: "Ohio",
    city: "Cincinnati",
    coordinates: [39.1031, -84.5120],
    emissionScore: 85,
  },
  {
    name: "Cleveland Commercial Real Estate",
    state: "Ohio",
    city: "Cleveland",
    coordinates: [41.4993, -81.6944],
    emissionScore: 88,
  },
  {
    name: "Columbus Commercial Real Estate",
    state: "Ohio",
    city: "Columbus",
    coordinates: [39.9612, -82.9988],
    emissionScore: 86,
  },

  // Oklahoma
  {
    name: "Oklahoma City Commercial Real Estate",
    state: "Oklahoma",
    city: "Oklahoma City",
    coordinates: [35.4676, -97.5164],
    emissionScore: 85,
  },
  {
    name: "Tulsa Commercial Real Estate",
    state: "Oklahoma",
    city: "Tulsa",
    coordinates: [36.15398, -95.992775],
    emissionScore: 82,
  },

  // Oregon
  {
    name: "Portland Commercial Real Estate",
    state: "Oregon",
    city: "Portland",
    coordinates: [45.5051, -122.6750],
    emissionScore: 28,
  },

  // Pennsylvania
  {
    name: "Allentown Commercial Real Estate",
    state: "Pennsylvania",
    city: "Allentown",
    coordinates: [40.6084, -75.4902],
    emissionScore: 65,
  },
  {
    name: "Harrisburg Commercial Real Estate",
    state: "Pennsylvania",
    city: "Harrisburg",
    coordinates: [40.2732, -76.8867],
    emissionScore: 68,
  },
  {
    name: "Philadelphia Commercial Real Estate",
    state: "Pennsylvania",
    city: "Philadelphia",
    coordinates: [39.9526, -75.1652],
    emissionScore: 70,
  },
  {
    name: "Pittsburgh Commercial Real Estate",
    state: "Pennsylvania",
    city: "Pittsburgh",
    coordinates: [40.4406, -79.9959],
    emissionScore: 72,
  },

  // Rhode Island
  {
    name: "Providence Commercial Real Estate",
    state: "Rhode Island",
    city: "Providence",
    coordinates: [41.8240, -71.4128],
    emissionScore: 30,
  },

  // South Carolina
  {
    name: "South Carolina Commercial Real Estate",
    state: "South Carolina",
    city: "Columbia",
    coordinates: [34.0007, -81.0348],
    emissionScore: 80,
  },

  // Tennessee
  {
    name: "Chattanooga Commercial Real Estate",
    state: "Tennessee",
    city: "Chattanooga",
    coordinates: [35.0456, -85.3097],
    emissionScore: 85,
  },
  {
    name: "Knoxville Commercial Real Estate",
    state: "Tennessee",
    city: "Knoxville",
    coordinates: [35.9606, -83.9207],
    emissionScore: 88,
  },
  {
    name: "Memphis Commercial Real Estate",
    state: "Tennessee",
    city: "Memphis",
    coordinates: [35.1495, -90.0490],
    emissionScore: 90,
  },
  {
    name: "Nashville Commercial Real Estate",
    state: "Tennessee",
    city: "Nashville",
    coordinates: [36.1627, -86.7816],
    emissionScore: 86,
  },

  // Texas
  {
    name: "Austin Commercial Real Estate",
    state: "Texas",
    city: "Austin",
    coordinates: [30.2672, -97.7431],
    emissionScore: 88,
  },
  {
    name: "Dallas Commercial Real Estate",
    state: "Texas",
    city: "Dallas",
    coordinates: [32.7767, -96.7970],
    emissionScore: 85,
  },
  {
    name: "Fort Worth Commercial Real Estate",
    state: "Texas",
    city: "Fort Worth",
    coordinates: [32.7555, -97.3308],
    emissionScore: 87,
  },
  {
    name: "El Paso / Cd. Juárez Commercial Real Estate",
    state: "Texas",
    city: "El Paso",
    coordinates: [31.7619, -106.4850],
    emissionScore: 82,
  },
  {
    name: "Ciudad Juárez Commercial Real Estate",
    state: "Texas",
    city: "Ciudad Juárez",
    coordinates: [31.6904, -106.4200],
    emissionScore: 80,
  },
  {
    name: "El Paso | Inmuebles Comerciales",
    state: "Texas",
    city: "El Paso",
    coordinates: [31.7619, -106.4850],
    emissionScore: 82,
  },
  {
    name: "Houston Commercial Real Estate",
    state: "Texas",
    city: "Houston",
    coordinates: [29.7604, -95.3698],
    emissionScore: 90,
  },
  {
    name: "McAllen Commercial Real Estate",
    state: "Texas",
    city: "McAllen",
    coordinates: [26.2034, -98.2300],
    emissionScore: 85,
  },
  {
    name: "San Antonio Commercial Real Estate",
    state: "Texas",
    city: "San Antonio",
    coordinates: [29.4241, -98.4936],
    emissionScore: 88,
  },

  // Utah
  {
    name: "Salt Lake City Commercial Real Estate",
    state: "Utah",
    city: "Salt Lake City",
    coordinates: [40.7608, -111.8910],
    emissionScore: 65,
  },

  // Virginia
  {
    name: "Norfolk Commercial Real Estate",
    state: "Virginia",
    city: "Norfolk",
    coordinates: [36.8508, -76.2859],
    emissionScore: 60,
  },
  {
    name: "Richmond Commercial Real Estate",
    state: "Virginia",
    city: "Richmond",
    coordinates: [37.5407, -77.4337],
    emissionScore: 62,
  },
  {
    name: "Tysons Corner Commercial Real Estate",
    state: "Virginia",
    city: "Tysons Corner",
    coordinates: [38.9251, -77.1460],
    emissionScore: 58,
  },

  // Washington
  {
    name: "Bellevue Commercial Real Estate",
    state: "Washington",
    city: "Bellevue",
    coordinates: [47.6101, -122.2007],
    emissionScore: 28,
  },
  {
    name: "Seattle Commercial Real Estate",
    state: "Washington",
    city: "Seattle",
    coordinates: [47.6062, -122.3321],
    emissionScore: 25,
  },
  {
    name: "Tacoma Commercial Real Estate",
    state: "Washington",
    city: "Tacoma",
    coordinates: [47.2529, -122.4443],
    emissionScore: 30,
  },

  // West Virginia
  {
    name: "West Virginia Commercial Real Estate",
    state: "West Virginia",
    city: "Charleston",
    coordinates: [38.3498, -81.6326],
    emissionScore: 92,
  },

  // Wisconsin
  {
    name: "Wisconsin Commercial Real Estate",
    state: "Wisconsin",
    city: "Milwaukee",
    coordinates: [43.0389, -87.9065],
    emissionScore: 68,
  },
];