import React from "react"
import copy from "../../data/copy.json"
import { Section, Note } from "../../styles/styles.js"
import { createHtmlForCopy } from "../utils.js"
import popularAnswerNames from "../../data/topPeopleNytAnswersOnly.json"
import PopularNamesTable from "../charts/table/PopularNamesTable.jsx"
import NameOverTime from "../charts/NameOverTime.jsx"
import ava from "../../data/AVA.json"
import { RoughNotation } from "react-rough-notation"
import LineChart from "../charts/line-chart/LineChart.jsx"
import COLORS from "../../styles/colors.js"

const NamesInAnswers = () => {
  return (
    <Section>
      <h1>
        2. Names in{" "}
        <RoughNotation
          type="underline"
          show={true}
          animate={false}
          color="lightgrey"
        >
          <span>answers</span>
        </RoughNotation>
      </h1>
      <PopularNamesTable
        data={popularAnswerNames}
        featuredColumn="answers"
        columnTitle="Common Answers"
      />
      {createHtmlForCopy(copy.deepDivePart1)}

      <h2 style={{ textAlign: "center" }}>
        <strong>AVA</strong> across all publications
      </h2>
      <LineChart
        data={ava.filter(d => parseInt(d.year) >= 2000)}
        metrics={["AvaGardner", "AvaDuVernay", "Other Avas"]}
        colors={[COLORS.blue, COLORS.pink, COLORS.grey]}
      />
      <Note>
        *Note: 2020 is projected for the full year using the first 10 months.
      </Note>

      {/* <NameOverTime
        data={ava.filter(d => parseInt(d.year) >= 2000)}
        answer="AVA"
        lineColors={["cornflowerblue", "red", "darkgrey"]}
        names={["Ava Gardner", "Ava DuVernay", "Other"]}
        extraAnnotations={[
          {
            type: "x",
            year: "2014",
            note: {
              label: "DuVernay directs 'Selma'",
              align: "middle",
              lineType: null,
              wrap: 100,
            },
            color: "#3f4482",
            dy: -10,
            dx: 0,
            connector: { end: "none" },
          },
        ]}
      /> */}
    </Section>
  )
}

export default NamesInAnswers
