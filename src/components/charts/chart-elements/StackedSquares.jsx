import React from "react";
import * as d3 from "d3";
import _ from "lodash";

const barPadding = 1;

const colorLookup = {
  wsj: "red",
  usatoday: "green",
  universal: "yellow",
  nytimes: "purple",
  latimes: "orange",
};
const StackedSquares = ({
  data,
  squareHeight,
  dms,
  bins,
  metricAccessor,
  yAccessor,
  xScale,
  yScale,
}) => {
  return (
    <>
      {bins.map((bin, i) => {
        const yearData = _.first(
          data.filter((d) => parseInt(d.year) === bin.x0)
        );
        if (!yearData) return null;

        let nextAboveYValue = -squareHeight;
        let nextBelowYValue = 0;

        return (
          <g
            key={i}
            transform={`translate(${xScale(bin.x0) - 0.5 * squareHeight}, ${
              dms.boundedHeight
            })`}
          >
            {yearData.clues.map(({ binaryRace, publication }, clueI) => {
              const y =
                binaryRace === "white" ? nextBelowYValue : nextAboveYValue;
              if (binaryRace === "white") {
                nextBelowYValue += squareHeight;
              } else {
                nextAboveYValue -= squareHeight;
              }
              return (
                <rect
                  key={clueI}
                  x={0}
                  y={y}
                  height={squareHeight}
                  width={squareHeight}
                  fill={colorLookup[publication]}
                />
              );
            })}
          </g>
        );
      })}
    </>
  );
};

export default StackedSquares;
