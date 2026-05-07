import React from "react";
import type { RowComponentProps } from "react-window";
import type { EventData } from "../utils/eventAnalytics";

function EventsRow({ index, data, style }: RowComponentProps<{
    data: EventData[]
}>) {
    const { _id, page, type, element, timestamp } = data[index];

    return (
        <div className="flex gap-2 justify-center items-center" key={_id} style={style}>
            <div className="truncate flex-[1.4] px-4 py-3">{_id}</div>
            <div className="truncate flex-[1.4] px-4 py-3">{page}</div>
            <div className="truncate flex-[3] px-4 py-3">{timestamp}</div>
            <div className="truncate flex-[1.4] px-4 py-3">{type}</div>
            <div className="truncate flex-[3] px-4 py-3">{element}</div>
        </div>
    )
}

export default React.memo(EventsRow) as unknown as typeof EventsRow;