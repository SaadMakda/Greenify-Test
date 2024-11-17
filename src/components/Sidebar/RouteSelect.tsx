"use client";

import React from "react";
import { usePathname } from "next/navigation"; // Import hook to get current path
import { IconType } from "react-icons";
import StaggeredDropDown from "./StaggeredDropdown"; // Ensure file name and path are correct
import { FiHome, FiMessageCircle, FiBarChart } from "react-icons/fi"; // Import the new icon for the Carbon Calculator
import Link from "next/link";

export const RouteSelect = () => {
  const pathname = usePathname(); // Get the current route

  return (
    <div className="space-y-1">
      {/* Render Route Buttons */}
      <Route
        Icon={FiHome}
        selected={pathname === "/dashboard"} // Check if the current route matches
        title="Dashboard"
        href="/dashboard"
      />
      <Route
        Icon={FiMessageCircle}
        selected={pathname === "/chatbot"} // Check if the current route matches
        title="Chatbot"
        href="/chatbot"
      />
      
      {/* Add Route for Carbon Calculator */}
      <Route
        Icon={FiBarChart} // You can change this to a more appropriate icon if you prefer
        selected={pathname === "/carbon-calculator"} // Check if the current route matches
        title="Carbon Calculator"
        href="/carbon-calculator"
      />

      {/* Call StaggeredDropdown */}
      {/*
      <div className="mt-4">
        <StaggeredDropDown />
      </div>
      */}
    </div>
  );
};

const Route = ({
  selected,
  Icon,
  title,
  href,
}: {
  selected: boolean;
  Icon: IconType;
  title: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
        selected
          ? "bg-white text-stone-950 shadow"
          : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
      }`}
    >
      <Icon className={selected ? "text-violet-500" : ""} />
      <span>{title}</span>
    </Link>
  );
};
