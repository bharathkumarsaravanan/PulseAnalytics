export function Spinner({size="medium", align="center"}:{size?: "small" | "medium" | "large", align?: "start" | "end" | "center"}) {
  const sizePx = size == "small" ? "8" : size == "large" ? "16" : "12";
  const borderPx = size == "small" ? "4" : size == "large" ? "6" : "4";
  const pPx = size == "small" ? "0" : "8";
  return (
    <div className={`flex items-center justify-${align} p-${pPx}`}>
      <div className="relative">
        <div className={`w-${sizePx} h-${sizePx} border-${borderPx} border-slate-200 rounded-full animate-spin`} />
        <div className={`absolute inset-0 w-${sizePx} h-${sizePx} border-${borderPx} border-slate-400 border-t-transparent rounded-full animate-spin`} />
      </div>
    </div>
  );
}