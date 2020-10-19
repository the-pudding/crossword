import React from "react"
import OrdinalFrame from "semiotic/lib/OrdinalFrame"

const StackedBar = ({ data, word, compare }) => {
  const total =
    compare === "gender"
      ? data[0].neutral + data[0].man + data[0].woman
      : data[0].neutral + data[0].white + data[0].poc
  const colorHash = {
    white: "#ac58e5",
    poc: "#9fd0cb",
    woman: "#E0488B",
    man: "cornflowerblue",
    neutral: "grey",
  }
  const rAccessor =
    compare === "gender"
      ? ["neutral", "man", "woman"]
      : ["neutral", "white", "poc"]
  const frameProps = {
    data,
    size: [500, 50],
    type: "bar",
    projection: "horizontal",
    oAccessor: "answer",
    rAccessor,
    style: d => ({ fill: colorHash[rAccessor[d.rIndex]], stroke: "white" }),
    pieceHoverAnnotation: true,
    tooltipContent: d => {
      return (
        <div
          style={{
            background: "white",
            outline: "solid black 1px",
            height: "40px",
            width: "100px",
          }}
        >
          <p>
            {d.rName}: {d.value}
          </p>
        </div>
      )
    },
  }
  return (
    <div>
      <h3>
        Clue type for{" "}
        <span style={{ fontWeight: "bold" }}>{word.toUpperCase()}</span>
      </h3>

      <div>2000-2020: {total} clues total</div>

      {typeof window !== "undefined" ? <OrdinalFrame {...frameProps} /> : null}
    </div>
  )
}

export default StackedBar
