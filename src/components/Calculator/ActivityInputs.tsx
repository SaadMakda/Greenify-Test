'use client';

import React, { useState, useEffect } from "react";

// Define the valid keys for metrics
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
    const [formData, setFormData] = useState<Record<MetricKey, string>>({
      energyEfficiency: "",
      waterConservation: "",
      wasteManagement: "",
      carbonFootprint: "",
      indoorAirQuality: "",
    });
  
    const [sustainabilityScore, setSustainabilityScore] = useState(0);
  
    // Handle form data changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    // Function to calculate sustainability score based on the form data
    const calculateSustainabilityScore = (data: Record<MetricKey, string>) => {
      const weights: Record<MetricKey, number> = {
        energyEfficiency: 0.30,
        waterConservation: 0.25,
        wasteManagement: 0.20,
        carbonFootprint: 0.15,
        indoorAirQuality: 0.10,
      };
  
      const ranges: Record<MetricKey, { min: number; max: number }> = {
        energyEfficiency: { min: 50, max: 400 },
        waterConservation: { min: 0, max: 100 },
        wasteManagement: { min: 0, max: 100 },
        carbonFootprint: { min: 0, max: 100 },
        indoorAirQuality: { min: 0, max: 100 },
      };
  
      const normalize = (value: number, { min, max }: { min: number; max: number }) =>
        (value - min) / (max - min);
  
      let totalScore = 0;
      for (const metric in data) {
        const key = metric as MetricKey;
        const value = parseFloat(data[key]) || 0;
        const normalizedValue = normalize(value, ranges[key]);
        totalScore += normalizedValue * weights[key];
      }
  
      return Math.round(totalScore * 100);
    };
  
    // Recalculate score whenever form data changes
    useEffect(() => {
      const score = calculateSustainabilityScore(formData);
      setSustainabilityScore(score);
      onScoreChange(score); // Send the score to the parent component
    }, [formData, onScoreChange]);
  
    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Submitted Data:", formData);
      console.log("Calculated Sustainability Score:", sustainabilityScore);
      // Add logic to process or save the form data
    };
  
    return (
      <div className="p-4 border rounded-lg shadow bg-white w-full">
        <h2 className="text-lg font-semibold mb-4">Sustainability Metrics</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          {/* Energy Efficiency */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="energyEfficiency">
              Energy Efficiency
            </label>
            <input
              type="number"
              name="energyEfficiency"
              id="energyEfficiency"
              value={formData.energyEfficiency}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter value"
            />
          </div>
          {/* Water Conservation */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="waterConservation">
              Water Conservation
            </label>
            <input
              type="number"
              name="waterConservation"
              id="waterConservation"
              value={formData.waterConservation}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter value"
            />
          </div>
          {/* Waste Management */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="wasteManagement">
              Waste Management
            </label>
            <input
              type="number"
              name="wasteManagement"
              id="wasteManagement"
              value={formData.wasteManagement}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter value"
            />
          </div>
          {/* Carbon Footprint */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="carbonFootprint">
              Carbon Footprint
            </label>
            <input
              type="number"
              name="carbonFootprint"
              id="carbonFootprint"
              value={formData.carbonFootprint}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter value"
            />
          </div>
          {/* Indoor Air Quality */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="indoorAirQuality">
              Indoor Air Quality
            </label>
            <input
              type="number"
              name="indoorAirQuality"
              id="indoorAirQuality"
              value={formData.indoorAirQuality}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter value"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Submit
          </button>
        </form>
      </div>
    );
  };