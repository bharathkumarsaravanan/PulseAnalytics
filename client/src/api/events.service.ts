import { api } from "all/lib/api";

export default async function getEventsData() {
    const res = await api("/events/", {
        method: "POST",
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Request Failed");
    }
    const result = await res.json();
    return result.data.events;
}