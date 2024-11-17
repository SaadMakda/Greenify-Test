'use client';

import Calculator from "@/components/Calculator/Calculator";
import Sidebar from "@/components/Sidebar/Sidebar";


const DashboardPage = () => {
  return (
    <main className="grid gap-4 p-4 grid-cols-[220px,_1fr]">
      <Sidebar />
      <Calculator />
    </main>
  );
};

export default DashboardPage;
