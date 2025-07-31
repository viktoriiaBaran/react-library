"use client";

import { useState } from "react";
import { Input } from "@/components/Input/Input";
import Toast from "@/components/Toast/Toast";
import { SidebarMenu } from "@/components/SidebarMenu/SidebarMenu";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="font-sans min-h-screen bg-gray-50 text-gray-800 relative">
      <header className="px-6 py-4 shadow-md bg-white flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
          onClick={() => setSidebarOpen(true)}
        >
          Menu
        </button>
      </header>

      <main className="p-8 flex flex-col gap-8 items-center justify-start">
        {/* Input fields */}
        <div className="w-full max-w-md space-y-4">
          <Input type="password" clearable />
          <Input type="text" clearable />
        </div>

        {/* Toast */}
          <Toast />
      </main>

      {/* Sidebar menu */}
      <SidebarMenu
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        items={[
          { label: "Dashboard" },
          {
            label: "Settings",
            children: [
              { label: "Profile" },
              { label: "Security" },
            ],
          },
          {
            label: "Help",
            children: [
              { label: "FAQ" },
              { label: "Contact Support" },
            ],
          },
        ]}
      />
    </div>
  );
}
