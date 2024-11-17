import React from "react";

export const AccountToggle = () => {
  return (
    <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
      <button className="flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center">
        <img
          src="/leaf.png"
          alt="avatar"
          className="w-16 h-16 rounded" // Removed bg-violet-500 and shadow
        />
        <div className="text-start">
          <span className="text-2xl font-bold block">Greenify</span>
          <span className="text-xs block text-stone-500"></span>
        </div>
      </button>
    </div>
  );
};
