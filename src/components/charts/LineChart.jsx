import React, { useState } from "react"
import * as d3 from "d3"
import useChartDimensions from "../../hooks/useChartDimensions.js"
import Chart from "./chart-elements/Chart.jsx"
import Line from "./chart-elements/Line.jsx"
import Axis from "./chart-elements/Axis.jsx"
import { LineChartWrapper } from "../../styles/styles.js"

const LineChart = ({ data, metric }) => {
  const initialDimensions = {
    marginTop: 60,
    marginRight: 60,
    marginBottom: 100,
    marginLeft: 100,
  }
  const [ref, dms] = useChartDimensions(initialDimensions)

  const yAccessor = d => (d[metric] ? d[metric] : 0)
  const xAccessor = d => parseInt(d.year)

  const yScale = d3
    .scaleLinear()
    .domain(d3.extent(data, yAccessor))
    .range([dms.boundedHeight, 0])
    .nice()
  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(data, xAccessor))
    .range([0, dms.boundedWidth])

  return (
    <>
      <LineChartWrapper ref={ref}>
        <h1 style={{ textAlign: "center" }}>AVA</h1>
        <Chart dms={dms}>
          <Line
            data={data}
            xAccessor={xAccessor}
            yAccessor={yAccessor}
            xScale={xScale}
            yScale={yScale}
            color={"orange"}
            fillArea={false}
          />
          <Axis dimension="x" dms={dms} scale={xScale} label="year" />
          <Axis dimension="y" dms={dms} scale={yScale} label="clues per year" />
        </Chart>
      </LineChartWrapper>
    </>
  )
}

export default LineChart
