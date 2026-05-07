import Card from "all/components/Card"

type PropTypes = {
    visitors: number;
    conversions: string;
    conversionRate: string;
    isLoading: boolean
}

export default function DashboardStats({
    visitors,
    conversions,
    conversionRate,
    isLoading
}: PropTypes) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-8">
            <Card isLoading={isLoading} header="Visitors" context={visitors} />
            <Card isLoading={isLoading} header="Conversions" context={conversions} />
            <Card isLoading={isLoading} header="Conversion Rate" context={conversionRate} />
        </div>
    )
}