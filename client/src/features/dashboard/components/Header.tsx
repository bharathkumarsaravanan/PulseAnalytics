import LogoutBtn from "all/components/LogoutBtn";

export default function DashboardHeader() {
  return (
    <header className="h-16 border-b flex items-center px-6 justify-between">
      <div>Header</div>
      <LogoutBtn />
    </header>
  );
}
