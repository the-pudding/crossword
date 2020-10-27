import React, { useState, useEffect } from "react"
import copy from "../../data/copy.json"
import _ from "lodash"
import {
  Section,
  Line,
  LinedTitle,
  WafflesWithTitles,
  Column,
  WaffleRow,
  WaffleRowItem,
} from "../../styles/styles.js"
import WaffleChart from "../charts/waffle/WaffleChart.jsx"
import raceGenderBreakdown from "../../data/raceGenderBreakdownByDecade.json"
import usCensusData from "../../data/usCensusData.json"
import COLORS from "../../styles/colors.js"
import { createHtmlForCopy } from "../utils.js"
import DecadeSlider from "../charts/slider/DecadeSlider.jsx"

const NytLongView = () => {
  const [decade, setDecade] = useState(1940)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setDecade(decade => {
  //       if (decade === 2010) setDecade(1940)
  //       else setDecade(decade + 10)
  //     })
  //   }, 2000)
  //   return () => clearInterval(interval)
  // }, [])

  const allData = _.first(
    raceGenderBreakdown.filter(d => {
      if (decade !== 2020) return d.decade === `${decade}s`

      return d.decade === decade.toString() && d.publication === "nyt"
    })
  )
  const raceData = allData.raceBreakdown
  const genderData = allData.genderBreakdown
  const raceColors = [COLORS.poc, COLORS.white]
  const genderColors = [COLORS.woman, COLORS.man]
  const raceLabels = ["under-represented minorities", "non-Hispanic white"]
  const genderLabels = ["women", "men"]

  const race2020Data = raceGenderBreakdown.filter(d => d.decade === "2020")[0]
    .raceBreakdown
  const gender2020Data = raceGenderBreakdown.filter(d => d.decade === "2020")[0]
    .genderBreakdown

  return (
    <>
      <Section>
        {createHtmlForCopy(copy.nytLongView)}

        <DecadeSlider decade={decade} setDecade={setDecade} />

        <WafflesWithTitles>
          <WaffleRow>
            <WaffleRowItem flexBasis="50%">
              <h2>{decade}s</h2>
            </WaffleRowItem>
            <WaffleRowItem flexBasis="50%">
              <h2>2020</h2>
            </WaffleRowItem>
          </WaffleRow>

          <h3>GENDER</h3>
          <Line />

          <WaffleRow>
            <WaffleRowItem flexBasis="50%">
              <WaffleChart
                data={genderData}
                size="large"
                colors={genderColors}
                labels={genderLabels}
                margin="10px 0px 10px 0px"
                censusSplit={_.ceil(
                  usCensusData.filter(d =>
                    d.decade.includes(decade.toString())
                  )[0].women
                )}
              />
            </WaffleRowItem>
            <WaffleRowItem flexBasis="50%">
              <WaffleChart
                data={gender2020Data}
                size="large"
                colors={genderColors}
                labels={genderLabels}
                margin="10px 0px 10px 0px"
                censusSplit={_.ceil(
                  usCensusData.filter(d => d.decade === "2020")[0].women
                )}
              />
            </WaffleRowItem>
          </WaffleRow>

          <h3>RACE {"&"} ETHNICITY</h3>
          <Line />

          <WaffleRow>
            <WaffleRowItem flexBasis="50%">
              <WaffleChart
                data={raceData}
                size="large"
                colors={raceColors}
                labels={raceLabels}
                margin="10px 0px 10px 0px"
                censusSplit={_.ceil(
                  usCensusData.filter(d =>
                    d.decade.includes(decade.toString())
                  )[0].minority
                )}
              />
            </WaffleRowItem>
            <WaffleRowItem flexBasis="50%">
              <WaffleChart
                data={race2020Data}
                size="large"
                colors={raceColors}
                labels={raceLabels}
                margin="10px 0px 10px 0px"
                censusSplit={_.ceil(
                  usCensusData.filter(d => d.decade === "2020")[0].minority
                )}
              />
            </WaffleRowItem>
          </WaffleRow>
        </WafflesWithTitles>
      </Section>
    </>
  )
}

export default NytLongView
