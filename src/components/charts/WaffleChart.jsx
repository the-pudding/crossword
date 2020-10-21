import React from "react"
import {
  WaffleChartWrapper,
  WaffleChartBounds,
  WaffleChartLabel,
  Block,
  Percentage,
  WaffleTitle,
} from "../../styles/styles.js"
import _ from "lodash"
import { roundData } from "../utils.js"

const WaffleChart = ({
  title,
  data,
  colors,
  labels,
  clickable = false,
  changeMetric = null,
  censusAnnotation = false,
}) => {
  const roundedData = roundData(data).filter(d => d.percent >= 1)

  const colorOptions = colors
    ? colors
    : roundedData.map(
        d => "#" + Math.floor(Math.random() * 16777215).toString(16)
      )

  const colorLookup = {}
  let countTo100 = 0
  _.forEach(roundedData, ({ percent }, groupNum) => {
    _.forEach(_.range(0, percent), _ => {
      colorLookup[countTo100] = colorOptions[groupNum]
      countTo100 += 1
    })
  })

  return (
    <WaffleChartWrapper>
      <div>
        <WaffleTitle>{title}</WaffleTitle>
        <WaffleChartBounds onClick={changeMetric} clickable={clickable}>
          {_.range(0, 100).map(i => (
            <Block key={i} color={colorLookup[i]} />
          ))}
        </WaffleChartBounds>
      </div>
      <div style={{ marginLeft: "10px", marginTop: "18px" }}>
        {roundedData
          .filter(d => d.percent !== 0)
          .map(({ percent }, i) => (
            <WaffleChartLabel key={i} color={colors[i]}>
              <Percentage numLabels={roundedData.length}>{percent}%</Percentage>
              <div
                style={{ dipslay: "flex", flexWrap: "wrap", width: "100px" }}
              >
                {labels[i]}
              </div>
            </WaffleChartLabel>
          ))}
      </div>
    </WaffleChartWrapper>
  )
}

export default WaffleChart
