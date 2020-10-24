import React from "react"
import { Line } from "../../../styles/styles.js"
import Overview from "./Overview.jsx"
import AboveBelowChart from "./AboveBelowChart.jsx"
import COLORS from "../../../styles/colors.js"

const AboveBelow = ({ data, overviewData, word }) => {
  const totalClues =
    overviewData.neutral + overviewData.white + overviewData.poc
  return (
    <div style={{ width: "100%", marginTop: "2rem", marginBottom: "3rem" }}>
      <h2>
        {totalClues} clues use the word <strong>{word.toUpperCase()}</strong>
      </h2>
      <Line />

      <div style={{ display: "flex" }}>
        <div style={{ flexBasis: "20%" }}>
          <Overview
            data={overviewData}
            totalClues={totalClues}
            keys={["neutral", "white", "poc"]}
            keyLabels={[
              "do not mention a person",
              "mention non-Hispanic white people",
              "mention underrepresented minorities",
            ]}
            keyColors={["white", COLORS.grey, COLORS.blue]}
          />
        </div>
        <div style={{ flexBasis: "80%" }}>
          <AboveBelowChart data={data} />
        </div>
      </div>
    </div>
  )
}

export default AboveBelow
