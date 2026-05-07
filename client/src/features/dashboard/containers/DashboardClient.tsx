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

  return (
    <>
      <DashboardStats isLoading={isPending} {...data} />
      <VisitorsChart isEmpty={!data?.trend?.length} isLoading={isPending} chartData={data?.trend || []} />
    </>
  );
}
