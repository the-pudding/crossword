import React from "react"
import Chart from "../chart-elements/Chart.jsx"
import * as d3 from "d3"
import useChartDimensions from "../../../hooks/useChartDimensions.js"
import StackedSquares from "../chart-elements/StackedSquares.jsx"
import _ from "lodash"
import Axis from "./Axis.jsx"

const AboveBelowChart = ({ data, compare }) => {
  const initialDimensions = {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 250, // this is what's keeping the chart in place
    marginLeft: 0,
  }

  const [ref, dms] = useChartDimensions(initialDimensions)

  const xAccessor = d => parseInt(d.year)
  const yAccessor = d => {
    if (d.length === 0) return 0
    return d[0].clues.length
  }

  // Scales
  const xScale = d3
    .scaleLinear()
    .domain([2000, 2021])
    .range([0, dms.boundedWidth])
    .nice()

  // including border?
  // dms.width = numYears * squareWidth + numYears
  const numYears = 21 //xScale.domain()[1] - xScale.domain()[0]
  //const squareHeight = (dms.boundedWidth - numYears) / numYears
  const squareHeight = dms.boundedWidth / numYears

  const binGenerator = d3
    .histogram()
    .domain(xScale.domain())
    .value(xAccessor)
    .thresholds(_.range(2000, 2021))
  const bins = binGenerator(data)

  // const yScale = d3
  //   .scaleLinear()
  //   .domain([0, d3.max(bins, yAccessor) * squareHeight])
  //   .range([dms.boundedHeight, 0])
  //   .nice()

  return (
    <div style={{ width: "100%", marginTop: "20px", position: "relative" }}>
      <h3>CLUES THAT MENTION A PERSON</h3>
      <div
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          fontSize: "0.8rem",
          marginTop: "15px",
        }}
      >
        <div>2000</div>
        <div>2010</div>
        <div>2020</div>
      </div>
      <div style={{ height: "350px" }} ref={ref}>
        <Chart dms={dms}>
          <StackedSquares
            data={data}
            squareHeight={squareHeight}
            dms={dms}
            bins={bins}
            xScale={xScale}
            compare={compare}
          />
          <Axis
            dms={dms}
            scale={xScale}
            label={""}
            numTicks={2}
            squareWidth={squareHeight}
          />
        </Chart>
      </div>
    </div>
  )
}

export default AboveBelowChart
