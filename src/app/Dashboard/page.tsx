'use client';

import Dashboard from "@/components/Calculator/Calculator";
import Sidebar from "@/components/Sidebar/Sidebar";


const DashboardPage = () => {
  return (
    <main className="grid gap-4 p-4 grid-cols-[220px,_1fr]">
      <Sidebar />
      <Dashboard />
    </main>
  );
};

export default DashboardPage;
