"use client";
import LogoutBtn from "all/components/LogoutBtn";
import { sidebarItems } from "../config/sidebar";
import { usePathname } from "next/navigation";

export default function DashboardHeader() {
  const pathname = usePathname();
  const currentPage = sidebarItems.find(item => item.href == pathname)?.label;
  return (
    <header className="h-16 border-b flex items-center px-6 justify-between">
      <div className="font-semibold text-gray-400">{currentPage}</div>
      <LogoutBtn />
    </header>
  );
}
