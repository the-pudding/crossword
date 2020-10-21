import React, { useState } from "react"
import copy from "../../data/copy.json"
import {
  CrosswordWaffleWrapper,
  Section,
  SmallNote,
} from "../../styles/styles.js"
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

const IntroPuzzle = () => {
  const [showAnswers, setShowAnswers] = useState(false)
  const [metric, setMetric] = useState("gender")

  return (
    <Section>
      {createHtmlForCopy(copy.introPuzzleBefore)}

      <SmallNote>
        If you're stumped or don't want to play, you can{" "}
        <button>Skip to results</button>
      </SmallNote>

      <CrosswordWaffleWrapper>
        <CrosswordChart
          data={addColorsToData(prepareCrosswordData(crosswordData), metric)}
          colorCode={false}
        />
        {showAnswers && (
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
        )}
      </CrosswordWaffleWrapper>
    </Section>
  )
}

export default IntroPuzzle
