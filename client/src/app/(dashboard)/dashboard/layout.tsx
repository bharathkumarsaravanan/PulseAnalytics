import { sidebarItems } from "all/features/dashboard/config/sidebar";
import DashboardSideBar from "all/features/dashboard/components/SideBar";
import DashboardHeader from "all/features/dashboard/components/Header";
import { cookies } from 'next/headers';
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const role = cookieStore.get('role')?.value;

  if (!role) {
    redirect("/login")
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-lg font-bold mb-4">SaaS</h2>
        <DashboardSideBar role={role} items={sidebarItems} />
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
