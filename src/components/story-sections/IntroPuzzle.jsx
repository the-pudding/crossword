import React, { useEffect, useRef } from "react"
import copy from "../../data/copy.json"
import {
  Section,
  Callout,
  CrosswordChartWrapper,
  SkipButtonWrapper,
  EditSvg,
  ClueLabels,
} from "../../styles/styles.js"
import _ from "lodash"
import { createHtmlForCopy, prepareCrosswordData } from "../utils.js"
import COLORS from "../../styles/colors.js"
import crosswordData from "../../data/double-clues-3.json"
import Crossword from "../charts/crossword/Crossword.js"
import confetti from "canvas-confetti"

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

        <SkipButtonWrapper>
          <div>Play the puzzle or </div>
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => {
              crosswordRef.current.fillAllAnswers()

              const skipContainer = document.querySelector("#skip-here")

              window.scrollTo({
                top:
                  skipContainer.getBoundingClientRect().top +
                  window.pageYOffset,
                lef:
                  skipContainer.getBoundingClientRect().left +
                  window.pageXOffset,
                behavior: "smooth",
              })
            }}
          >
            skip to analysis
          </button>
        </SkipButtonWrapper>

        <CrosswordChartWrapper>
          <ClueLabels>
            <h3 style={{ paddingLeft: "1em" }}>Non-Hispanic white people</h3>
            <h3 style={{ paddingRight: "1em" }}>Underrepresented minorities</h3>
          </ClueLabels>
          <Crossword
            ref={crosswordRef}
            useStorage={false}
            theme={{
              numberColor: COLORS.mainColor,
              focusBackground: "#FFEB85",
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
          style={{ marginTop: "4.5rem" }}
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
      <Section id="skip-here">
        {createHtmlForCopy(copy.introPuzzleAfter)}
      </Section>
    </>
  )
}

export default IntroPuzzle
