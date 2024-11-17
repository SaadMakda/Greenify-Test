"use client";

import React from "react";
import { IconType } from "react-icons";
import StaggeredDropDown from "./StaggeredDropdown"; // Corrected import (Ensure file name and path are correct)
import { FiDollarSign, FiHome, FiLink, FiPaperclip, FiUsers } from "react-icons/fi";

export const RouteSelect = () => {
  return (
    <div className="space-y-1">
      {/* Render Route Button */}
      <Route Icon={FiHome} selected={true} title="Dashboard" />
      
      {/* Call StaggeredDropdown */}
      <div className="mt-4">
        <StaggeredDropDown />
      </div>
    </div>
  );
};

const Route = ({
  selected,
  Icon,
  title,
}: {
  selected: boolean;
  Icon: IconType;
  title: string;
}) => {
  return (
    <button
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
        selected
          ? "bg-white text-stone-950 shadow"
          : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
      }`}
    >
      <Icon className={selected ? "text-violet-500" : ""} />
      <span>{title}</span>
    </button>
  );
};


