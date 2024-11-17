'use client';

import React from "react";
import { FiEye } from "react-icons/fi";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface UsageRadarProps {
  score: number;
}

export const UsageRadar = ({ score }: UsageRadarProps) => {
  // Function to calculate the color based on the score
  const getColor = (score: number): string => {
    let hue: number;
    if (score <= 50) {
      // From red (0°) to yellow (60°)
      hue = (score / 50) * 60;
    } else {
      // From yellow (60°) to green (120°)
      hue = 60 + ((score - 50) / 50) * 60;
    }
    return `hsl(${hue}, 85%, 50%)`;
  };

  const color = getColor(score);

  const data = {
    datasets: [
      {
        data: [score, 100 - score],
        backgroundColor: [color, "#e0e0e0"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "80%",
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
    },
  };

  return (
    <div className="col-span-12 lg:col-span-6 overflow-hidden rounded border border-stone-300">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiEye /> Sustainability Score
        </h3>
      </div>

      <div className="h-72 flex items-center justify-center px-4">
        <div className="relative w-48 h-48">
          <Doughnut data={data} options={options} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold" style={{ color: color }}>
              {score}
            </span>
            <span className="text-sm text-stone-500">Sustainability Score</span>
          </div>
        </div>
      </div>
    </div>
  );
};
