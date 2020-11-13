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
  const currentClues = clues[currentDirection]
    .filter(d => d.number === currentNumber)[0]
    .clue.split("|")
    .map(d => _.trim(d))

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
      <div className="mobile-clues">
        <button
          onClick={previousClue}
          style={{ marginRight: "10px", height: "40px", width: "40px" }}
        >
          {"<"}
        </button>
        <div style={{ textAlign: "center", width: "50%" }}>
          {currentClues[0]}
        </div>

        <div style={{ marginLeft: "10px", marginRight: "10px" }}>
          <strong>or</strong>
        </div>

        <div style={{ textAlign: "center", width: "50%" }}>
          {currentClues[1]}
        </div>
        <button
          onClick={nextClue}
          style={{ marginLeft: "10px", height: "40px", width: "40px" }}
        >
          {">"}
        </button>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <button
          onClick={previousClue}
          style={{
            marginRight: "10px",
            height: "40px",
            width: "40px",
            visibility: "hidden",
          }}
        >
          {"<"}
        </button>
        <h3 style={{ width: "50%", textAlign: "center" }}>(White)</h3>
        <h3 style={{ width: "50%", textAlign: "center" }}>(URM)</h3>
        <button
          onClick={nextClue}
          style={{
            marginLeft: "10px",
            height: "40px",
            width: "40px",
            visibility: "hidden",
          }}
        >
          {">"}
        </button>
      </div>
    </div>
  )
}

export default MobileClues
