'use client';

import React, { useState, useEffect } from "react";

type MetricKey =
  | "energyEfficiency"
  | "waterConservation"
  | "wasteManagement"
  | "carbonFootprint"
  | "indoorAirQuality";

interface ActivityInputsProps {
  onScoreChange: (score: number) => void;
}

export const ActivityInputs = ({ onScoreChange }: ActivityInputsProps) => {
  const ranges: Record<MetricKey, { min: number; max: number }> = {
    energyEfficiency: { min: 50, max: 400 },
    waterConservation: { min: 0, max: 100 },
    wasteManagement: { min: 0, max: 100 },
    carbonFootprint: { min: 0, max: 100 },
    indoorAirQuality: { min: 0, max: 100 },
  };

  const [formData, setFormData] = useState<Record<MetricKey, number>>({
    energyEfficiency: ranges.energyEfficiency.min,
    waterConservation: ranges.waterConservation.min,
    wasteManagement: ranges.wasteManagement.min,
    carbonFootprint: ranges.carbonFootprint.min,
    indoorAirQuality: ranges.indoorAirQuality.min,
  });

  const [sustainabilityScore, setSustainabilityScore] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const key = name as MetricKey;
    const numericValue = parseFloat(value);
    setFormData((prev) => ({ ...prev, [key]: numericValue }));
  };

  const calculateSustainabilityScore = (data: Record<MetricKey, number>) => {
    const weights: Record<MetricKey, number> = {
      energyEfficiency: 0.30,
      waterConservation: 0.25,
      wasteManagement: 0.20,
      carbonFootprint: 0.15,
      indoorAirQuality: 0.10,
    };

    const isHigherBetter: Record<MetricKey, boolean> = {
      energyEfficiency: false,
      waterConservation: true,
      wasteManagement: true,
      carbonFootprint: false,
      indoorAirQuality: true,
    };

    const normalize = (
      value: number,
      { min, max }: { min: number; max: number },
      higherIsBetter: boolean
    ) => {
      const clampedValue = Math.max(Math.min(value, max), min);
      return higherIsBetter
        ? (clampedValue - min) / (max - min)
        : (max - clampedValue) / (max - min);
    };

    let totalScore = 0;
    for (const metric in data) {
      const key = metric as MetricKey;
      const value = data[key];
      const normalizedValue = normalize(value, ranges[key], isHigherBetter[key]);
      totalScore += normalizedValue * weights[key];
    }

    return Math.round(totalScore * 100);
  };

  useEffect(() => {
    const score = calculateSustainabilityScore(formData);
    setSustainabilityScore(score);
    onScoreChange(score);
  }, [formData, onScoreChange]);

  return (
    <div className="p-6 border rounded-lg shadow bg-white w-full">
      <h2 className="text-xl font-semibold mb-8 text-center">Sustainability Metrics</h2>
      <form className="space-y-24">
        <div>
          <label className="block text-md font-medium mb-4" htmlFor="energyEfficiency">
            Energy Efficiency (kWh/㎡): <span className="font-semibold">{formData.energyEfficiency}</span>
          </label>
          <input
            type="range"
            name="energyEfficiency"
            id="energyEfficiency"
            value={formData.energyEfficiency}
            onChange={handleChange}
            min={ranges.energyEfficiency.min}
            max={ranges.energyEfficiency.max}
            step="1"
            className="w-full h-3 rounded-lg appearance-none cursor-pointer green-slider"
          />
        </div>
        <div>
          <label className="block text-md font-medium mb-4" htmlFor="waterConservation">
            Water Conservation (%): <span className="font-semibold">{formData.waterConservation}%</span>
          </label>
          <input
            type="range"
            name="waterConservation"
            id="waterConservation"
            value={formData.waterConservation}
            onChange={handleChange}
            min={ranges.waterConservation.min}
            max={ranges.waterConservation.max}
            step="1"
            className="w-full h-3 rounded-lg appearance-none cursor-pointer green-slider"
          />
        </div>
        <div>
          <label className="block text-md font-medium mb-4" htmlFor="wasteManagement">
            Waste Management (%): <span className="font-semibold">{formData.wasteManagement}%</span>
          </label>
          <input
            type="range"
            name="wasteManagement"
            id="wasteManagement"
            value={formData.wasteManagement}
            onChange={handleChange}
            min={ranges.wasteManagement.min}
            max={ranges.wasteManagement.max}
            step="1"
            className="w-full h-3 rounded-lg appearance-none cursor-pointer green-slider"
          />
        </div>
        <div>
          <label className="block text-md font-medium mb-4" htmlFor="carbonFootprint">
            Carbon Footprint (kg CO₂): <span className="font-semibold">{formData.carbonFootprint}</span>
          </label>
          <input
            type="range"
            name="carbonFootprint"
            id="carbonFootprint"
            value={formData.carbonFootprint}
            onChange={handleChange}
            min={ranges.carbonFootprint.min}
            max={ranges.carbonFootprint.max}
            step="1"
            className="w-full h-3 rounded-lg appearance-none cursor-pointer green-slider"
          />
        </div>
        <div>
          <label className="block text-md font-medium mb-4" htmlFor="indoorAirQuality">
            Indoor Air Quality (%): <span className="font-semibold">{formData.indoorAirQuality}%</span>
          </label>
          <input
            type="range"
            name="indoorAirQuality"
            id="indoorAirQuality"
            value={formData.indoorAirQuality}
            onChange={handleChange}
            min={ranges.indoorAirQuality.min}
            max={ranges.indoorAirQuality.max}
            step="1"
            className="w-full h-3 rounded-lg appearance-none cursor-pointer green-slider"
          />
        </div>
      </form>

      {/* Custom styles for the sliders */}
      <style jsx>{`
        input[type='range'].green-slider {
          -webkit-appearance: none;
          width: 100%;
          background: transparent;
        }
        input[type='range'].green-slider:focus {
          outline: none;
        }
        input[type='range'].green-slider::-webkit-slider-runnable-track {
          width: 100%;
          height: 10px;
          cursor: pointer;
          background: #d1d5db;
          border-radius: 5px;
        }
        input[type='range'].green-slider::-webkit-slider-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #4caf50; /* Green color */
          cursor: pointer;
          -webkit-appearance: none;
          margin-top: -7px; /* Center the thumb */
        }
        input[type='range'].green-slider::-moz-range-track {
          width: 100%;
          height: 10px;
          cursor: pointer;
          background: #d1d5db;
          border-radius: 5px;
        }
        input[type='range'].green-slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #4caf50;
          cursor: pointer;
        }
        input[type='range'].green-slider::-ms-track {
          width: 100%;
          height: 10px;
          cursor: pointer;
          background: transparent;
          border-color: transparent;
          color: transparent;
        }
        input[type='range'].green-slider::-ms-fill-lower {
          background: #d1d5db;
          border-radius: 5px;
        }
        input[type='range'].green-slider::-ms-fill-upper {
          background: #d1d5db;
          border-radius: 5px;
        }
        input[type='range'].green-slider::-ms-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #4caf50;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};
