import LogoutBtn from "../../../components/LogoutBtn";
import { sidebarItems } from "all/features/dashboard/config/sidebar";
import DashboardSideBar from "all/features/dashboard/components/SideBar";
import DashboardHeader from "all/features/dashboard/components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-lg font-bold mb-4">SaaS</h2>
        <DashboardSideBar items={sidebarItems} />
      </aside>

      {/* Right Section */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <DashboardHeader />

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
