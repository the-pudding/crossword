import React from "react";

const Circles = ({
  data,
  xScale,
  yScale,
  colorScale,
  xAccessor,
  yAccessor,
  colorAccessor,
  radius,
}) => {
  return data.map((d, i) => (
    <circle
      key={i}
      cx={xScale(xAccessor(d))}
      cy={yScale(yAccessor(d))}
      r={radius}
      fill={colorScale(colorAccessor(d))}
    />
  ));
};

export default Circles;
