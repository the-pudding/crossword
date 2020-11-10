// ADAPTED FROM @jaredreisinger/react-crossword

import React, { useCallback, useContext } from "react"
import PropTypes from "prop-types"
import styled, { ThemeContext } from "styled-components"
import _ from "lodash"

import { CrosswordSizeContext } from "./context"

// expected props: row, col, answer, crossword, cellSize

const CellRect = styled.g`
  cursor: default;
  font-size: ${props => `${props.fontSize}px`};
  &:hover {
    cursor: pointer;
  }
`

/**
 * An individual-letter answer cell within the crossword grid.
 *
 * A `Cell` lives inside the SVG for a [`Crossword`](#crossword), and renders at
 * a location determined by the `row`, `col`, and `cellSize` properties from
 * `cellData` and `renderContext`.
 */
export default function Cell({ cellData, onClick, focus, highlight }) {
  const { cellSize, cellPadding, cellInner, cellHalf, fontSize } = useContext(
    CrosswordSizeContext
  )
  const {
    // gridBackground,
    cellBackground,
    cellBorder,
    textColor,
    numberColor,
    focusBackground,
    highlightBackground,
  } = useContext(ThemeContext)

  const handleClick = useCallback(
    event => {
      event.preventDefault()
      if (onClick) {
        onClick(cellData)
      }
    },
    [cellData, onClick]
  )

  const { row, col, guess, number } = cellData

  const x = col * cellSize
  const y = row * cellSize

  return (
    <CellRect onClick={handleClick} fontSize={fontSize}>
      <rect
        x={x + cellPadding}
        y={y + cellPadding}
        width={cellInner}
        height={cellInner}
        fill={
          focus
            ? focusBackground
            : highlight
            ? highlightBackground
            : cellBackground
        }
        stroke={cellBorder}
        strokeWidth={cellSize / 50}
      />
      {number && (
        <text
          x={x + cellPadding * 4 + 1}
          y={y + cellPadding * 4 + 1}
          textAnchor="start"
          dominantBaseline="hanging"
          style={{ fontSize: "0.3rem", fill: numberColor, opacity: 0.5 }}
        >
          {number}
        </text>
      )}
      <text
        x={x + cellHalf}
        y={y + cellHalf + 1} // +1 for visual alignment?
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ fill: textColor }}
      >
        {guess}
      </text>
    </CellRect>
  )
}

Cell.propTypes = {
  /** the data specific to this cell */
  cellData: PropTypes.shape({
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
    guess: PropTypes.string.isRequired,
    number: PropTypes.string,
  }).isRequired,

  /** whether this cell has focus */
  focus: PropTypes.bool,

  /** whether this cell is highlighted */
  highlight: PropTypes.bool,

  /** handler called when the cell is clicked */
  onClick: PropTypes.func,
}

Cell.defaultProps = {
  focus: false,
  highlight: false,
  onClick: null,
}

// export default Cell;
