'use client';
import { List } from 'react-window';
import { ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-react';
import type { ReactElement } from 'react';
import type { SortKey } from '../features/campaigns/types/RowType';
import type { RowComponentProps } from 'react-window';
import { EmptyTableState } from 'all/assets/icons/EmptyTableState';
import { Spinner } from 'all/assets/icons/Spinner';

type RowComponentType<RowProps extends object> = (
  props: RowComponentProps<RowProps>
) => ReactElement | null;

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
  rowComponent,
  rowHeight,
  tableHeader,
  sortCols,
  sortClick,
  isEmpty,
  isLoading
}: {
  rowCount: number;
  rowHeight: number;
  rowProps: any;
  rowComponent: RowComponentType<any>;
  tableHeader: THeadTypes[];
  sortCols?: Record<string, 'asc' | 'desc' | 'idle'>;
  sortClick?: (payload: SortClickPayload) => void;
  isEmpty: boolean;
  isLoading: boolean;
}) {
  if (isLoading) {
    return <Spinner />;
  }

  if (isEmpty) {
    return <EmptyTableState />;
  }

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
    <div className='flex-1 min-h-0 border border-zinc-700 rounded-xl overflow-hidden mt-3'>
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
          rowComponent={rowComponent}
          rowCount={rowCount}
          rowProps={rowProps}
          rowHeight={rowHeight}
          className='bg-zinc-950 pr-3 scrollbar-overlay scrollbar-hide'
        />
      </div>
    </div>
  );
}
