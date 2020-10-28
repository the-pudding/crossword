import React from "react"
import * as d3 from "d3"
import Chart from "../Chart.jsx"
import useChartDimensions from "../../../hooks/useChartDimensions.js"
import _ from "lodash"
import {
  Percentage,
  OverviewRow,
  Labels,
  CluesChart,
  OverviewLabel,
} from "../../../styles/styles.js"

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
  const reversedColors = keyColors.slice().reverse()

  return (
    <>
      <CluesChart>
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
              const width = scale(
                _.sum(reversedKeys.map(k => data[k]).slice(i))
              )

              return (
                <rect
                  key={i}
                  height={100}
                  width={width}
                  fill={reversedColors[i]}
                  stroke="black"
                  strokeWidth={1}
                />
              )
            })}
          </Chart>
        </div>
      </CluesChart>

      <Labels>
        {keys.map((key, i) => (
          <OverviewRow>
            <Percentage color={keyColors[i]} size={"medium"}>
              {data[key]}
            </Percentage>
            <OverviewLabel>
              clue{data[key] === 1 ? "" : "s"}{" "}
              {key === "neutral" ? "do not" : ""} mention
              {data[key] === 1 ? "s" : ""} {keyLabels[i]}
            </OverviewLabel>
          </OverviewRow>
        ))}
      </Labels>
    </>
  )
}

export default Overview
