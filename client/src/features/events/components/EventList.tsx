import { useState, useMemo } from 'react';
import useDebounce from 'all/hooks/useDebounce';
import SearchInput from 'all/features/dashboard/components/SearchInput';
import CampaignTable from '../../../components/DataTable';
import type { EventData } from '../utils/eventAnalytics';
import EventsRow from './EventsRow';
import { EmptyTableState } from 'all/assets/icons/EmptyTableState';

export default function EventList({
  data,
  lastUpdated,
  isLoading
}: {
  data: EventData[];
  lastUpdated: string;
  isLoading: boolean;
}) {
  const [query, setQuery] = useState<string>('');
  const debounceValue = useDebounce(query, 300);
  const searched = useMemo(() => {
    if (!debounceValue) {
      return data;
    }

    return data?.filter((tr) => {
      const elem = tr.element.toLowerCase();
      return elem.includes(debounceValue.toLowerCase());
    });
  }, [data, debounceValue]);

  return (
    <div>
      <div className='flex justify-between align-center'>
        <h3 className='text-lg font-semibold text-gray-300 mb-4'>Events</h3>
        <p>Last Updated: {lastUpdated}</p>
      </div>
      <div>
        <SearchInput
          query={query}
          queryChange={(e) => setQuery(e)}
          className={'max-h-10 border border-gray-600 rounded-sm'}
          placeholder={'Search'}
        />

        <CampaignTable
          isEmpty={!searched?.length}
          isLoading={isLoading}
          tableHeader={[
            { id: '_id', name: 'Event Id', style: {}, className: 'flex-[1.4]' },
            { id: 'page', name: 'Page', style: {}, className: 'flex-[1.4]' },
            {
              id: 'timestamp',
              name: 'Timestamp',
              style: {},
              className: 'flex-[3]'
            },
            { id: 'type', name: 'Type', style: {}, className: 'flex-[1.4]' },
            { id: 'element', name: 'Element', style: {}, className: 'flex-[3]' }
          ]}
          rowCount={searched?.length || 0}
          rowHeight={45}
          rowProps={{ data: searched }}
          rowComponent={EventsRow}
        />
      </div>
    </div>
  );
}
