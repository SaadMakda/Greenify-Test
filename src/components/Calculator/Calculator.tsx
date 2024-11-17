import React from "react";
import { TopBar } from "./TopBar";
import { Grid } from "./Grid";

const Calculator = () => {
  return (
    <div className="bg-white rounded-lg pb-4 shadow">
      <TopBar />
      <Grid />
    </div>
  );
};

export default Calculator;