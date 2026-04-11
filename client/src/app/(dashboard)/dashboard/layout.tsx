import ActiveLink from "../../../components/ActiveLink";
import LogoutBtn from "../../../components/LogoutBtn";
import { sidebarItems } from "all/features/dashboard/config/sidebar";

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
        <nav className="space-y-2">
          {
            sidebarItems.map((item, i) => (
              <div key={i+item.label}>
              <ActiveLink  href={item.href}>{item.label}</ActiveLink>
              <br />
              </div>
            ))
          }
        </nav>
      </aside>

      {/* Right Section */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 border-b flex items-center px-6 justify-between">
          <div>Header</div>
          <LogoutBtn />
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
