import React from "react"
import * as d3 from "d3"
import useChartDimensions from "../../hooks/useChartDimensions.js"
import Chart from "./chart-elements/Chart.jsx"
import Axis from "./chart-elements/Axis.jsx"
import { AboveBelowChartWrapper } from "../../styles/styles.js"
import StackedSquares from "./chart-elements/StackedSquares.jsx"
import _ from "lodash"

const AboveBelowChart = ({ data, word, compare }) => {
  const initialDimensions = {
    marginTop: 100,
    marginRight: 100,
    marginBottom: 200,
    marginLeft: 100,
  }

  const [ref, dms] = useChartDimensions(initialDimensions)

  const metricAccessor = d => d.year
  const yAccessor = d => {
    if (d.length === 0) return 0
    return d[0].clues.length
  }

  // Scales
  const xScale = d3
    .scaleLinear()
    .domain([2000, 2020])
    .range([0, dms.boundedWidth])
    .nice()

  const binGenerator = d3
    .histogram()
    .domain(xScale.domain())
    .value(metricAccessor)
    .thresholds(_.range(2000, 2021))
  const bins = binGenerator(data)

  const squareHeight = 25
  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(bins, yAccessor) * squareHeight])
    .range([dms.boundedHeight, 0])
    .nice()

  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Where a person was used to clue{" "}
        <span style={{ fontWeight: "bold" }}>{word.toUpperCase()}</span>{" "}
      </h1>
      <AboveBelowChartWrapper ref={ref}>
        <Chart dms={dms}>
          <StackedSquares
            data={data}
            squareHeight={squareHeight}
            dms={dms}
            bins={bins}
            metricAccessor={metricAccessor}
            yAccessor={yAccessor}
            xScale={xScale}
            yScale={yScale}
            compare={compare}
          />
          <Axis
            dimension="x"
            dms={dms}
            scale={xScale}
            label={""}
            numTicks={2}
          />
          <text x={-50} y={dms.boundedHeight * 0.5}>
            {compare === "race" ? "URM" : "Women"}
          </text>
          <text x={-50} y={dms.boundedHeight * 1.5}>
            {compare === "race" ? "White" : "Men"}
          </text>
        </Chart>
      </AboveBelowChartWrapper>
    </>
  )
}

export default AboveBelowChart
