import React from "react"
import _ from "lodash"

const MobileClues = ({
  setFocusedRow,
  setFocusedCol,
  currentDirection,
  setCurrentDirection,
  currentNumber,
  setCurrentNumber,
  clues,
  data,
}) => {
  const currentClueText = clues[currentDirection].filter(
    d => d.number === currentNumber
  )[0].clue

  const previousClue = () => {
    const currentIndex = _.findIndex(
      clues[currentDirection],
      d => d.number === currentNumber
    )

    let newRow = null
    let newCol = null
    let newDirection = null
    let newNumber = null
    if (currentIndex - 1 < 0) {
      // out of clues in that direction, move to other direction
      newDirection = currentDirection === "across" ? "down" : "across"
      const prev = _.last(clues[newDirection])
      newNumber = prev.number
      newRow = data[newDirection][newNumber].row
      newCol = data[newDirection][newNumber].col
    } else {
      newDirection = currentDirection
      const prev = clues[currentDirection][currentIndex - 1]
      newNumber = prev.number
      newRow = data[newDirection][newNumber].row
      newCol = data[newDirection][newNumber].col
    }

    if (
      newRow !== null &&
      newCol !== null &&
      newNumber !== null &&
      newDirection !== null
    ) {
      setFocusedRow(newRow)
      setFocusedCol(newCol)
      setCurrentDirection(newDirection)
      setCurrentNumber(newNumber)
    }
  }

  const nextClue = () => {
    const currentIndex = _.findIndex(
      clues[currentDirection],
      d => d.number === currentNumber
    )

    let newRow = null
    let newCol = null
    let newDirection = null
    let newNumber = null
    if (currentIndex + 1 >= clues[currentDirection].length) {
      // out of clues in that direction, move to other direction
      newDirection = currentDirection === "across" ? "down" : "across"
      const next = clues[newDirection][0]
      newNumber = next.number
      newRow = data[newDirection][newNumber].row
      newCol = data[newDirection][newNumber].col
    } else {
      // next clue in this direction
      newDirection = currentDirection
      const next = clues[currentDirection][currentIndex + 1]
      newNumber = next.number
      newRow = data[newDirection][newNumber].row
      newCol = data[newDirection][newNumber].col
    }

    if (
      newRow !== null &&
      newCol !== null &&
      newNumber !== null &&
      newDirection !== null
    ) {
      setFocusedRow(newRow)
      setFocusedCol(newCol)
      setCurrentDirection(newDirection)
      setCurrentNumber(newNumber)
    }
  }

  return (
    <div className="mobile">
      <button onClick={previousClue}>{"<"}</button>
      <div style={{ textAlign: "center" }}>{currentClueText}</div>
      <button onClick={nextClue}>{">"}</button>
    </div>
  )
}

export default MobileClues
