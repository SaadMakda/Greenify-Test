import React from "react";
import { FiCalendar } from "react-icons/fi";

export const TopBar = () => {
  return (
    <div className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200">
      <div className="flex items-center justify-center p-0.5">
        <div className="text-center">
          <span className="text-2xl font-bold block">Sustainability Score Calculator</span>
        </div>
      </div>
    </div>
  );
};
