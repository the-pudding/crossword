import React from "react"
import {
  Line,
  OverviewWrapper,
  AboveBelowWrapper,
  BothChartsWrapper,
  AboveBelowChartWrapper,
} from "../../../styles/styles.js"
import Overview from "./Overview.jsx"
import AboveBelowChart from "./AboveBelowChart.jsx"
import COLORS from "../../../styles/colors.js"

const AboveBelow = ({ data, overviewData, word, compare }) => {
  const totalClues =
    overviewData.neutral + overviewData.white + overviewData.poc

  const keys =
    compare === "race"
      ? ["neutral", "white", "poc"]
      : ["neutral", "man", "woman"]
  const keyLabels =
    compare === "race"
      ? [
          "a person",
          "non-Hispanic white people",
          "underrepresented minorities (URM)",
        ]
      : ["a person", "men", "women"]
  return (
    <AboveBelowWrapper>
      <h2>
        {totalClues} clues for the answer <strong>{word.toUpperCase()}</strong>
      </h2>
      <Line />

      <BothChartsWrapper>
        <OverviewWrapper>
          <Overview
            data={overviewData}
            totalClues={totalClues}
            keys={keys}
            keyLabels={keyLabels}
            keyColors={[
              "white",
              COLORS.offWhite,
              compare === "gender" ? COLORS.blue : COLORS.pink,
            ]}
          />
        </OverviewWrapper>
        <AboveBelowChartWrapper>
          <AboveBelowChart data={data} compare={compare} />
        </AboveBelowChartWrapper>
      </BothChartsWrapper>
    </AboveBelowWrapper>
  )
}

export default AboveBelow
