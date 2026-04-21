import Chart from "all/components/Chart";
import type { VisitorsTypes } from "../types/ChartDataTypes";

export default function VisitorsChart({ chartData }: { chartData: VisitorsTypes[]}) {
    return (
        <div>
            <Chart chartData={chartData} /> 
        </div>
    )
}