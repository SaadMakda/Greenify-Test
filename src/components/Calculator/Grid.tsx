import React, { useState } from "react";
import { StatCards } from "./StatCards";
import { ActivityInputs } from "./ActivityInputs";
import { UsageRadar } from "./UsageRadar";
import { RecentTransactions } from "./RecentTransactions";

export const Grid = () => {
  const [sustainabilityScore, setSustainabilityScore] = useState(0);

  // Handle score change from ActivityInputs
  const handleScoreChange = (score: number) => {
    setSustainabilityScore(score);
  };

  return (
    <div className="px-4 grid gap-6 grid-cols-12">
      <div className="col-span-12 lg:col-span-6">
        {/* Pass the handleScoreChange callback to ActivityInputs */}
        <ActivityInputs onScoreChange={handleScoreChange} />
      </div>
      <div className="col-span-12 lg:col-span-6">
        {/* Pass the sustainabilityScore to UsageRadar */}
        <UsageRadar score={sustainabilityScore} />
      </div>
    </div>
  );
};
