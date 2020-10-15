import React from "react"
import copy from "../../data/copy.json"
import _ from "lodash"
import { Section } from "../../styles/styles.js"
import { createHtmlForCopy } from "../utils.js"
import StackedBarChart from "../charts/StackedBarChart.jsx"
import chess from "../../data/CHESS.json"
import poem from "../../data/POEM.json"
import mit from "../../data/MIT.json"
import LineChart from "../charts/LineChart.jsx"
import PopularNamesTable from "../charts/PopularNamesTable.jsx"
import NameOverTime from "../charts/NameOverTime.jsx"
import ava from "../../data/AVA.json"

const UsaTodayDeepDive = () => {
  return (
    <>
      <Section>{createHtmlForCopy(copy.introduceDeepDive)}</Section>
      <Section>
        {/* Too old */}
        {createHtmlForCopy(copy.tooOld)}
        <PopularNamesTable />

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

        {/* <LineChart data={_.sortBy(ava, "year")} metric="nytGardner" /> */}
        {/* <StackedBarChart data={chess} word={"chess"} compare="race" />
        <StackedBarChart data={poem} word={"poem"} compare="race" />
        <StackedBarChart data={mit} word={"mit"} compare="gender" /> */}
        {/* {createHtmlForCopy(copy.introduceModernize)} */}
      </Section>
    </>
  )
}

export default UsaTodayDeepDive
