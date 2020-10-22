import React, { useState } from "react"
import WaffleChart from "../charts/waffle/WaffleChart.jsx"
import raceGenderBreakdown from "../../data/raceGenderBreakdownByDecade.json"
import copy from "../../data/copy.json"
import { createHtmlForCopy } from "../utils.js"
import _ from "lodash"
import {
  WaffleMultiplesWrapper,
  TitledWaffle,
  Section,
} from "../../styles/styles.js"
import { COLORS } from "../../styles/colors.js"

const SmallMultipleWaffles = () => {
  const [metric, setMetric] = useState("gender")
  return (
    <>
      <Section>{createHtmlForCopy(copy.introduceWaffles)}</Section>

      <Section>
        <div>
          <button onClick={() => setMetric("race")}>Race</button>
          <button onClick={() => setMetric("gender")}>Gender</button>
        </div>
        <WaffleMultiplesWrapper>
          <PublicationWaffle
            shortPublicationName="usa"
            decade="2020"
            title="USA Today"
            metric={metric}
          />
          <PublicationWaffle
            shortPublicationName="up"
            decade="2020"
            title="Universal"
            metric={metric}
          />
          <PublicationWaffle
            shortPublicationName="nyt"
            decade="2020"
            title="NY Times"
            metric={metric}
          />
          <PublicationWaffle
            shortPublicationName="lat"
            decade="2020"
            title="LA Times"
            metric={metric}
          />
          <PublicationWaffle
            shortPublicationName="wsj"
            decade="2020"
            title="WSJ"
            metric={metric}
          />
        </WaffleMultiplesWrapper>
      </Section>
    </>
  )
}

const PublicationWaffle = ({ shortPublicationName, decade, title, metric }) => {
  const allData = _.first(
    raceGenderBreakdown.filter(
      d => d.decade === decade && d.publication === shortPublicationName
    )
  )
  const data = allData[`${metric}Breakdown`]
  const colors =
    metric === "gender"
      ? [COLORS.woman, COLORS.man]
      : [COLORS.poc, COLORS.white]
  const labels =
    metric === "gender" ? ["women", "men"] : ["minority", "non-hispanic white"]

  return (
    <TitledWaffle>
      <WaffleChart title={title} data={data} colors={colors} labels={labels} />
    </TitledWaffle>
  )
}

export default SmallMultipleWaffles
