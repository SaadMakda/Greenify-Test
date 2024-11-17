import React from "react";

export const AccountToggle = () => {
  return (
    <div className="border-b mb-4 mt-2 pb-4 border-gray-700 bg-gray-900">
      <button className="flex p-0.5 rounded transition-colors relative gap-2 w-full items-center hover:bg-gray-800">
        <img
          src="/leaf.png"
          alt="avatar"
          className="w-16 h-16 rounded"
        />
        <div className="text-start">
          <span className="text-2xl font-bold block text-white">Greenify</span>
          <span className="text-xs block text-gray-400"></span>
        </div>
      </button>
    </div>
  );  
};
