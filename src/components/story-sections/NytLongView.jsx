import React, { useState } from "react"
import copy from "../../data/copy.json"
import _ from "lodash"
import { Prose, Section, TitledWaffle } from "../../styles/styles.js"
import WaffleChart from "../charts/WaffleChart.jsx"
import { Slider } from "antd"
import raceGenderBreakdown from "../../data/raceGenderBreakdownByDecade.json"
import topPeopleNyt from "../../data/topPeopleNyt.json"
import { COLORS } from "../../styles/colors.js"

const NytLongView = () => {
  const [decade, setDecade] = useState(1940)

  const sliderMarks = {
    1940: "1940s",
    1950: "1950s",
    1960: "1960s",
    1970: "1970s",
    1980: "1980s",
    1990: "1990s",
    2000: "2000s",
    2010: "2010s",
    2020: "2020",
  }
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
      <Section>
        <div>
          {typeof window !== "undefined" ? (
            <Slider
              marks={sliderMarks}
              min={1940}
              max={2020}
              step={10}
              defaultValue={1940}
              style={{ width: "500px" }}
              tooltipVisible={false}
              value={decade}
              onChange={value => setDecade(value)}
            />
          ) : null}
        </div>

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
