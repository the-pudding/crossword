import React, { useState, useEffect, useRef } from "react"
import copy from "../../data/copy.json"
import { Section, SmallNote, Callout } from "../../styles/styles.js"
import _ from "lodash"
import WaffleChart from "../charts/waffle/WaffleChart.jsx"
import raceGenderBreakdown from "../../data/raceGenderBreakdownByDecade.json"
import {
  addColorsToData,
  createHtmlForCopy,
  prepareCrosswordData,
} from "../utils.js"
import COLORS from "../../styles/colors.js"
import crosswordData from "../../data/nyt-2020-with-pos.json"
import Crossword from "../charts/crossword/Crossword.js"
import confetti from "canvas-confetti"

const IntroPuzzle = () => {
  const crosswordRef = useRef(null)

  // start puzzle blank
  useEffect(() => {
    crosswordRef.current.reset()
  }, [])

  const [showAnswers, setShowAnswers] = useState(false)
  const [metric, setMetric] = useState("gender")

  const waffles = (
    <div>
      <WaffleChart
        title={"Gender"}
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
        margin="0 0 10px 0"
      />
      <WaffleChart
        title={"Race & Ethnicity"}
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
        margin="0 0 10px 0"
      />
    </div>
  )

  const data = addColorsToData(prepareCrosswordData(crosswordData), metric)

  return (
    <Section>
      {showAnswers ? (
        createHtmlForCopy(copy.introPuzzleAfter)
      ) : (
        <>
          {createHtmlForCopy(copy.introPuzzleBefore)}

          <SmallNote>
            If you're stumped or don't want to play, you can{" "}
            <button
              onClick={() => {
                crosswordRef.current.fillAllAnswers()
                setShowAnswers(true)
              }}
            >
              Skip to results
            </button>
          </SmallNote>
        </>
      )}

      <div style={{ height: "600px", width: "100%", marginTop: "100px" }}>
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

        {/* <button
          onClick={() => {
            crosswordRef.current.reset()
            setShowAnswers(false)
          }}
        >
          clear
        </button> */}
      </div>

      <Callout>
        <strong style={{ marginRight: "0.3rem" }}>
          Want some more puzzles?
        </strong>
        Check out the others we've generated with our data.
      </Callout>
    </Section>
  )
}

export default IntroPuzzle
