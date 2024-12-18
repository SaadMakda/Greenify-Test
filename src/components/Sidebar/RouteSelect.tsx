"use client";

import React from "react";
import { usePathname } from "next/navigation"; // Import hook to get current path
import { IconType } from "react-icons";
import { TbMessageChatbot } from "react-icons/tb";
import { IoCalculatorOutline } from "react-icons/io5";
import { FaMap } from "react-icons/fa";
import Link from "next/link";

export const RouteSelect = () => {
  const pathname = usePathname(); // Get the current route

  return (
    <div className="space-y-1">
      {/* Render Route Buttons */}
      <Route
        Icon={IoCalculatorOutline}
        selected={pathname === "/dashboard"} // Check if the current route matches
        title="Carbon Calculator"
        href="/dashboard"
      />
      <Route
        Icon={TbMessageChatbot}
        selected={pathname === "/chatbot"} // Check if the current route matches
        title="Chatbot"
        href="/chatbot"
      />
      <Route
        Icon={FaMap}
        selected={pathname === "/map"} // Check if the current route matches
        title="Map"
        href="/map"
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
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-all duration-200 ease-in-out ${
        selected
          ? "bg-gray-700 text-white shadow-md"
          : "bg-transparent text-gray-400 hover:bg-gray-800 hover:shadow-sm"
      }`}
      aria-label={`Navigate to ${title}`}
    >
      <Icon
        className={`transition-colors duration-200 ${selected ? "text-violet-400" : "text-gray-500"}`}
      />
      <span>{title}</span>
    </Link>
  );  
};
