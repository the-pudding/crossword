import React, { useState, useEffect } from "react"
import copy from "../../data/copy.json"
import _ from "lodash"
import {
  Section,
  Line,
  LinedTitle,
  WafflesWithTitles,
  Column,
} from "../../styles/styles.js"
import WaffleChart from "../charts/waffle/WaffleChart.jsx"
import raceGenderBreakdown from "../../data/raceGenderBreakdownByDecade.json"
import usCensusData from "../../data/usCensusData.json"
import COLORS from "../../styles/colors.js"
import { createHtmlForCopy } from "../utils.js"
import DecadeSlider from "../charts/slider/DecadeSlider.jsx"

const NytLongView = () => {
  const [decade, setDecade] = useState(1940)

  useEffect(() => {
    const interval = setInterval(() => {
      setDecade(decade => {
        if (decade === 2010) setDecade(1940)
        else setDecade(decade + 10)
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [])

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
          <LinedTitle top="1.5rem">
            <h3>GENDER</h3>
            <Line />
          </LinedTitle>
          <LinedTitle top="50%">
            <h3>RACE {"&"} ETHNICITY</h3>
            <Line />
          </LinedTitle>

          <Column>
            <h2>{decade}s</h2>
            <WaffleChart
              data={genderData}
              colors={genderColors}
              labels={genderLabels}
              margin="50px"
              censusSplit={_.ceil(
                usCensusData.filter(d =>
                  d.decade.includes(decade.toString())
                )[0].women
              )}
            />
            <WaffleChart
              data={raceData}
              colors={raceColors}
              labels={raceLabels}
              margin="50px"
              censusSplit={_.ceil(
                usCensusData.filter(d =>
                  d.decade.includes(decade.toString())
                )[0].minority
              )}
            />
          </Column>
          <Column>
            <h2>2020</h2>
            <WaffleChart
              data={gender2020Data}
              colors={genderColors}
              labels={genderLabels}
              margin="50px"
              censusSplit={_.ceil(
                usCensusData.filter(d => d.decade === "2020")[0].women
              )}
            />
            <WaffleChart
              data={race2020Data}
              colors={raceColors}
              labels={raceLabels}
              margin="50px"
              censusSplit={_.ceil(
                usCensusData.filter(d => d.decade === "2020")[0].minority
              )}
            />
          </Column>
        </WafflesWithTitles>
      </Section>
    </>
  )
}

export default NytLongView
