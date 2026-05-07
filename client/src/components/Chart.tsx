import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import type { VisitorsTypes } from 'all/features/dashboard/types/ChartDataTypes';
import { GraphEmptyState } from 'all/assets/icons/GraphEmpty';
import { GraphSkeleton } from 'all/assets/icons/GraphLoader';

export default function Chart({
  chartData,
  isEmpty,
  isLoading
}: {
  chartData: VisitorsTypes[];
  isEmpty: boolean;
  isLoading: boolean;
}) {

  if (isLoading) {
    return <GraphSkeleton />
  }

  if (isEmpty) {
    return <GraphEmptyState />
  }
  return (
    <LineChart
      style={{
        width: '100%',
        // maxWidth: '700px',
        height: '100%',
        maxHeight: '70vh',
        aspectRatio: 1.618
      }}
      responsive
      data={chartData}
      margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
      <CartesianGrid
        strokeDasharray='3 3'
        stroke='var(--color-border-3)'
      />
      <XAxis
        dataKey='date'
        stroke='var(--color-text-3)'
      />
      <YAxis
        width='auto'
        stroke='var(--color-text-3)'
      />
      <Tooltip
        cursor={{ stroke: 'var(--color-border-2)' }}
        contentStyle={{
          backgroundColor: 'var(--color-surface-tooltip)',
          borderColor: 'var(--color-border-2)'
        }}
      />
      <Legend />
      <Line
        type='monotone'
        dataKey='conversions'
        stroke='var(--color-chart-1)'
        dot={{ fill: 'var(--color-surface-base)' }}
        activeDot={{ r: 8, stroke: 'var(--color-surface-base)' }}
      />
      <Line
        type='monotone'
        dataKey='visitors'
        stroke='var(--color-chart-2)'
        dot={{ fill: 'var(--color-surface-base)' }}
        activeDot={{ stroke: 'var(--color-surface-base)' }}
      />
      <RechartsDevtools />
    </LineChart>
  );
}
