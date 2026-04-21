'use client';
import getCampaignsData from 'all/api/campaigns.service';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState, useMemo } from 'react';
import useDebounce from 'all/hooks/useDebounce';
import SearchInput from 'all/features/dashboard/components/SearchInput';
import CampaignTable from '../components/CampaignTable';
import type { CampaignRows, SortKey, FilterState } from '../types/RowType';

export default function CampaignsContainer() {
  const {data, isPending, isError, error } = useQuery<CampaignRows[]>({
    queryKey: ["campaign"],
    queryFn: getCampaignsData
  })
  const [filter, setFilter] = useState<string[]>([]);
  const [query, setQuery] = useState<string>('');
  const [sortCols, setSortCols] = useState<
    Record<SortKey, 'asc' | 'desc' | 'idle'>
  >({ impressions: 'idle', ctr: 'idle' });

  const debounceValue = useDebounce(query, 300);

  const searched = useMemo(() => {
    if (!debounceValue) {
        return data;
    }
    return data?.filter((tr) => {
      const name = tr.name.toLowerCase();
      return name.includes(debounceValue.toLowerCase());
    });
  }, [data, debounceValue]);

  const filtered = useMemo(() => {
    let fil = searched
    if (filter.includes('c-50')) {
      fil = fil?.filter((tr) => {
        const { conversions } = tr;
        return conversions > 50;
      });
    }

    if (filter.includes('i-5000')) {
      fil = fil?.filter((tr) => {
        const { impressions } = tr;
        return impressions > 5000;
      });
    }

    return fil;

  }, [searched, filter]);

  const sorted = useMemo(() => {
    const activeSort = (
      Object.entries(sortCols) as [SortKey, 'asc' | 'desc' | 'idle'][]
    ).find(([, order]) => order !== 'idle');
    if (!activeSort) {
        return filtered;
    }
      const [key, value] = activeSort;
      return sortByKey(filtered, key, value);
    
  }, [filtered, sortCols])

  function sortByKey (
    array: CampaignRows[]=[],
    key: SortKey,
    order: 'asc' | 'desc' | 'idle' = 'asc'
  ){
    return [...array].sort((a, b) => {
      const valA = Number(a[key]);
      const valB = Number(b[key]);
      return order === 'asc' ? valA - valB : valB - valA;
    });
  };

  const handleFilter = (param: string) => {
    setFilter((prev) => {
      if (prev.includes(param)) {
        return prev.filter((fil) => fil !== param);
      }
      return [...prev, param];
    });
  };

  const selectedPill = (pill: string) => {
    if (filter.includes(pill)) {
      return 'border-blue-800 text-blue-200';
    }
    return 'border-gray-600 text-gray-300';
  };

  const handleSort = ({
    id,
    order
  }: {
    id: SortKey;
    order: 'asc' | 'desc' | 'idle';
  }) => {
    setSortCols((prev) => {
      const next = { ...prev };
      (Object.keys(next) as SortKey[]).forEach((key) => {
        next[key] = key === id ? order : 'idle';
      });
      return next;
    });
  };

  if (isPending) return <div>loading...</div>;

  return (
    <div className='flex flex-col h-full min-h-0'>
      <div className='flex mb-4 gap-6 p-4 shrink-0 items-center'>
        <SearchInput
          query={query}
          queryChange={(e) => setQuery(e)}
          className={'max-h-10 border border-gray-600 rounded-sm'}
          placeholder={'Search'}
        />
        <div className='flex gap-3 h-8'>
          <button
            onClick={() => handleFilter('c-50')}
            className={`cursor-pointer text-sm px-3 py-1 border rounded-sm ${selectedPill('c-50')}`}>
            Conversions More than 50
          </button>
          <button
            onClick={() => handleFilter('i-5000')}
            className={`cursor-pointer text-sm px-3 py-1 border rounded-sm ${selectedPill('i-5000')}`}>
            Impressions More than 5000
          </button>
        </div>
      </div>

      <CampaignTable
        tableHeader={[
          {
            id: 'campaign_id',
            name: 'Campaign Id',
            style: {},
            className: 'flex-[1.2]'
          },
          {
            id: 'campaign_name',
            name: 'Campaign Name',
            style: {},
            className: 'flex-[3]'
          },
          {
            id: 'impressions',
            name: 'Impressions',
            style: {},
            className: 'flex-[1]'
          },
          { id: 'clicks', name: 'Clicks', style: {}, className: 'flex-[1]' },
          {
            id: 'ctr',
            name: 'Convertion Rate',
            style: {},
            className: 'flex-[1.5]'
          },
          {
            id: 'conversions',
            name: 'Conversions',
            style: {},
            className: 'flex-[1]'
          }
        ]}
        rowCount={sorted?.length || 0}
        rowHeight={45}
        rowProps={{ data: sorted }}
        sortCols={sortCols}
        sortClick={handleSort}
      />
    </div>
  );
}
