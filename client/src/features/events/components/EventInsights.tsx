import Card from 'all/components/Card';
import type { EventStats } from '../utils/eventAnalytics';

type AdditionalProps = {
  isLoading: boolean;
}

export default function EventInsights({ totalEvents, clicks, views, topElements, isLoading }: EventStats & AdditionalProps) {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-8'>
        <Card
          header='Total Events'
          context={totalEvents}
          isLoading={isLoading}
        />
        <Card
          header='Clicks'
          context={clicks}
          isLoading={isLoading}
        />
        <Card
          header='Views'
          context={views}
          isLoading={isLoading}
        />
      </div>
      <div className='bg-gray-950'>
        <h3 className='text-lg font-semibold text-gray-300'>Top Elements</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-8'>
            {
              Object.entries(topElements).map(([key, val], i) => (
                <Card header={key} context={val} />
              ))
            }
        </div>
      </div>
    </div>
  );
}
