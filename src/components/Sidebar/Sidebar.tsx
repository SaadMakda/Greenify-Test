import React from "react";
import { AccountToggle } from "./AccountToggle";
import { RouteSelect } from "./RouteSelect";
import { Plan } from "./Plan";

const Sidebar = () => {
  return (
    <div>
      <div className="overflow-y sticky top-4 h-[calc(100vh-32px-48px)]">
        <AccountToggle />
        <RouteSelect />
      </div>

      <Plan />
    </div>
  );
};

export default Sidebar;
