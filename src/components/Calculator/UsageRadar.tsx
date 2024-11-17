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
  const data = {
    datasets: [
      {
        data: [score, 100 - score],
        backgroundColor: ["#4caf50", "#e0e0e0"],
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
            <span className="text-4xl font-bold text-green-500">{score}</span>
            <span className="text-sm text-stone-500">Sustainability Score</span>
          </div>
        </div>
      </div>
    </div>
  );
};
