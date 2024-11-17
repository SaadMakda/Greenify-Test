import React, { useState } from "react";
import { ActivityInputs } from "./ActivityInputs";
import { UsageRadar } from "./UsageRadar";
import { GrowingTree } from "./GrowingTree"; // Import the tree component

export const Grid = () => {
  const [sustainabilityScore, setSustainabilityScore] = useState(0);

  // Handle score change from ActivityInputs
  const handleScoreChange = (score: number) => {
    setSustainabilityScore(score);
  };

  return (
    <div className="px-4 grid gap-6 grid-cols-12">
      <div className="col-span-12 lg:col-span-6">
        <ActivityInputs onScoreChange={handleScoreChange} />
      </div>
      <div className="col-span-12 lg:col-span-6 flex flex-col gap-6">
        <UsageRadar score={sustainabilityScore} />

        <div className="w-full h-96 bg-gray-800 text-white rounded border border-stone-600 shadow-lg flex items-center justify-center">
          <GrowingTree score={sustainabilityScore} />
        </div>
      </div>
    </div>
  );
};
