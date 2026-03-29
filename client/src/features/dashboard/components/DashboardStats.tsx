type Props = {
    users: number;
    revenue: string;
    growth: string;
}

export default function DashboardStats({
    users,
    revenue,
    growth
}: Props) {
    return (
        <div className="space-y-2">
            <p>Users: {users}</p>
            <p>Revenue: {revenue}</p>
            <p>Growth: {growth}</p>
        </div>
    )
}