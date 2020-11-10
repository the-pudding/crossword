import React from "react"
import * as d3 from "d3"
import useChartDimensions from "../../../hooks/useChartDimensions.js"
import Chart from "../Chart.jsx"
import Line from "./Line.jsx"
import Axis from "./Axis.jsx"
import { LineChartWrapper } from "../../../styles/styles.js"
import NameAnnotation from "./NameAnnotation.jsx"
import COLORS from "../../../styles/colors.js"
import _ from "lodash"

const LineChart = ({ data, metrics, colors }) => {
  const initialDimensions = {
    marginTop: 80,
    marginRight: 20,
    marginBottom: 30,
    marginLeft: 50,
  }
  const [ref, dms] = useChartDimensions(initialDimensions)

  const xAccessor = d => parseInt(d.year)
  const maxY = 35

  const yScale = d3
    .scaleLinear()
    .domain([0, maxY])
    .range([dms.boundedHeight, 0])
  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(data, xAccessor))
    .range([0, dms.boundedWidth])

  return (
    <>
      <LineChartWrapper ref={ref}>
        <Chart dms={dms}>
          {/* Axes */}
          <Axis
            dimension="x"
            dms={dms}
            scale={xScale}
            annotationYear={2014}
            annotation={"DuVernay directs 'Selma'"}
            labelAccessor={d => (d === 2020 ? "2020*" : d)}
          />
          <Axis
            dimension="y"
            dms={dms}
            scale={yScale}
            labelAccessor={d => (d === maxY ? `${d} clues per year` : d)}
          />

          {/* Lines */}
          {metrics.map((metric, i) => {
            let yAccessor = null
            if (metric.toLowerCase().includes("other")) {
              yAccessor = d =>
                _.sum(
                  _.keys(d)
                    .filter(
                      k =>
                        k !== "year" &&
                        !k.includes(metrics[0]) &&
                        !k.includes(metrics[1])
                    )
                    .map(k => d[k])
                )
            } else {
              yAccessor = d =>
                _.sum(
                  _.keys(d)
                    .filter(k => k.includes(metric))
                    .map(k => d[k])
                )
            }

            return (
              <Line
                key={i}
                data={data}
                xAccessor={xAccessor}
                yAccessor={yAccessor}
                xScale={xScale}
                yScale={yScale}
                color={colors[i]}
                fillArea={false}
              />
            )
          })}

          {/* Border */}
          <rect
            width={dms.boundedWidth}
            height={dms.boundedHeight}
            stroke={COLORS.mainColor}
            strokeWidth="4px"
            fill="none"
          />
        </Chart>

        {/* Annotations */}
        <NameAnnotation fill={colors[0]} label="Gardner" />
        <NameAnnotation fill={colors[1]} label="DuVernay" />
        <NameAnnotation fill={COLORS.darkGrey} label="Other Avas" />
      </LineChartWrapper>
    </>
  )
}

export default LineChart
