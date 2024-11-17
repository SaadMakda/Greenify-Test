import React from "react";
import { ActivityGraph } from "./ActivityGraph";
import { UsageRadar } from "./UsageRadar";

export const Grid = () => {
  return (
    <div className="px-4 grid gap-3 grid-cols-12">
      <ActivityGraph />
      <UsageRadar />
    </div>
  );
};