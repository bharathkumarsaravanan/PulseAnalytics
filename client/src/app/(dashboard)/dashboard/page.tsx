import { getDashboardData } from "all/services/dashboard.service";
import DashboardStats from "all/features/dashboard/components/DashboardStats";

export default async function DashboardPage() {
  const data = await getDashboardData();

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>
      <DashboardStats {...data} />
    </div>
  );
}