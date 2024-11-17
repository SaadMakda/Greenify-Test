import React from "react";
import { StatCards } from "./StatCards";
import { ActivityInputs } from "./ActivityInputs";
import { UsageRadar } from "./UsageRadar";
import { RecentTransactions } from "./RecentTransactions";

export const Grid = () => {
  return (
    <div className="px-4 grid gap-6 grid-cols-12">
      {/* Adjust column span here */}
      <div className="col-span-12 lg:col-span-6">
        <ActivityInputs />
      </div>
      <div className="col-span-12 lg:col-span-6">
        <UsageRadar />
      </div>
      <div className="col-span-12">
        <RecentTransactions />
      </div>
    </div>
  );
};