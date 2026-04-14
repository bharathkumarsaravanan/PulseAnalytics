'use client';
import React from 'react';
import type { RowComponentProps } from 'react-window';

type row = {
    id: number,
    name: string,
    email: string
}

interface RowData extends RowComponentProps {
 data: row[]; 
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
