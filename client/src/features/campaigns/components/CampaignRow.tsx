"use client";
import type { RowComponentProps } from "react-window";
import type { CampaignRows } from "../types/RowType";
import React from "react";

function CampaignRow({ index, data, style }: RowComponentProps<{
    data: CampaignRows[]
}>) {
    const { id, name, impressions, clicks, ctr, conversions } = data[index];

    return (
        <div className="flex gap-2 justify-center items-center" key={id} style={style}>
            <div className="truncate flex-[1.2] px-4 py-3">{id}</div>
            <div className="truncate flex-[3] px-4 py-3">{name}</div>
            <div className="truncate flex-[1] px-4 py-3">{impressions}</div>
            <div className="truncate flex-[1] px-4 py-3">{clicks}</div>
            <div className="truncate flex-[1.5] px-4 py-3">{ctr}</div>
            <div className="truncate flex-[1] px-4 py-3">{conversions}</div>
        </div>
    )
}

export default React.memo(CampaignRow) as unknown as typeof CampaignRow;