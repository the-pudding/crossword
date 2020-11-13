import React, { useState } from "react"
import Chart from "../Chart.jsx"
import * as d3 from "d3"
import useChartDimensions from "../../../hooks/useChartDimensions.js"
import StackedSquares from "./StackedSquares.jsx"
import _ from "lodash"
import {
  YearLabels,
  StackedSquaresWrapper,
  Tooltip,
} from "../../../styles/styles.js"

const AboveBelowChart = ({ data, compare }) => {
  const [hoverX, setHoverX] = useState(null)
  const [hoverY, setHoverY] = useState(null)
  const [tooltipInfo, setTooltipInfo] = useState(null)

  const initialDimensions = {
    marginTop: 0,
    marginRight: 35,
    marginBottom: 250, // this is what's keeping the chart in place
    marginLeft: 2,
  }

  const [ref, dms] = useChartDimensions(initialDimensions)

  const xAccessor = d => parseInt(d.year)

  // Scales
  const xScale = d3
    .scaleLinear()
    .domain([2000, 2021])
    .range([0, dms.boundedWidth])
    .nice()

  const squareHeight = dms.boundedWidth / 22

  const binGenerator = d3
    .histogram()
    .domain(xScale.domain())
    .value(xAccessor)
    .thresholds(_.range(2000, 2021))
  const bins = binGenerator(data)

  const publicationNameLookup = {
    universal: "Universal",
    usatoday: "USA Today",
    wsj: "WSJ",
    nytimes: "NY Times",
    latimes: "LA Times",
  }

  return (
    <>
      <h3>Clues that mention a person</h3>
      <StackedSquaresWrapper ref={ref}>
        <Chart dms={dms}>
          <StackedSquares
            data={data}
            squareHeight={squareHeight}
            dms={dms}
            bins={bins}
            xScale={xScale}
            compare={compare}
            setHoverX={setHoverX}
            setHoverY={setHoverY}
            setTooltipInfo={setTooltipInfo}
          />
        </Chart>
      </StackedSquaresWrapper>
      {hoverY && hoverX && tooltipInfo && (
        <Tooltip hoverX={hoverX} hoverY={hoverY}>
          <h3 style={{ margin: 0 }}>
            {publicationNameLookup[tooltipInfo.publication]} ({tooltipInfo.year}
            )
          </h3>
          <div style={{ fontSize: "0.8rem", fontStyle: "italic" }}>
            {tooltipInfo.clue}
          </div>
          <div style={{ fontSize: "0.8rem" }}>{tooltipInfo.name}</div>
        </Tooltip>
      )}
    </>
  )
}

export default AboveBelowChart
