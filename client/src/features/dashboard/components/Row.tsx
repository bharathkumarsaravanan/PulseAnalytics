'use client';
import type { row } from 'all/utils/mockRows';
import React from 'react';
import type { RowComponentProps } from 'react-window';

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
