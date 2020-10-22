import React from "react"
import {
  WaffleChartWrapper,
  WaffleChartBounds,
  WaffleLabelText,
  WaffleChartLabel,
  Block,
  Percentage,
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
  censusSplit,
  margin,
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
    <WaffleChartWrapper margin={margin}>
      {title && (
        <>
          <h3>{title.toUpperCase()}</h3>
          <Line marginBottom="20px" />
        </>
      )}
      {censusSplit && <h3>U.S. Census split</h3>}

      <WaffleChartBounds onClick={changeMetric} clickable={clickable}>
        {_.range(0, 100).map(i => {
          if (censusSplit) {
            const borderBottom = false
            const borderRight =
              _.floor(i / 10) === _.floor(censusSplit / 10) && i < censusSplit
            const borderTop = i === censusSplit && i % 10 !== 0
            const borderLeft =
              i === censusSplit ||
              (_.floor(i / 10) === _.floor(censusSplit / 10) &&
                i % 10 > censusSplit % 10)

            return (
              <Block
                key={i}
                color={colorLookup[i]}
                borderBottom={borderBottom}
                borderRight={borderRight}
                borderTop={borderTop}
                borderLeft={borderLeft}
              />
            )
          }
          return <Block key={i} color={colorLookup[i]} />
        })}
      </WaffleChartBounds>

      <div style={{ display: "flex" }}>
        {roundedData
          .filter(d => d.percent !== 0)
          .map(({ percent }, i) => (
            <WaffleChartLabel key={i} i={i}>
              <Percentage numLabels={roundedData.length} color={colors[i]}>
                {percent}%
              </Percentage>
              <WaffleLabelText i={i}>{labels[i]}</WaffleLabelText>
            </WaffleChartLabel>
          ))}
      </div>
    </WaffleChartWrapper>
  )
}

export default WaffleChart
