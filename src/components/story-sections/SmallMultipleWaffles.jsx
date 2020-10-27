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
  const [metric, setMetric] = useState("gender")
  const publications = [
    { short: "usa", long: "USA Today" },
    { short: "up", long: "Universal" },
    { short: "nyt", long: "NYTimes" },
    { short: "lat", long: "LATimes" },
    { short: "wsj", long: "WSJ" },
  ]
  const genderColors = [COLORS.woman, COLORS.man]
  const raceColors = [COLORS.poc, COLORS.white]
  const genderLabels = ["women", "men"]
  const raceLabels = ["URM", "non-hispanic white"]

  return (
    <>
      <Section>
        {createHtmlForCopy(copy.introduceWaffles)}

        <WafflesWithTitles margin="4rem 0 4rem 0">
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
        </WafflesWithTitles>

        {createHtmlForCopy(copy.introduceDeepDive)}
      </Section>
    </>
  )
}

export default SmallMultipleWaffles
