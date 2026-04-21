'use client';
import { getDashboardData } from 'all/api/dashboard.service';
import DashboardStats from 'all/features/dashboard/components/DashboardStats';
import VisitorsChart from '../components/VisitorsChart';
import { useQuery } from '@tanstack/react-query';

export default function DashboardClient() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['dashboard','stats'],
    queryFn: getDashboardData
  }); 

  if (isPending) return <span>Loading...</span>;
  if (isError) return <span>{error.message}</span>;

  return (
    <>
      <h1 className='text-xl font-bold mb-4'>Dashboard</h1>
      <DashboardStats {...data} />
      <VisitorsChart chartData={data.trend} />
    </>
  );
}
