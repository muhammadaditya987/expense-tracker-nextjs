"use client";

import {useState} from "react";
import type { BaseProps } from "@/types/common";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function DashboardLayout({children}: BaseProps) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return(
        <div className="flex">
            <Sidebar 
                isOpen={isSidebarOpen}
            />
            <main className="flex-1 bg-gray-100 min-h-screen lg:ml-64">
            <Navbar
            onToggleSidebar={() =>
                setIsSidebarOpen(!isSidebarOpen)
            }
            />

            {children}
        </main>
        </div>
    )
}