import { api } from "all/lib/api";

export default async function getCampaignsData() {
    const res = await api("/campaigns/", {
        method: "POST",
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Request Failed");
    }
    const result = await res.json();
    return result.data.campaignData;
}