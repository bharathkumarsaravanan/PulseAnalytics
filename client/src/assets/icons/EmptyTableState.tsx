export function EmptyTableState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-slate-500">
      <svg
        className="h-16 w-16 text-slate-400"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="18" y="28" width="58" height="44" rx="8" stroke="currentColor" strokeWidth="3" />
        <path d="M18 44H76" stroke="currentColor" strokeWidth="3" />
        <path d="M37 28V72" stroke="currentColor" strokeWidth="3" />
        <path d="M56 28V72" stroke="currentColor" strokeWidth="3" />
        <circle cx="88" cy="82" r="12" stroke="currentColor" strokeWidth="3" />
        <path d="M97 91L106 100" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M84 82H92" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M88 78V86" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>

      <p className="mt-4 text-sm font-medium text-slate-700">No records found</p>
      <p className="mt-1 text-sm text-slate-500">Try adjusting your filters or add a new item.</p>
    </div>
  );
}