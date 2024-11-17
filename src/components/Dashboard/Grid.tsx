import React from "react";
import USMapWithEmissions from './Map';

export const Grid = () => {
  return (
    <div className="px-4 grid gap-3 grid-cols-12">
      <div className="col-span-12 md:col-span-6">
      </div>
      <div className="col-span-12 md:col-span-6">
      </div>
      <div className="col-span-12">
        <USMapWithEmissions />
      </div>
    </div>
  );
};
