import type { ChangeEvent } from "react";
import { Search } from 'lucide-react';

function SearchInput({query, queryChange, className, placeholder} : {
    query: string,
    queryChange: (value : string) => void,
    className?: string,
    placeholder?: string
}) {
    return (
        <div className="relative w-60">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4" />
        <input 
            value={query}
            className={`${className} pl-8 py-3 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500`}
            placeholder={placeholder}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const { value }= e.target;
                queryChange(value);
            }}
        />
        </div>
    )
}

export default SearchInput;