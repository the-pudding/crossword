import React, { useState, useEffect, useRef } from "react"
import copy from "../../data/copy.json"
import {
  Section,
  TextNote,
  Callout,
  CrosswordChartWrapper,
  PuzzleWaffles,
} from "../../styles/styles.js"
import _ from "lodash"
import WaffleChart from "../charts/waffle/WaffleChart.jsx"
import raceGenderBreakdown from "../../data/raceGenderBreakdownByDecade.json"
import {
  addColorsToData,
  createHtmlForCopy,
  prepareCrosswordData,
} from "../utils.js"
import COLORS from "../../styles/colors.js"
import crosswordData from "../../data/double-clues-3.json"
import Crossword from "../charts/crossword/Crossword.js"
import confetti from "canvas-confetti"
import Edit from "../../svg/mdi-edit.svg"

const IntroPuzzle = () => {
  const crosswordRef = useRef(null)

  // start puzzle blank
  useEffect(() => {
    crosswordRef.current.reset()
  }, [])

  const data = prepareCrosswordData(crosswordData)

  return (
    <>
      <Section>
        {createHtmlForCopy(copy.introPuzzleBefore)}

        <button
          onClick={() => {
            crosswordRef.current.fillAllAnswers()
            window.scrollTo({
              top: 3072,
              left: 0,
              behavior: "smooth",
            })
          }}
        >
          Skip to analysis
        </button>

        <CrosswordChartWrapper>
          <Crossword
            ref={crosswordRef}
            useStorage={false}
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
          />
        </CrosswordChartWrapper>

        <Callout>
          <Edit />
          <div style={{ marginLeft: "10px" }}>
            <strong style={{ marginRight: "0.3rem" }}>
              Want some more puzzles?
            </strong>
            Check out the others we've generated with our data.
          </div>
        </Callout>
      </Section>
      <Section>{createHtmlForCopy(copy.introPuzzleAfter)}</Section>
    </>
  )
}

export default IntroPuzzle
