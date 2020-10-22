import React from "react"
import {
  WaffleChartWrapper,
  WaffleChartBounds,
  WaffleChartLabel,
  Block,
  Percentage,
  WaffleTitle,
  Line,
} from "../../../styles/styles.js"
import _ from "lodash"
import { roundData } from "../../utils.js"

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
        <strong>{title.toUpperCase()}</strong>
        <Line marginBottom="20px" />
        <WaffleChartBounds onClick={changeMetric} clickable={clickable}>
          {_.range(0, 100).map(i => (
            <Block key={i} color={colorLookup[i]} />
          ))}
        </WaffleChartBounds>
      </div>
      <div style={{ display: "flex" }}>
        {roundedData
          .filter(d => d.percent !== 0)
          .map(({ percent }, i) => (
            <WaffleChartLabel key={i}>
              <Percentage numLabels={roundedData.length} color={colors[i]}>
                {percent}%
              </Percentage>
              <div>{labels[i]}</div>
            </WaffleChartLabel>
          ))}
      </div>
    </WaffleChartWrapper>
  )
}

export default WaffleChart
