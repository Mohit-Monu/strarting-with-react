import "./Chart.css"
import ChartBar from "./ChartBar"
function Chart(props){
    const dataPointValues=props.dataPoints.map(dataPoint=>dataPoint.value)
    const totalMaximum=Math.max(...dataPointValues)
    return (
        <div className="chart">
            {props.dataPoints.map((items)=>(
                <ChartBar key={items.label} value={items.value} maxValue={totalMaximum} label={items.label} />
            ))}
        </div>
    )
}
export default Chart