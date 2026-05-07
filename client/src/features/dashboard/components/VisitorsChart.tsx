import Chart from "all/components/Chart";
import type { VisitorsTypes } from "../types/ChartDataTypes";

export default function VisitorsChart({ chartData, isEmpty, isLoading }: { chartData: VisitorsTypes[], isEmpty: boolean, isLoading: boolean}) {
    return (
        <div>
            <Chart isEmpty={isEmpty} isLoading={isLoading} chartData={chartData} /> 
        </div>
    )
}