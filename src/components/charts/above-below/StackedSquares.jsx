import React, { useState } from "react"
import _ from "lodash"
import COLORS from "../../../styles/colors.js"
import Axis from "../above-below/Axis.jsx"

const publicationColorLookup = {
  wsj: "red",
  usatoday: "green",
  universal: "yellow",
  nytimes: "purple",
  latimes: "orange",
}

const StackedSquares = ({
  data,
  squareHeight,
  dms,
  bins,
  xScale,
  compare,
  setHoverX,
  setHoverY,
  setTooltipInfo,
}) => {
  const colorLookup = {
    above: compare === "gender" ? COLORS.blue : COLORS.pink,
    below: COLORS.offWhite,
  }
  const [hoveredSquareKey, setHoveredSquareKey] = useState(null)

  return (
    <>
      {bins.map((bin, i) => {
        const yearData = _.first(data.filter(d => parseInt(d.year) === bin.x0))
        if (!yearData) return null

        let nextAboveYValue = -squareHeight
        let nextBelowYValue = 0

        return (
          <g
            key={i}
            transform={`translate(${xScale(bin.x0)}, ${dms.boundedHeight})`}
          >
            {yearData.clues.map((squareData, clueI) => {
              const {
                name,
                binaryRace,
                gender,
                publication,
                year,
                clue,
              } = squareData
              let y = 0

              if (compare === "race") {
                y = binaryRace === "white" ? nextBelowYValue : nextAboveYValue
                if (binaryRace === "white") {
                  nextBelowYValue += squareHeight
                } else {
                  nextAboveYValue -= squareHeight
                }
              } else if (compare === "gender") {
                y = gender === "man" ? nextBelowYValue : nextAboveYValue
                if (gender === "man") {
                  nextBelowYValue += squareHeight
                } else {
                  nextAboveYValue -= squareHeight
                }
              }
              const squareKey = `${i}-${clueI}`

              return (
                <rect
                  key={squareKey}
                  x={0}
                  y={y}
                  height={squareHeight}
                  width={squareHeight}
                  fill={
                    squareKey === hoveredSquareKey
                      ? COLORS.yellow
                      : y < 0
                      ? colorLookup.above
                      : colorLookup.below
                  }
                  // strokeWidth={squareKey === hoveredSquareKey ? "5px" : "1px"}
                  strokeWidth="1px"
                  stroke={COLORS.mainColor}
                  onMouseEnter={() => {
                    // positioning the tooltip
                    const xOffset =
                      xScale(bin.x0) +
                      (parseInt(year) >= 2010
                        ? -150 - 3 * squareHeight
                        : squareHeight + 15)
                    const yOffset = y + 100

                    setHoverX(xOffset)
                    setHoverY(yOffset)
                    setTooltipInfo({ name, publication, clue, year })
                    setHoveredSquareKey(squareKey)
                  }}
                  onMouseLeave={() => {
                    setHoverX(null)
                    setHoverY(null)
                    setTooltipInfo(null)
                    setHoveredSquareKey(null)
                  }}
                />
              )
            })}
          </g>
        )
      })}

      <Axis
        dms={dms}
        scale={xScale}
        label={""}
        numTicks={2}
        squareWidth={squareHeight}
      />
    </>
  )
}

export default StackedSquares
