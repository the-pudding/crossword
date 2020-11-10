import React from "react"
import _ from "lodash"
import {
  AnnotationEvent,
  HorizontalTickLabel,
  VerticalTickLabel,
} from "../../../styles/styles.js"
import COLORS from "../../../styles/colors.js"

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
      <line x2={dms.boundedWidth} stroke={COLORS.mainColor} fill="none" />
      {ticks.map(({ value, xOffset }, i) => (
        <g key={i} transform={`translate(${xOffset}, 0)`}>
          <line
            y1={0}
            y2={-dms.boundedHeight}
            stroke={COLORS.mainColor}
            strokeWidth="1px"
          />
          <HorizontalTickLabel key={i}>
            {labelAccessor ? labelAccessor(value) : value}
          </HorizontalTickLabel>
        </g>
      ))}
      {label && (
        <text x={dms.boundedWidth / 2} y={dms.marginBottom - 50}>
          {label}
        </text>
      )}

      {/* Annotation */}
      {annotation && (
        <>
          <line
            x1={scale(2014)}
            x2={scale(2014)}
            y1={0}
            y2={-dms.boundedHeight}
            stroke={COLORS.yellow}
            strokeWidth="4px"
          />
          {_.reverse(annotation.split(" ")).map((word, i) => (
            <AnnotationEvent
              x={scale(2014)}
              y={-dms.boundedHeight - 15 - i * 20}
            >
              {word}
            </AnnotationEvent>
          ))}
        </>
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
      <line y2={dms.boundedHeight} stroke={COLORS.mainColor} fill="none" />
      {ticks.map(({ value, yOffset }, i) => (
        <g key={i} transform={`translate(0, ${yOffset})`}>
          <line x1={0} x2={dms.boundedWidth} stroke={COLORS.mainColor} />
          <VerticalTickLabel key={i}>
            {labelAccessor ? labelAccessor(value) : value}
          </VerticalTickLabel>
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
