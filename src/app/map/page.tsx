'use client';

import USMap from "@/components/USMap";
import Sidebar from "@/components/Sidebar/Sidebar";

const MapPage = () => {
  return (
    <main className="grid gap-4 p-4 grid-cols-[220px,_1fr]">
      <Sidebar />
      <USMap />
    </main>
  );
};

export default MapPage;