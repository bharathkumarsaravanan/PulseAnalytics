export async function getDashboardData() {
    await new Promise(res => setTimeout(res, 2000));

    return {
        users: 120,
        revenue: "$3,200",
        growth: "12%"
    }
}