import React, { useEffect, useRef } from "react"
import copy from "../../data/copy.json"
import {
  Section,
  Callout,
  CrosswordChartWrapper,
  SkipButtonWrapper,
  EditSvg,
} from "../../styles/styles.js"
import _ from "lodash"
import { createHtmlForCopy, prepareCrosswordData } from "../utils.js"
import COLORS from "../../styles/colors.js"
import crosswordData from "../../data/double-clues-3.json"
import Crossword from "../charts/crossword/Crossword.js"
import confetti from "canvas-confetti"

const IntroPuzzle = ({ scrollLocation }) => {
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

        <SkipButtonWrapper>
          <div>Play the puzzle or </div>
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => {
              crosswordRef.current.fillAllAnswers()
              if (scrollLocation) {
                window.scrollTo({
                  ...scrollLocation,
                  behavior: "smooth",
                })
              }
            }}
          >
            skip to analysis
          </button>
        </SkipButtonWrapper>

        <CrosswordChartWrapper>
          <Crossword
            ref={crosswordRef}
            useStorage={false}
            theme={{
              numberColor: COLORS.mainColor,
              focusBackground: COLORS.yellow,
              highlightBackground: COLORS.crosswordBlue,
              cellBorder: COLORS.mainColor,
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

        <Callout
          href="https://pudding.cool/2020/11/crossword-puzzles"
          target="_blank"
          style={{ marginTop: "2.5rem" }}
        >
          <EditSvg />
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
