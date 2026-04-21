'use client';
import type { RowComponentProps } from 'react-window';

type row = {
    id: number,
    name: string,
    email: string
}


function Row({ index, data, style }: RowComponentProps<{
    data: row[];
}>) {
  const {id, name, email} = data[index];
  return (
    <div
      key={id}
      style={style}>
      {name} - {email}
    </div>
  );
}

export default Row;
