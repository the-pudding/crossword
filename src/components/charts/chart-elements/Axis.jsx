import React from "react";

const Axis = ({ dms, dimension, scale, label, labelAccessor, numTicks }) => {
  const Component = axisComponentsByDimension[dimension];
  if (!Component) return null;

  return (
    <Component
      dms={dms}
      scale={scale}
      label={label}
      labelAccessor={labelAccessor}
      numTicks={numTicks}
    />
  );
};

const AxisHorizontal = ({ dms, scale, label, labelAccessor, numTicks }) => {
  const pixelsPerTick = 50;
  const numberOfTicks = numTicks
    ? numTicks
    : Math.max(1, Math.floor(dms.width / pixelsPerTick));
  const ticks = scale
    .ticks(numberOfTicks)
    .map((value) => ({ value, xOffset: scale(value) }));

  return (
    <g transform={`translate(0, ${dms.boundedHeight})`}>
      <line x2={dms.boundedWidth} stroke="black" fill="none" />
      {ticks.map(({ value, xOffset }, i) => (
        <g key={i} transform={`translate(${xOffset}, 0)`}>
          <line y2="6" stroke="black" />
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
        </g>
      ))}
      <text x={dms.boundedWidth / 2} y={dms.marginBottom - 50}>
        {label}
      </text>
    </g>
  );
};

const AxisVertical = ({ dms, scale, label, labelAccessor }) => {
  const pixelsPerTick = 50;
  const numberOfTicks = Math.max(1, Math.floor(dms.height / pixelsPerTick));
  const ticks = scale
    .ticks(numberOfTicks)
    .map((value) => ({ value, yOffset: scale(value) }));

  return (
    <g transform={`translate(0, 0)`}>
      <line y2={dms.boundedHeight} stroke="black" fill="none" />
      {ticks.map(({ value, yOffset }, i) => (
        <g key={i} transform={`translate(0, ${yOffset})`}>
          <line x2="-6" stroke="black" />
          <text
            key={i}
            style={{
              fontSize: "10px",
              alignmentBaseline: "middle",
              transform: "translateX(-25px)",
            }}
          >
            {labelAccessor ? labelAccessor(value) : value}
          </text>
        </g>
      ))}
      <text
        x={-dms.boundedHeight / 2}
        y={-dms.marginLeft + 50}
        style={{ transform: "rotate(-90deg)", textAnchor: "middle" }}
      >
        {label}
      </text>
    </g>
  );
};

const axisComponentsByDimension = {
  x: AxisHorizontal,
  y: AxisVertical,
};

export default Axis;
