import React, { useRef, useEffect } from "react"
import Crossword from "./Crossword.js"
import confetti from "canvas-confetti"

const CrosswordChart = ({ data, colorCode, showAnswers }) => {
  const crosswordRef = useRef(null)

  // start puzzle blank
  useEffect(() => {
    crosswordRef.current.reset()
  }, [])

  // fill in answers if asked to
  useEffect(() => {
    if (showAnswers) {
      crosswordRef.current.fillAllAnswers()
    }
  }, [showAnswers, colorCode])

  return (
    <div>
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
      {!showAnswers && (
        <>
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
        </>
      )}
    </div>
  )
}

export default CrosswordChart
