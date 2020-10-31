import React from "react"
import {
  WaffleChartWrapper,
  WaffleChartBounds,
  WaffleLabelText,
  WaffleChartLabels,
  WaffleChartLabel,
  Block,
  Percentage,
  Line,
  CensusSplit,
} from "../../../styles/styles.js"
import _ from "lodash"
import { roundData } from "../../utils.js"
import COLORS from "../../../styles/colors.js"

const WaffleChart = ({
  title,
  data,
  colors,
  labels,
  clickable = false,
  changeMetric = null,
  censusSplit,
  margin,
  size,
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
    <>
    <WaffleChartWrapper margin={margin} size={size}>
      {title && (
        <>
          <h3 style={{ alignSelf: "flex-start", margin: "0" }}>
            {title.toUpperCase()}
          </h3>
          <Line marginBottom="20px" />
        </>
      )}
      {/* {censusSplit && <CensusSplit>U.S. Census split</CensusSplit>} */}

      <WaffleChartBounds
        onClick={changeMetric}
        clickable={clickable}
        size={size}
      >
        {_.range(0, 100).map(i => {
          if (censusSplit) {
            const borderTop =
              i === censusSplit ||
              (_.floor(i / 10) === _.floor(censusSplit / 10) &&
                i % 10 > censusSplit % 10) ||
              (_.floor(i / 10) === _.floor(censusSplit / 10) + 1 &&
                i % 10 < censusSplit % 10)
            const borderLeft = i === censusSplit && i % 10 !== 0
            const borderBottom = false
            const borderRight = false

            return (
              <Block
                key={i}
                color={colorLookup[i]}
                borderBottom={borderBottom}
                borderRight={borderRight}
                borderTop={borderTop}
                borderLeft={borderLeft}
                size={size}
              />
            )
          }
          return <Block key={i} color={colorLookup[i]} size={size} />
        })}
      </WaffleChartBounds>

      <WaffleChartLabels size={size}>
    {roundedData
      .filter(d => d.percent !== 0)
      .map(({ percent }, i) => (
        <WaffleChartLabel key={i} i={i}>
          <Percentage
            numLabels={roundedData.length}
            color={
              colors[i] === COLORS.man || colors[i] === COLORS.white
                ? COLORS.darkGrey
                : colors[i]
            }
            size={size}
          >
            {percent}%
          </Percentage>
          <WaffleLabelText i={i} size={size}>
            {labels[i]}
          </WaffleLabelText>
        </WaffleChartLabel>
      ))}
  </WaffleChartLabels>
    </WaffleChartWrapper>
    
  </>
  )
}

export default WaffleChart
