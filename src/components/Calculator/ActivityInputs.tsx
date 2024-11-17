'use client';

import React, { useState } from "react";

export const ActivityInputs = () => {
  const [formData, setFormData] = useState({
    energyEfficiency: "",
    waterConservation: "",
    wasteManagement: "",
    carbonFootprint: "",
    indoorAirQuality: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
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