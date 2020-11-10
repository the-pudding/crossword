import React from "react"
import _ from "lodash"
import COLORS from "../../../styles/colors.js"
import ChevronUp from "../../../svg/chevron-up.svg"
import ChevronDown from "../../../svg/chevron-down.svg"

const Axis = ({ dms, scale, numTicks, squareWidth }) => {
  const pixelsPerTick = 50
  const numberOfTicks = numTicks
    ? numTicks
    : Math.max(1, Math.floor(dms.width / pixelsPerTick))
  const ticks = scale
    .ticks(numberOfTicks)
    .map(value => ({ value, xOffset: scale(value) }))

  return (
    <>
      <g transform={`translate(0, ${dms.boundedHeight})`}>
        <line
          x2={dms.boundedWidth}
          stroke={COLORS.mainColor}
          strokeWidth="4px"
          fill="none"
          strokeLinecap="butt"
        />
      </g>
      <g transform={`translate(${dms.boundedWidth - squareWidth + 4}, 100)`}>
        <ChevronDown height={19} width={19} />
        <text
          style={{ fontSize: "0.6rem", transform: `translate(20px, 15px)` }}
        >
          White
        </text>
      </g>
      <g transform={`translate(${dms.boundedWidth - squareWidth + 4}, 80)`}>
        <ChevronUp height={19} width={19} />
        <text
          style={{ fontSize: "0.6rem", transform: `translate(20px, 15px)` }}
        >
          URM
        </text>
      </g>
    </>
  )
}

export default Axis
