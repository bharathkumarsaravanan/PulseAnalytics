'use client';
import { useQuery } from '@tanstack/react-query';
import getEventsData from 'all/api/events.service';
import EventInsights from '../components/EventInsights';
import { useMemo } from 'react';
import { analyzeEvents } from '../utils/eventAnalytics';
import EventList from '../components/EventList';

export default function EventContainer() {
  const { data, isPending, isError, error, dataUpdatedAt } = useQuery({
    queryKey: ['events'],
    queryFn: getEventsData,
    refetchInterval: 30000,
    refetchOnWindowFocus: true
  });
  const lastUpdated = dataUpdatedAt
    ? new Date(dataUpdatedAt).toLocaleTimeString()
    : 'Never';
  const eventAnalytics = useMemo(() => {
    return analyzeEvents(data);
  }, [data]);

  return (
    <div>
      <EventInsights isLoading={isPending} {...eventAnalytics} />
      <EventList isLoading={isPending} lastUpdated={lastUpdated} data={data} />
    </div>
  );
}
