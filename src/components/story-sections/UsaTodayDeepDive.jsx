import React from "react"
import copy from "../../data/copy.json"
import _ from "lodash"
import { Section } from "../../styles/styles.js"
import { createHtmlForCopy } from "../utils.js"
import AboveBelowChart from "../charts/AboveBelowChart.jsx"
import chess from "../../data/CHESS.json"
import poem from "../../data/POEM.json"
import mit from "../../data/MIT.json"
import mitWithNeutral from "../../data/MIT-including-neutral.json"
import poemWithNeutral from "../../data/POEM-including-neutral.json"
import chessWithNeutral from "../../data/CHESS-including-neutral.json"
import LineChart from "../charts/LineChart.jsx"
import PopularNamesTable from "../charts/PopularNamesTable.jsx"
import StackedBar from "../charts/StackedBar.jsx"
import NameOverTime from "../charts/NameOverTime.jsx"
import ava from "../../data/AVA.json"

const UsaTodayDeepDive = () => {
  return (
    <>
      <Section>{createHtmlForCopy(copy.introduceDeepDive)}</Section>
      <Section>
        <h2>Angle 1: Names in Answers</h2>
        <PopularNamesTable />
        {createHtmlForCopy(copy.deepDivePart1)}

        <NameOverTime
          data={ava.filter(d => parseInt(d.year) >= 2000)}
          answer="AVA"
          lineColors={["cornflowerblue", "red", "darkgrey"]}
          names={["Ava Gardner", "Ava DuVernay", "Other"]}
          nameForBarChart="Ava DuVernay"
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
        />
      </Section>

      <Section>
        <h2>Angle 2: Names in Clues</h2>
        {createHtmlForCopy(copy.deepDivePart2)}
      </Section>
      <Section>
        {/* data needs to be an array to work w semiotic */}
        <StackedBar data={[mitWithNeutral]} word={"mit"} compare="gender" />
      </Section>
      <Section>
        <AboveBelowChart data={mit} word={"mit"} compare="gender" />
      </Section>
      <Section>
        <StackedBar data={[poemWithNeutral]} word={"poem"} compare="race" />
      </Section>
      <Section>
        <AboveBelowChart data={poem} word={"poem"} compare="race" />
      </Section>
      <Section>
        <StackedBar data={[chessWithNeutral]} word={"chess"} compare="race" />
      </Section>
      <Section>
        <AboveBelowChart data={chess} word={"chess"} compare="race" />
      </Section>
    </>
  )
}

export default UsaTodayDeepDive
