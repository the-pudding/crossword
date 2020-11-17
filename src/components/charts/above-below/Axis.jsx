import React from "react"
import _ from "lodash"
import COLORS from "../../../styles/colors.js"
import ChevronUp from "../../../svg/chevron-up.svg"
import ChevronDown from "../../../svg/chevron-down.svg"
import { SideLabel } from "../../../styles/styles.js"

const Axis = ({ dms, scale, numTicks, squareWidth, compare }) => {
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
      <g transform={`translate(0, 20)`}>
        <text
          transform={`translate(${scale(2000)}, 0)`}
          style={{ fontSize: "0.8rem" }}
        >
          2000
        </text>
        <text
          transform={`translate(${scale(2010)}, 0)`}
          style={{ fontSize: "0.8rem" }}
        >
          2010
        </text>
        <text
          transform={`translate(${scale(2020)}, 0)`}
          style={{ fontSize: "0.8rem" }}
        >
          2020
        </text>
      </g>
      <g transform={`translate(${dms.boundedWidth - squareWidth}, 102)`}>
        <ChevronDown height={19} width={19} />
        <SideLabel>{compare === "race" ? "White" : "Men"}</SideLabel>
      </g>
      <g transform={`translate(${dms.boundedWidth - squareWidth}, 78)`}>
        <ChevronUp height={19} width={19} />
        <SideLabel>{compare === "race" ? "MRG" : "Wom."}</SideLabel>
      </g>
    </>
  )
}

export default Axis
