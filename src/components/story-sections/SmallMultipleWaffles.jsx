import React, { useState } from "react"
import WaffleChart from "../charts/waffle/WaffleChart.jsx"
import raceGenderBreakdown from "../../data/raceGenderBreakdownByDecade.json"
import copy from "../../data/copy.json"
import { createHtmlForCopy } from "../utils.js"
import usCensusData from "../../data/usCensusData.json"
import _ from "lodash"
import {
  Section,
  Line,
  WafflePublicationTitle,
  WafflesWithTitles,
  WaffleRow,
  WaffleRowItem,
  ChartNote,
  TextNote,
} from "../../styles/styles.js"
import COLORS from "../../styles/colors.js"

const SmallMultipleWaffles = () => {
  const [decade, setDecade] = useState(2020)

  const publications = [
    { short: "wsj", long: "WSJ" },
    { short: "lat", long: "LATimes" },
    { short: "nyt", long: "NYTimes" },
    { short: "up", long: "Universal" },
    { short: "usa", long: "USA Today" },
  ]
  const genderColors = [COLORS.man, COLORS.woman]
  const raceColors = [COLORS.white, COLORS.poc]
  const genderLabels = ["men", "women"]
  const raceLabels = ["non-Hispanic white", "underrepresented minorities"]

  return (
    <>
      <Section>
        {/* {createHtmlForCopy(copy.introduceWaffles)} */}

        <div style={{ width: "100%", display: "flex" }}>
          <div style={{ flexBasis: "20%", visibility: "hidden" }} />
          <h3 style={{ flexBasis: "40%" }}>GENDER</h3>
          <h3 style={{ flexBasis: "40%" }}>RACE {"&"} ETHNICITY</h3>
        </div>

        <div style={{ width: "100%" }}>
          {publications.map(publication => {
            const allData =
              publication.short === "nyt"
                ? _.first(
                    raceGenderBreakdown.filter(
                      d =>
                        d.decade.includes(decade.toString()) &&
                        d.publication === publication.short
                    )
                  )
                : _.first(
                    raceGenderBreakdown.filter(
                      d =>
                        d.decade === "2020" &&
                        d.publication === publication.short
                    )
                  )
            const genderData = _.orderBy(
              allData.genderBreakdown,
              d => d.group === "men",
              ["desc"]
            )
            const raceData = _.orderBy(
              allData.raceBreakdown,
              d => d.group === "nonHispanicWhite",
              ["desc"]
            )
            const genderCensusSplit =
              publication.short === "nyt"
                ? _.ceil(
                    usCensusData.filter(d =>
                      d.decade.includes(decade.toString())
                    )[0].men
                  )
                : _.ceil(usCensusData.filter(d => d.decade === "2020")[0].men)
            const raceCensusSplit =
              publication.short === "nyt"
                ? _.ceil(
                    usCensusData.filter(d =>
                      d.decade.includes(decade.toString())
                    )[0].whiteNonHispanic
                  )
                : _.ceil(
                    usCensusData.filter(d => d.decade === "2020")[0]
                      .whiteNonHispanic
                  )

            return (
              <>
                <Line marginBottom="20px" />
                <div style={{ display: "flex", marginBottom: "20px" }}>
                  <div style={{ flexBasis: "20%" }}>
                    <h2 style={{ marginBottom: 0 }}>{publication.long}</h2>

                    {publication.short === "nyt" ? (
                      <div style={{ paddingRight: "20px" }}>
                        <select
                          name="cars"
                          id="cars"
                          style={{ fontSize: "0.8rem" }}
                          value={decade}
                          onChange={e => setDecade(e.target.value)}
                        >
                          {_.range(1940, 2030, 10).map((d, i) => (
                            <option value={d} key={i}>
                              {d}
                            </option>
                          ))}
                        </select>
                        <p
                          style={{
                            color: "#757575",
                            fontSize: "0.8rem",
                            padding: "10px 0 10px 0",
                          }}
                        >
                          We have data from each decade since 1940 from the
                          Times' crossword. Use the dropdown to see more.
                        </p>
                      </div>
                    ) : (
                      <div style={{ color: "#757575", fontSize: "0.8rem" }}>
                        2020
                      </div>
                    )}
                  </div>
                  <div style={{ flexBasis: "40%" }}>
                    <WaffleChart
                      size="large"
                      data={genderData}
                      colors={genderColors}
                      labels={genderLabels}
                      margin="0 10px 20px 10px"
                      censusSplit={genderCensusSplit}
                    />
                  </div>
                  <div style={{ flexBasis: "40%" }}>
                    <WaffleChart
                      size="large"
                      data={raceData}
                      colors={raceColors}
                      labels={raceLabels}
                      margin="0 10px 20px 10px"
                      censusSplit={raceCensusSplit}
                      small={true}
                    />
                  </div>
                </div>
              </>
            )
          })}
        </div>

        {/* <WafflesWithTitles margin="4rem 0 4rem 0">
          <WaffleRow>
            {publications.map(publication => (
              <WaffleRowItem flexBasis="20%">
                <WafflePublicationTitle>
                  {publication.long}
                </WafflePublicationTitle>
              </WaffleRowItem>
            ))}
          </WaffleRow>

          <h3>GENDER</h3>
          <Line />

          <WaffleRow>
            {publications.map(publication => {
              const allData = _.first(
                raceGenderBreakdown.filter(
                  d =>
                    d.decade === "2020" && d.publication === publication.short
                )
              )
              const genderData = allData.genderBreakdown

              return (
                <WaffleRowItem flexBasis="20%">
                  <WaffleChart
                    size="medium"
                    data={genderData}
                    colors={genderColors}
                    labels={genderLabels}
                    margin="0 10px 20px 10px"
                    censusSplit={_.ceil(
                      usCensusData.filter(d => d.decade === "2020")[0].women
                    )}
                  />
                </WaffleRowItem>
              )
            })}
          </WaffleRow>

          <h3>RACE {"&"} ETHNICITY</h3>
          <Line />

          <WaffleRow>
            {publications.map(publication => {
              const allData = _.first(
                raceGenderBreakdown.filter(
                  d =>
                    d.decade === "2020" && d.publication === publication.short
                )
              )
              const raceData = allData.raceBreakdown

              return (
                <WaffleRowItem flexBasis="20%">
                  <WaffleChart
                    size="medium"
                    data={raceData}
                    colors={raceColors}
                    labels={raceLabels}
                    margin="0 10px 20px 10px"
                    censusSplit={_.ceil(
                      usCensusData.filter(d => d.decade === "2020")[0].minority
                    )}
                    small={true}
                  />
                </WaffleRowItem>
              )
            })}
          </WaffleRow>
          <ChartNote>URM = under-represented minority</ChartNote>
        </WafflesWithTitles> */}

        {createHtmlForCopy(copy.introduceDeepDive)}
      </Section>
    </>
  )
}

export default SmallMultipleWaffles
