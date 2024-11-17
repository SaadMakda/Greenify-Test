import React from "react";
import { TopBar } from "./TopBar";
import { Grid } from "./Grid";

const Calculator = () => {
  return (
    <div className="bg-gray-800 text-white rounded-lg pb-4 shadow-lg">
      <TopBar />
      <Grid />
    </div>
  );
};

export default Calculator;
