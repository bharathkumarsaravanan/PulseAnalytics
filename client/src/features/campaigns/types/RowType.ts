export type CampaignRows = {
    id: string,
    name: string,
    impressions: number,
    clicks: number,
    ctr: number,
    conversions: number
}

export type SortKey = 'impressions' | 'ctr';

export type FilterState = {
  conversions?: number;
  impressions?: number;
}
