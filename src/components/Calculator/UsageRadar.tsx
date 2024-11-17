"use client";

import React from "react";
import { FiEye } from "react-icons/fi";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export const UsageRadar = () => {
  const score = 85; // Example sustainability score (out of 100)

  const data = {
    datasets: [
      {
        data: [score, 100 - score], // Score and remaining value
        backgroundColor: ["#4caf50", "#e0e0e0"], // Green for score, gray for remaining
        borderWidth: 0, // No border
      },
    ],
  };

  const options = {
    cutout: "80%", // Creates a donut-style chart
    plugins: {
      tooltip: { enabled: false }, // Disable tooltips
      legend: { display: false }, // Hide legend
    },
  };

  return (
    <div className="col-span-4 overflow-hidden rounded border border-stone-300">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiEye /> Sustainability Score
        </h3>
      </div>

      <div className="h-72 flex items-center justify-center px-4">
        {/* Increased size */}
        <div className="relative w-48 h-48">
          {/* Doughnut Chart */}
          <Doughnut data={data} options={options} />
          {/* Score Text in the Center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-green-500">{score}</span>
            <span className="text-sm text-stone-500">Sustainability Score</span>
          </div>
        </div>
      </div>
    </div>
  );
};
