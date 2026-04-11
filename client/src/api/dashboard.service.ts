import { api } from "all/lib/api";

export async function getDashboardData() {
        const res = await api("/dashboard/states", {
            method: "get"
        })

        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message || "Request Failed");
        }
        const result = await res.json();
        return result.data;

}