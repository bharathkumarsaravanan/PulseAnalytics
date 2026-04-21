'use client';
import { List } from 'react-window';
import CampaignRow from './CampaignRow';
import { ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-react';
import type { SortKey } from '../types/RowType';

type THeadTypes = {
  id: string;
  name: string;
  style: React.CSSProperties;
  className?: string;
  sort?: boolean;
};

type SortOrder = 'asc' | 'desc' | 'idle';

type SortClickPayload = { id: SortKey; order: SortOrder };

export default function CampaignTable({
  rowCount,
  rowProps,
  rowHeight,
  tableHeader,
  sortCols,
  sortClick
}: {
  rowCount: number;
  rowHeight: number;
  rowProps: any;
  tableHeader: THeadTypes[];
  sortCols?: Record<string, 'asc' | 'desc' | 'idle'>;
  sortClick?: (payload: SortClickPayload) => void;
}) {
  const SortIcon = ({
    order,
    id
  }: {
    order: 'asc' | 'desc' | 'idle';
    id: SortKey;
  }) => {
    if (order === 'asc')
      return (
        <ArrowUp
          onClick={() => sortClick?.({ id, order: 'desc' })}
          className='w-3 h-3 cursor-pointer'
        />
      );
    if (order === 'desc')
      return (
        <ArrowDown
          onClick={() => sortClick?.({ id, order: 'asc' })}
          className='w-3 h-3 cursor-pointer'
        />
      );
    return (
      <ArrowUpDown
        onClick={() => sortClick?.({ id, order: 'asc' })}
        className='w-3 h-3 text-zinc-500 cursor-pointer'
      />
    );
  };

  return (
    <div className='flex-1 min-h-0 border border-zinc-700 rounded-xl overflow-hidden'>
      {/* Header  */}
      <div className='sticky top-0 z-10 bg-zinc-900 border-b border-zinc-700'>
        <div className='flex'>
          {tableHeader.map((head, i) => (
            <div
              key={head.id}
              className={`flex items-center gap-1 flex-1 px-4 py-3 text-sm font-semibold text-zinc-300 ${head?.className || ''}`}>
              <div>{head.name}</div>
              {sortCols?.[head.id] && (
                <SortIcon
                  order={sortCols[head.id]}
                  id={head.id as SortKey}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='h-full'>
        <List
          rowComponent={CampaignRow}
          rowCount={rowCount}
          rowProps={rowProps}
          rowHeight={rowHeight}
          className='bg-zinc-950 pr-3 scrollbar-overlay scrollbar-hide'
        />
      </div>
    </div>
  );
}
