import React from "react";
import { StatCards } from "../Calculator/StatCards";
import { ActivityGraph } from "./ActivityGraph";
import { UsageRadar } from "../Calculator/UsageRadar";
import { RecentTransactions } from "../Calculator/RecentTransactions";

export const Grid = () => {
  return (
    <div className="px-4 grid gap-3 grid-cols-12">
      <StatCards />
      <ActivityGraph />
      <UsageRadar />
      <RecentTransactions />
    </div>
  );
};