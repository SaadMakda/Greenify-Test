// src/lib/emissions.ts

export type EmissionLevel = 'green' | 'orange' | 'red';

export interface StateEmissionData {
  state: string;
  level: EmissionLevel;
  emissionScore: number;
}

export const emissionsData: StateEmissionData[] = [
  { state: 'Alabama', level: 'red', emissionScore: 85 },
  { state: 'Alaska', level: 'green', emissionScore: 30 },
  { state: 'Arizona', level: 'orange', emissionScore: 65 },
  { state: 'Arkansas', level: 'red', emissionScore: 80 },
  { state: 'California', level: 'green', emissionScore: 25 },
  { state: 'Colorado', level: 'green', emissionScore: 35 },
  { state: 'Connecticut', level: 'green', emissionScore: 40 },
  { state: 'Delaware', level: 'orange', emissionScore: 60 },
  { state: 'Florida', level: 'orange', emissionScore: 70 },
  { state: 'Georgia', level: 'red', emissionScore: 90 },
  { state: 'Hawaii', level: 'green', emissionScore: 20 },
  { state: 'Idaho', level: 'red', emissionScore: 80 },
  { state: 'Illinois', level: 'orange', emissionScore: 68 },
  { state: 'Indiana', level: 'red', emissionScore: 85 },
  { state: 'Iowa', level: 'orange', emissionScore: 70 },
  { state: 'Kansas', level: 'red', emissionScore: 78 },
  { state: 'Kentucky', level: 'red', emissionScore: 88 },
  { state: 'Louisiana', level: 'red', emissionScore: 92 },
  { state: 'Maine', level: 'green', emissionScore: 28 },
  { state: 'Maryland', level: 'green', emissionScore: 32 },
  { state: 'Massachusetts', level: 'green', emissionScore: 30 },
  { state: 'Michigan', level: 'orange', emissionScore: 65 },
  { state: 'Minnesota', level: 'green', emissionScore: 40 },
  { state: 'Mississippi', level: 'red', emissionScore: 85 },
  { state: 'Missouri', level: 'red', emissionScore: 80 },
  { state: 'Montana', level: 'red', emissionScore: 82 },
  { state: 'Nebraska', level: 'red', emissionScore: 85 },
  { state: 'Nevada', level: 'orange', emissionScore: 70 },
  { state: 'New Hampshire', level: 'green', emissionScore: 25 },
  { state: 'New Jersey', level: 'green', emissionScore: 35 },
  { state: 'New Mexico', level: 'orange', emissionScore: 60 },
  { state: 'New York', level: 'green', emissionScore: 30 },
  { state: 'North Carolina', level: 'orange', emissionScore: 68 },
  { state: 'North Dakota', level: 'red', emissionScore: 88 },
  { state: 'Ohio', level: 'red', emissionScore: 90 },
  { state: 'Oklahoma', level: 'red', emissionScore: 85 },
  { state: 'Oregon', level: 'green', emissionScore: 28 },
  { state: 'Pennsylvania', level: 'orange', emissionScore: 70 },
  { state: 'Rhode Island', level: 'green', emissionScore: 32 },
  { state: 'South Carolina', level: 'red', emissionScore: 80 },
  { state: 'South Dakota', level: 'red', emissionScore: 85 },
  { state: 'Tennessee', level: 'red', emissionScore: 90 },
  { state: 'Texas', level: 'red', emissionScore: 88 },
  { state: 'Utah', level: 'orange', emissionScore: 65 },
  { state: 'Vermont', level: 'green', emissionScore: 20 },
  { state: 'Virginia', level: 'orange', emissionScore: 60 },
  { state: 'Washington', level: 'green', emissionScore: 25 },
  { state: 'West Virginia', level: 'red', emissionScore: 92 },
  { state: 'Wisconsin', level: 'orange', emissionScore: 68 },
  { state: 'Wyoming', level: 'red', emissionScore: 85 },
];