import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import _ from "lodash";

const barPadding = 1;

const publicationColorLookup = {
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
  setHoveredData,
}) => {
  const [personColorLookup, setPersonColorLookup] = useState(null);

  useEffect(() => {
    const uniqueNames = _.uniq(
      data.reduce(
        (accumulator, currentValue) => [
          ...accumulator,
          ...currentValue.clues.map((clue) => clue.name),
        ],
        []
      )
    );
    const lookup = uniqueNames.map((name) => ({
      name,
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
    }));
    setPersonColorLookup(lookup);
  }, []);

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
            {yearData.clues.map((squareData, clueI) => {
              const { name, binaryRace, publication } = squareData;
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
                  fill={publicationColorLookup[publication]}
                  // fill={
                  //   personColorLookup
                  //     ? personColorLookup.filter((d) => d.name === name)[0]
                  //         .color
                  //     : "black"
                  // }
                  // stroke={publicationColorLookup[publication]}
                  // strokeWidth={5}
                  onMouseEnter={() => setHoveredData(squareData)}
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
