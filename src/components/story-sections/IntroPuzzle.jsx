import React, { useState } from "react"
import copy from "../../data/copy.json"
import { CrosswordWaffleWrapper, Section } from "../../styles/styles.js"
import _ from "lodash"
import CrosswordChart from "../charts/crossword/CrosswordChart.jsx"
import WaffleChart from "../charts/WaffleChart.jsx"
import raceGenderBreakdown from "../../data/raceGenderBreakdownByDecade.json"
import {
  addColorsToData,
  createHtmlForCopy,
  prepareCrosswordData,
} from "../utils.js"
import { COLORS } from "../../styles/colors.js"
import crosswordData from "../../data/nyt-2020-with-pos.json"

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
  const [metric, setMetric] = useState("gender")

  return (
    <Section>
      <CrosswordWaffleWrapper>
        <CrosswordChart
          data={addColorsToData(prepareCrosswordData(crosswordData), metric)}
          colorCode={true}
        />
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
    </Section>
  )
}

export default IntroPuzzle
