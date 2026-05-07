export function GraphSkeleton() {
  return (
    <div className="h-80 bg-white rounded-lg border border-slate-200 shadow-sm p-6">
      {/* Grid background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-transparent rounded-lg -z-10" />
      
      {/* Grid lines */}
      <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 gap-1 opacity-20 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="bg-slate-200 rounded-sm animate-pulse" />
        ))}
      </div>
      
      <div className="relative h-full flex items-end justify-between gap-2 pt-8 pb-4">
        {/* Y-axis label */}
        <div className="w-8 h-6 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded-sm" />
        
        {/* Animated bars */}
        <div className="flex-1 flex items-end gap-1.5 h-48">
          {[40, 60, 30, 75, 50, 80].map((height, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-slate-300 via-slate-200 to-slate-100 rounded-t-sm animate-pulse"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        
        {/* Legend & X-axis */}
        <div className="w-12 flex flex-col gap-2">
          <div className="h-3 w-8 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded-sm" />
          <div className="h-4 w-full bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded-sm" />
        </div>
      </div>
      
      {/* Legend row */}
      <div className="flex items-center gap-4 pt-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-slate-400 rounded-full animate-pulse" />
          <div className="h-3 w-12 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded-sm" />
        </div>
        <div className="flex-1 h-px bg-slate-200" />
        <div className="w-20 h-3 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded-sm" />
      </div>
    </div>
  );
}