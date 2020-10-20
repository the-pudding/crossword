import React, { useState, useEffect } from "react"
import _ from "lodash"

const barPadding = 1

const publicationColorLookup = {
  wsj: "red",
  usatoday: "green",
  universal: "yellow",
  nytimes: "purple",
  latimes: "orange",
}
const colorLookup = {
  above: "tomato",
  below: "grey",
}
const StackedSquares = ({
  data,
  squareHeight,
  dms,
  bins,
  metricAccessor,
  yAccessor,
  xScale,
  yScale,
  compare,
}) => {
  return (
    <>
      {bins.map((bin, i) => {
        const yearData = _.first(data.filter(d => parseInt(d.year) === bin.x0))
        if (!yearData) return null

        let nextAboveYValue = -squareHeight
        let nextBelowYValue = 0

        return (
          <g
            key={i}
            transform={`translate(${xScale(bin.x0) - 0.5 * squareHeight}, ${
              dms.boundedHeight
            })`}
          >
            {yearData.clues.map((squareData, clueI) => {
              const { name, binaryRace, gender, publication } = squareData
              let y = 0

              if (compare === "race") {
                y = binaryRace === "white" ? nextBelowYValue : nextAboveYValue
                if (binaryRace === "white") {
                  nextBelowYValue += squareHeight
                } else {
                  nextAboveYValue -= squareHeight
                }
              } else if (compare === "gender") {
                y = gender === "man" ? nextBelowYValue : nextAboveYValue
                if (gender === "man") {
                  nextBelowYValue += squareHeight
                } else {
                  nextAboveYValue -= squareHeight
                }
              }

              return (
                <rect
                  key={clueI}
                  x={0}
                  y={y}
                  height={squareHeight}
                  width={squareHeight}
                  fill={y < 0 ? colorLookup.above : colorLookup.below}
                />
              )
            })}
          </g>
        )
      })}
    </>
  )
}

export default StackedSquares
