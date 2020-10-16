import React, { useState, useEffect } from "react"
import copy from "../../data/copy.json"
import _ from "lodash"
import { Prose, Section, TitledWaffle } from "../../styles/styles.js"
import WaffleChart from "../charts/WaffleChart.jsx"
import { Slider } from "antd"
import raceGenderBreakdown from "../../data/raceGenderBreakdownByDecade.json"
import topPeopleNyt from "../../data/topPeopleNyt.json"
import { COLORS } from "../../styles/colors.js"
import { createHtmlForCopy } from "../utils.js"
import DecadeSlider from "../charts/chart-elements/DecadeSlider.jsx"

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
  const genderColors = [COLORS.nonbinary, COLORS.woman, COLORS.man]
  const raceLabels = ["minority", "non-hispanic white"]
  const genderLabels = ["non-binary", "women", "men"]

  return (
    <>
      <Section>{createHtmlForCopy(copy.nytLongView)}</Section>
      <Section>
        <DecadeSlider decade={decade} setDecade={setDecade} />

        <div style={{ display: "flex", marginTop: "40px" }}>
          <TitledWaffle>
            <WaffleChart
              title={"Race"}
              data={raceData}
              colors={raceColors}
              labels={raceLabels}
            />
          </TitledWaffle>
          <TitledWaffle>
            <WaffleChart
              title={"Gender"}
              data={genderData}
              colors={genderColors}
              labels={genderLabels}
            />
          </TitledWaffle>
        </div>
      </Section>
    </>
  )
}

export default NytLongView
