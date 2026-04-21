'use client';
import { useState, useMemo } from 'react';
import Row from './Row';
import { List } from 'react-window';
import SearchInput from './SearchInput';
import useDebounce from 'all/hooks/useDebounce';

type row = {
    id: number,
    name: string,
    email: string
}

const rows:row[] = Array.from({ length: 1000 }, (_, index) => ({
    id: index,
    name: `bharath-${index}`,
    email: `bharath-${index}@gmail.com`
}));

export default function DataTable() { 
  const [switchState, setSwitchState] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const debounceValue = useDebounce(query, 300);
  const filtered = useMemo(() => {
      return rows.filter(tr => (tr.name.includes(debounceValue) || !debounceValue))
  }, [rows, debounceValue]);
  

  return (
    <>
      <button onClick={() => setSwitchState((prev) => !prev)}>
        {switchState ? 'OFF' : 'ON'}
      </button>
      <SearchInput 
        query={query}
        queryChange={e => setQuery(e)}
      />
          {
            <List
              rowHeight={25}
              rowCount={filtered.length}
              rowProps={{ data: filtered }}
              rowComponent={Row}
            />
          }
    </>
  );
}
