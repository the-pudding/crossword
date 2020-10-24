import React from "react"
import * as d3 from "d3"
import Chart from "../chart-elements/Chart.jsx"
import useChartDimensions from "../../../hooks/useChartDimensions.js"
import _ from "lodash"
import { Percentage } from "../../../styles/styles.js"

const Overview = ({ data, totalClues, keys, keyLabels, keyColors }) => {
  const initialDimensions = {
    marginTop: 4,
    marginRight: 4,
    marginBottom: 4,
    marginLeft: 4,
  }
  const [ref, dms] = useChartDimensions(initialDimensions)

  const scale = d3
    .scaleLinear()
    .domain([0, totalClues])
    .range([0, dms.boundedWidth])

  const reversedKeys = keys.slice().reverse()

  return (
    <div style={{ width: "100%", marginTop: "20px" }}>
      <h3>ALL CLUES</h3>
      <div style={{ height: "108px", width: "108px" }} ref={ref}>
        <Chart dms={dms}>
          <rect
            height={100}
            width={100}
            fill="none"
            stroke="black"
            strokeWidth={4}
          />
          {reversedKeys.map((key, i) => {
            const width = scale(_.sum(reversedKeys.map(k => data[k]).slice(i)))

            return (
              <rect
                key={i}
                height={100}
                width={width}
                fill={_.reverse(keyColors)[i]}
                stroke="black"
                strokeWidth={1}
              />
            )
          })}
        </Chart>
      </div>

      {keys.map((key, i) => (
        <div>
          <Percentage color={keyColors[i]} small={true}>
            {data[key]}
          </Percentage>
          <div style={{ fontSize: "0.8rem" }}>clues {keyLabels[i]}</div>
        </div>
      ))}
    </div>
  )
}

export default Overview
