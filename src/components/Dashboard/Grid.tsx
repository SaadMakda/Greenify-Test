import React from "react";
import { ActivityGraph } from "./ActivityGraph";
import { UsageRadar } from "./UsageRadar";
import USMapWithEmissions from './Map';

export const Grid = () => {
  return (
    <div className="px-4 grid gap-3 grid-cols-12">
      <div className="col-span-12 md:col-span-6">
        <ActivityGraph />
      </div>
      <div className="col-span-12 md:col-span-6">
        <UsageRadar />
      </div>
      <div className="col-span-12">
        <USMapWithEmissions />
      </div>
    </div>
  );
};
