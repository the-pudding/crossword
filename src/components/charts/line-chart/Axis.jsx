import React from "react"
import _ from "lodash"

const Axis = ({
  dms,
  dimension,
  scale,
  label,
  labelAccessor,
  numTicks,
  annotationYear,
  annotation,
}) => {
  const Component = axisComponentsByDimension[dimension]
  if (!Component) return null

  return (
    <Component
      dms={dms}
      scale={scale}
      label={label}
      labelAccessor={labelAccessor}
      numTicks={numTicks}
      annotationYear={annotationYear}
      annotation={annotation}
    />
  )
}

const AxisHorizontal = ({
  dms,
  scale,
  label,
  labelAccessor,
  numTicks,
  annotationYear,
  annotation,
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
      <line x2={dms.boundedWidth} stroke="black" fill="none" />
      {ticks.map(({ value, xOffset }, i) => (
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

          {/* Annotation */}
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
      )}
    </g>
  )
}

const AxisVertical = ({ dms, scale, label, labelAccessor }) => {
  const pixelsPerTick = 50
  const numberOfTicks = Math.max(1, Math.floor(dms.height / pixelsPerTick))
  const ticks = scale
    .ticks(numberOfTicks)
    .map(value => ({ value, yOffset: scale(value) }))

  return (
    <g transform={`translate(0, 0)`}>
      <line y2={dms.boundedHeight} stroke="black" fill="none" />
      {ticks.map(({ value, yOffset }, i) => (
        <g key={i} transform={`translate(0, ${yOffset})`}>
          <line x1={0} x2={dms.boundedWidth} stroke="black" />
          <text
            key={i}
            style={{
              fontSize: "10px",
              alignmentBaseline: "middle",
              transform: "translate(-25px, -9px)",
            }}
          >
            {labelAccessor ? labelAccessor(value) : value}
          </text>
        </g>
      ))}
      {label && (
        <text
          x={-dms.boundedHeight / 2}
          y={-dms.marginLeft + 50}
          style={{ transform: "rotate(-90deg)", textAnchor: "middle" }}
        >
          {label}
        </text>
      )}
    </g>
  )
}

const axisComponentsByDimension = {
  x: AxisHorizontal,
  y: AxisVertical,
}

export default Axis
