import React from "react"
import { RoughNotation } from "react-rough-notation"
import useChartDimensions from "../../../hooks/useChartDimensions.js"
import {
  WaffleChartWrapper,
  WaffleChartBounds,
  WaffleLabelText,
  WaffleChartLabels,
  WaffleChartLabel,
  Block,
  Percentage,
  Line,
  CensusSplitLabel,
} from "../../../styles/styles.js"
import _ from "lodash"
import { roundData } from "../../utils.js"
import COLORS from "../../../styles/colors.js"
import Chart from "../Chart.jsx"

const WaffleChart = ({
  title,
  data,
  colors,
  labels,
  clickable = false,
  changeMetric = null,
  censusSplit,
  showCensusSplitLabel,
  circlePercentage,
  margin,
  size,
}) => {
  const [ref, dms] = useChartDimensions({})
  const blockSize = dms.width / 10

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

        <WaffleChartBounds
          onClick={changeMetric}
          clickable={clickable}
          size={size}
          ref={ref}
        >
          {_.range(0, 100).map(i => (
            <Block key={i} color={colorLookup[i]} size={size} />
          ))}

          {/* Census split line */}
          <Chart dms={dms} svgStyle={{ position: "absolute" }}>
            {censusSplit % 10 === 0 ? (
              <path
                d={`M ${dms.width} ${
                  (10 - censusSplit / 10) * blockSize
                } h ${-dms.width} 0`}
                stroke={COLORS.yellow}
                strokeWidth={dms.width === 150 ? "4px" : "3px"}
                fill="none"
              />
            ) : (
              <path
                d={`M ${dms.width} ${
                  blockSize * (10 - _.ceil(censusSplit / 10))
                } h ${-(
                  blockSize *
                  (censusSplit % 10)
                )} 0 v 0 ${blockSize} h ${-(
                  blockSize *
                  (10 - (censusSplit % 10))
                )} 0`}
                stroke={COLORS.yellow}
                strokeWidth={dms.width === 150 ? "4px" : "2px"}
                fill="none"
              />
            )}
          </Chart>
        </WaffleChartBounds>

        <WaffleChartLabels size={size}>
          {roundedData
            .filter(d => d.percent !== 0)
            .map(({ percent }, i) => (
              <>
                <WaffleChartLabel key={i} i={i}>
                  {circlePercentage && i === 1 ? (
                    <RoughNotation
                      type="box"
                      show={true}
                      animate={false}
                      color={COLORS.grey}
                    >
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
                    </RoughNotation>
                  ) : (
                    <>
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
                    </>
                  )}
                </WaffleChartLabel>

                {i === 0 && showCensusSplitLabel && (
                  <CensusSplitLabel>US census split</CensusSplitLabel>
                )}
              </>
            ))}
        </WaffleChartLabels>
      </WaffleChartWrapper>
    </>
  )
}

export default WaffleChart
