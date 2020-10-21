import React, { useRef, useEffect } from "react"
import Crossword from "./Crossword.js"
import confetti from "canvas-confetti"

const CrosswordChart = ({ data, colorCode }) => {
  const crosswordRef = useRef(null)

  // start puzzle blank
  useEffect(() => {
    crosswordRef.current.reset()
  }, [])

  return (
    <div style={{ height: "600px" }}>
      <Crossword
        ref={crosswordRef}
        theme={{
          numberColor: "black",
          focusBackground: "gold",
          highlightBackground: "#72cefc",
        }}
        data={data}
        onCorrect={() => {
          if (
            crosswordRef.current.isCrosswordCorrect() &&
            typeof window !== "undefined"
          ) {
            confetti()
          }
        }}
        colorCode={colorCode ? true : false}
      />
      <button onClick={() => crosswordRef.current.fillAllAnswers()}>
        skip to results
      </button>
      <button
        onClick={() => {
          crosswordRef.current.reset()
        }}
      >
        clear
      </button>
    </div>
  )
}

export default CrosswordChart
