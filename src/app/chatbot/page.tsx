'use client';

import Dashboard from "@/components/Dashboard/Dashboard";
import Sidebar from "@/components/Sidebar/Sidebar";


const ChatbotPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default ChatbotPage;

