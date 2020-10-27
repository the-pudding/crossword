import React from "react"
import _ from "lodash"

const Axis = ({ dms, scale, numTicks, squareWidth }) => {
  const pixelsPerTick = 50
  const numberOfTicks = numTicks
    ? numTicks
    : Math.max(1, Math.floor(dms.width / pixelsPerTick))
  const ticks = scale
    .ticks(numberOfTicks)
    .map(value => ({ value, xOffset: scale(value) }))

  return (
    <g transform={`translate(0, ${dms.boundedHeight})`}>
      <line
        x2={dms.boundedWidth - squareWidth}
        stroke="black"
        strokeWidth="4px"
        fill="none"
        strokeLinecap="butt"
      />
    </g>
  )
}

export default Axis
