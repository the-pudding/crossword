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

  const [showAnswers, setShowAnswers] = useState(false)
  const [metric, setMetric] = useState("gender")

  const waffles = (
    <PuzzleWaffles>
      <WaffleChart
        title={"Gender"}
        size="large"
        data={
          _.first(
            raceGenderBreakdown.filter(
              d => d.decade === "2020" && d.publication === "nyt"
            )
          ).genderBreakdown
        }
        colors={[COLORS.woman, COLORS.man]}
        labels={["women", "men"]}
        changeMetric={() => setMetric("gender")}
        clickable={true}
        margin="0 0 3rem 0"
      />
      <WaffleChart
        title={"Race & Ethnicity"}
        size="large"
        data={
          _.first(
            raceGenderBreakdown.filter(
              d => d.decade === "2020" && d.publication === "nyt"
            )
          ).raceBreakdown
        }
        colors={[COLORS.poc, COLORS.white]}
        labels={["under-represented minorities", "non-Hispanic white"]}
        changeMetric={() => setMetric("race")}
        clickable={true}
        margin="0"
      />
    </PuzzleWaffles>
  )

  //const data = addColorsToData(prepareCrosswordData(crosswordData), metric)
  const data = prepareCrosswordData(crosswordData)
  console.log({ data })

  return (
    <Section>
      {showAnswers ? (
        createHtmlForCopy(copy.introPuzzleAfter)
      ) : (
        <>
          {createHtmlForCopy(copy.introPuzzleBefore)}

          <TextNote>
            If you're stumped or don't want to play, you can{" "}
            <button
              onClick={() => {
                crosswordRef.current.fillAllAnswers()
                setShowAnswers(true)
              }}
            >
              Skip to results
            </button>
          </TextNote>
        </>
      )}

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
              setShowAnswers(true)
            }
          }}
          colorCode={showAnswers}
          waffles={showAnswers ? waffles : null}
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

      {createHtmlForCopy(copy.introPuzzleAfter)}
    </Section>
  )
}

export default IntroPuzzle
