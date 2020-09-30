import React from "react";
import * as d3 from "d3";

const Line = ({
  data,
  xAccessor,
  yAccessor,
  xScale,
  yScale,
  color,
  fillArea,
}) => {
  const lineGenerator = d3
    .line()
    .x((d) => xScale(xAccessor(d)))
    .y((d) => yScale(yAccessor(d)));

  const areaGenerator = d3
    .area()
    .x((d) => xScale(xAccessor(d)))
    .y1((d) => yScale(yAccessor(d)))
    .y0(yScale(0));

  return (
    <>
      <path
        d={lineGenerator(data)}
        fill="none"
        stroke={color}
        strokeWidth={2}
      />
      {fillArea && <path d={areaGenerator(data)} fill={color} />}
    </>
  );
};

export default Line;
