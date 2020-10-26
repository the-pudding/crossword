import React from "react"
import _ from "lodash"

const Axis = ({
  dms,
  scale,
  label,
  labelAccessor,
  numTicks,
  annotationYear,
  annotation,
  squareWidth,
}) => {
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
      />
      {/* {ticks.map(({ value, xOffset }, i) => (
        <g key={i} transform={`translate(${xOffset}, 0)`}>
          <line
            y1={0}
            y2={-dms.boundedHeight}
            stroke="black"
            strokeWidth={annotationYear && value === 2014 ? "4px" : "1px"}
          />
          <text
            key={i}
            style={{
              fontSize: "10px",
              textAnchor: "middle",
              transform: "translateY(20px)",
            }}
          >
            {labelAccessor ? labelAccessor(value) : value}
          </text>

          {annotation &&
            value === 2014 &&
            _.reverse(annotation.split(" ")).map((word, i) => (
              <text
                x={0}
                y={-dms.boundedHeight - 15 - i * 20}
                style={{
                  fontFamily: "'National 2 Web Bold'",
                  textAnchor: "middle",
                }}
              >
                {word}
              </text>
            ))}
        </g>
      ))}
      {label && (
        <text x={dms.boundedWidth / 2} y={dms.marginBottom - 50}>
          {label}
        </text>
      )} */}
    </g>
  )
}

export default Axis
