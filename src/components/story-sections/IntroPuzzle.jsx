import React, { useState } from "react"
import copy from "../../data/copy.json"
import { CrosswordWaffleWrapper, Section } from "../../styles/styles.js"
import _ from "lodash"
import CrosswordChart from "../charts/crossword/CrosswordChart.jsx"
import WaffleChart from "../charts/WaffleChart.jsx"
import raceGenderBreakdown from "../../data/raceGenderBreakdownByDecade.json"
import { Scrollama } from "react-scrollama"
import { addColorsToData, createHtmlForCopy } from "../utils.js"
import { COLORS } from "../../styles/colors.js"

const tempData = {
  across: {
    1: {
      clue: "McGhee",
      answer: "MICHELLE",
      row: 4,
      col: 0,
      race: "poc",
      gender: "woman",
    },
    2: {
      clue: "The proof is in the __",
      answer: "PUDDING",
      row: 1,
      col: 3,
      race: "white",
      gender: "man",
    },
  },
  down: {
    3: {
      clue: "Goldenberg",
      answer: "RUSSELL",
      row: 0,
      col: 4,
      race: "white",
      gender: "man",
    },
    4: {
      clue: "Jan",
      answer: "DIEHM",
      row: 3,
      col: 1,
      race: "white",
      gender: "woman",
    },
  },
}

const IntroPuzzle = () => {
  const [stepIndex, setStepIndex] = useState(null)
  const [metric, setMetric] = useState("gender")

  // advancing scrollytelling steps
  const onStepEnter = ({ data }) => {
    setStepIndex(data)
  }

  return (
    <Section>
      <CrosswordWaffleWrapper>
        <CrosswordChart
          data={addColorsToData(tempData, metric)}
          colorCode={stepIndex === 1}
          showAnswers={stepIndex === 1}
        />
        <div style={{ opacity: stepIndex === 1 ? 1 : 0 }}>
          <WaffleChart
            title={"Gender"}
            data={
              _.first(
                raceGenderBreakdown.filter(
                  d => d.decade === "2020" && d.publication === "nyt"
                )
              ).genderBreakdown
            }
            colors={[COLORS.nonbinary, COLORS.woman, COLORS.man]}
            labels={["non-binary", "women", "men"]}
            changeMetric={() => setMetric("gender")}
            clickable={true}
          />
          <WaffleChart
            title={"Race"}
            data={
              _.first(
                raceGenderBreakdown.filter(
                  d => d.decade === "2020" && d.publication === "nyt"
                )
              ).raceBreakdown
            }
            colors={[COLORS.poc, COLORS.white]}
            labels={["minority", "non-hispanic white"]}
            changeMetric={() => setMetric("race")}
            clickable={true}
          />
        </div>
      </CrosswordWaffleWrapper>

      {typeof window !== "undefined" && (
        <Scrollama onStepEnter={onStepEnter} offset={0.8}>
          {createHtmlForCopy(copy.introSteps)}
        </Scrollama>
      )}
    </Section>
  )
}

export default IntroPuzzle
