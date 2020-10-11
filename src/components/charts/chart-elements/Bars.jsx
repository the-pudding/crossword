import React from "react";
import * as d3 from "d3";
import _ from "lodash";

const barPadding = 1;

const Bars = ({
  data,
  dms,
  bins,
  metricAccessor,
  yAccessor,
  xScale,
  yScale,
}) => {
  console.log({ data });

  return (
    <>
      {bins.map((bin, i) => (
        <g
          key={`group-${i}`}
          transform={`translate(${xScale(bin.x0) + barPadding / 2}, 0)`}
        >
          <rect
            key={`bar-${i}`}
            x={0}
            y={yScale(yAccessor(bin))}
            height={dms.boundedHeight - yScale(yAccessor(bin))}
            width={d3.max([0, xScale(bin.x1) - xScale(bin.x0) - barPadding])}
            fill="cornflowerblue"
          />
          <text
            x={(xScale(bin.x1) - xScale(bin.x0) - barPadding) / 2}
            y={0} // workaround to use translate and make it animatable
            fill="darkgrey"
            style={{
              textAnchor: "middle",
              fontSize: "12px",
            }}
            transform={`translate(0, ${yScale(yAccessor(bin)) - 5})`}
            className="barLabel"
          >
            {yAccessor(bin) || ""}
          </text>
        </g>
      ))}
    </>
  );
};

export default Bars;
