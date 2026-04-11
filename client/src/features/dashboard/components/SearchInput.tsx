import type { ChangeEvent } from "react";

function SearchInput({query, queryChange} : {
    query: string,
    queryChange: (value : string) => void
}) {
    return (
        <input 
            value={query}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const { value }= e.target;
                queryChange(value);
            }}
        />
    )
}

export default SearchInput;