import React from "react"
import { Line } from "../../../styles/styles.js"
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
      ? ["a person", "non-Hispanic white people", "underrepresented minorities"]
      : ["a person", "men", "women"]
  return (
    <div style={{ width: "100%", marginTop: "4rem", marginBottom: "3rem" }}>
      <h2>
        {totalClues} clues use the word <strong>{word.toUpperCase()}</strong>
      </h2>
      <Line />

      <div style={{ display: "flex" }}>
        <div style={{ flexBasis: "20%" }}>
          <Overview
            data={overviewData}
            totalClues={totalClues}
            keys={keys}
            keyLabels={keyLabels}
            keyColors={["white", COLORS.grey, COLORS.blue]}
          />
        </div>
        <div style={{ flexBasis: "80%", marginLeft: "2rem" }}>
          <AboveBelowChart data={data} compare={compare} />
        </div>
      </div>
    </div>
  )
}

export default AboveBelow
