import React from "react"
import copy from "../../data/copy.json"
import {
  Section,
  ChartNote,
  SidewaysBars,
  SidewaysBarWrapper,
} from "../../styles/styles.js"
import { createHtmlForCopy } from "../utils.js"
import popularAnswerNames from "../../data/topPeopleNytAnswersOnly.json"
import PopularNamesTable from "../charts/table/PopularNamesTable.jsx"
import ava from "../../data/AVA.json"
import { RoughNotation } from "react-rough-notation"
import LineChart from "../charts/line-chart/LineChart.jsx"
import SidewaysBar from "../charts/sideways-bar/SidewaysBar.jsx"
import COLORS from "../../styles/colors.js"
import _ from "lodash"

const NamesInAnswers = () => {
  const publications = [
    { short: "usa", long: "USA Today" },
    { short: "uni", long: "Universal" },
    { short: "nyt", long: "NY Times" },
    { short: "lat", long: "LA Times" },
    { short: "wsj", long: "WSJ" },
  ]
  const data2020 = ava.filter(d => d.year === "2020")[0]

  const modernAvas = publications.map(publication => ({
    publication,
    count: _.sum(
      _.keys(data2020)
        .filter(
          key =>
            key.includes(publication.short) &&
            (key.includes("DuVernay") || key.includes("Max"))
        )
        .map(key => data2020[key])
    ),
    color: COLORS[publication.short],
  }))
  const historicAvas = publications.map(publication => ({
    publication,
    count: _.sum(
      _.keys(data2020)
        .filter(
          key => key.includes(publication.short) && key.includes("Gardner")
        )
        .map(key => data2020[key])
    ),
    color: COLORS[publication.short],
  }))
  const sortedModern = _.orderBy(modernAvas, ["count"], ["desc"])
  const sortedHistoric = _.orderBy(
    historicAvas,
    d => {
      const indexInModern = _.findIndex(
        _.orderBy(modernAvas, ["count"], ["desc"]),
        m => m.publication.short === d.publication.short
      )
      return indexInModern
    },
    ["asc"]
  )

  return (
    <Section>
      <h1>
        2.{" "}
        <RoughNotation
          type="underline"
          show={true}
          animate={false}
          color="lightgrey"
        >
          Modernizing
        </RoughNotation>{" "}
        old names
      </h1>
      <PopularNamesTable
        data={popularAnswerNames}
        featuredColumn="answers"
        columnTitle="Most Common Answer"
      />
      {createHtmlForCopy(copy.deepDivePart1)}

      <div
        style={{
          marginTop: "40px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ textAlign: "center" }}>
          Use of the answer <strong>AVA</strong> across all publications
        </h2>
        <LineChart
          data={ava.filter(d => parseInt(d.year) >= 2000)}
          metrics={["AvaGardner", "AvaDuVernay", "Other Avas"]}
          colors={[COLORS.blue, COLORS.pink, COLORS.grey]}
        />
        <ChartNote>
          *Note: 2020 is projected for the full year using the first 10 months.
        </ChartNote>
      </div>

      <SidewaysBars>
        <SidewaysBarWrapper>
          <SidewaysBar
            data={sortedModern}
            title={
              <>
                <strong>AVA DUVERNAY</strong> in 2020
              </>
            }
            showLabels={true}
          />
        </SidewaysBarWrapper>
        <SidewaysBarWrapper>
          <SidewaysBar
            data={sortedHistoric}
            title={
              <>
                <strong>AVA GARDNER</strong> in 2020
              </>
            }
            showLabels={false}
          />
        </SidewaysBarWrapper>
      </SidewaysBars>
    </Section>
  )
}

export default NamesInAnswers
