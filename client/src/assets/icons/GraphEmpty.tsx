export function GraphEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center px-4 max-w-md mx-auto">
      {/* SVG Icon */}
      <svg
        className="h-24 w-24 text-slate-400 mb-6"
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Grid */}
        <g stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.5">
          <path d="M10 10H110M10 30V90M30 10V90M50 10V90M70 10V90M90 10V90M110 10V90" />
        </g>
        
        {/* Empty axes */}
        <path d="M15 85H105M15 85V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        
        {/* Empty data points */}
        <circle cx="30" cy="70" r="3" fill="currentColor" opacity="0.4" />
        <circle cx="55" cy="60" r="3" fill="currentColor" opacity="0.4" />
        <circle cx="80" cy="75" r="3" fill="currentColor" opacity="0.4" />
        <circle cx="100" cy="65" r="3" fill="currentColor" opacity="0.4" />
        
        {/* Faint trend line */}
        <path d="M25 72 Q45 62 65 77 Q85 72 102 67" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" strokeLinecap="round" />
      </svg>
      
      <h3 className="text-lg font-semibold text-slate-900 mb-1">No data available</h3>
      <p className="text-sm text-slate-500 mb-4">Chart will appear once data is available.</p>
      <div className="flex gap-2 text-sm">
        <button className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md text-xs font-medium transition-colors">
          Refresh
        </button>
        <button className="px-3 py-1.5 border border-slate-200 hover:border-slate-300 text-slate-700 rounded-md text-xs font-medium transition-colors">
          Filter data
        </button>
      </div>
    </div>
  );
}