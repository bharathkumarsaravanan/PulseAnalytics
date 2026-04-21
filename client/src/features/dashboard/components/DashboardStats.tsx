import Card from "all/components/Card"

type PropTypes = {
    visitors: number;
    conversions: string;
    conversionRate: string;
}

export default function DashboardStats({
    visitors,
    conversions,
    conversionRate
}: PropTypes) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-8">
            <Card header="Visitors" context={visitors} />
            <Card header="Conversions" context={conversions} />
            <Card header="Conversion Rate" context={conversionRate} />
        </div>
    )
}