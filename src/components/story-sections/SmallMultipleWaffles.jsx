import React, { useState, useEffect, useRef } from "react"
import WaffleChart from "../charts/waffle/WaffleChart.jsx"
import raceGenderBreakdown from "../../data/raceGenderBreakdownByDecade.json"
import copy from "../../data/copy.json"
import { createHtmlForCopy } from "../utils.js"
import usCensusData from "../../data/usCensusData.json"
import _ from "lodash"
import {
  Section,
  Line,
  WaffleRow,
  WaffleYearLabel,
  PublicationTitle,
  WaffleSections,
  TitleSection,
  WaffleYearSelect,
  GroupHeading,
  GroupHeadingWrapper,
  FakePubTitle,
  ChartNote,
} from "../../styles/styles.js"
import COLORS from "../../styles/colors.js"

const SmallMultipleWaffles = ({ setScrollLocation }) => {
  const [decade, setDecade] = useState(2020)

  const scrollToRef = useRef(null)

  // On first render, pass back up the location for the button that scrolls the user here
  useEffect(() => {
    const location = {
      top: scrollToRef.current.getBoundingClientRect().top + window.pageYOffset,
      left:
        scrollToRef.current.getBoundingClientRect().left + window.pageXOffset,
    }
    setScrollLocation(location)
  }, [])

  const publications = [
    { short: "wsj", long: "WSJ" },
    { short: "lat", long: "LA Times" },
    { short: "nyt", long: "NY Times" },
    { short: "up", long: "Universal" },
    { short: "usa", long: "USA Today" },
  ]
  const genderColors = [COLORS.man, COLORS.woman]
  const raceColors = [COLORS.white, COLORS.poc]
  const genderLabels = ["men", "women"]
  const raceLabels = ["non-Hispanic white", "underrepresented minorities"]

  return (
    <>
      <Section ref={scrollToRef}>
        <h2 style={{ textAlign: "center" }}>
          Representation in Major Crosswords
        </h2>
        <ChartNote>
          Note:{" "}
          <span style={{ borderBottom: `4px solid ${COLORS.yellow}` }}>
            The yellow line
          </span>{" "}
          marks the split of the US population according to the Census.
        </ChartNote>

        <div style={{ width: "100%", display: "flex" }}>
          <FakePubTitle />
          <GroupHeadingWrapper>
            <GroupHeading>Gender</GroupHeading>
          </GroupHeadingWrapper>
          <GroupHeadingWrapper>
            <GroupHeading>Race {"&"} Ethnicity</GroupHeading>
          </GroupHeadingWrapper>
        </div>

        <div style={{ width: "100%", marginBottom: "50px" }}>
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
                    )[0].women
                  )
                : _.ceil(usCensusData.filter(d => d.decade === "2020")[0].women)
            const raceCensusSplit =
              publication.short === "nyt"
                ? _.ceil(
                    usCensusData.filter(d =>
                      d.decade.includes(decade.toString())
                    )[0].minority
                  )
                : _.ceil(
                    usCensusData.filter(d => d.decade === "2020")[0].minority
                  )

            return (
              <>
                <Line marginBottom="20px" />
                <WaffleRow>
                  <TitleSection>
                    <PublicationTitle
                      style={
                        publication.short === "nyt"
                          ? { marginBottom: "0" }
                          : null
                      }
                    >
                      {publication.long}
                    </PublicationTitle>

                    {publication.short === "nyt" ? (
                      <div>
                        <WaffleYearLabel
                          style={{
                            padding: "10px 20px 10px 0",
                          }}
                        >
                          <WaffleYearSelect
                            name="year-select"
                            id="year-select"
                            value={decade}
                            onChange={e => setDecade(e.target.value)}
                          >
                            {_.range(1940, 2030, 10).map((d, i) => (
                              <option value={d} key={i}>
                                {d}
                              </option>
                            ))}
                          </WaffleYearSelect>
                          Use the dropdown to see data from every decade since
                          1940.
                        </WaffleYearLabel>
                      </div>
                    ) : (
                      <WaffleYearLabel>2020</WaffleYearLabel>
                    )}
                  </TitleSection>
                  <WaffleSections>
                    <div style={{ width: "50%" }}>
                      <WaffleChart
                        size="large"
                        data={genderData}
                        colors={genderColors}
                        labels={genderLabels}
                        censusSplit={genderCensusSplit}
                        showCensusSplitLabel={publication.short === "wsj"}
                        circlePercentage={publication.short === "usa"}
                      />
                    </div>
                    <div style={{ width: "50%" }}>
                      <WaffleChart
                        size="large"
                        data={raceData}
                        colors={raceColors}
                        labels={raceLabels}
                        censusSplit={raceCensusSplit}
                        small={true}
                        showCensusSplitLabel={publication.short === "wsj"}
                        circlePercentage={publication.short === "usa"}
                      />
                    </div>
                  </WaffleSections>
                </WaffleRow>
              </>
            )
          })}
        </div>
        {createHtmlForCopy(copy.introduceDeepDive)}
      </Section>
    </>
  )
}

export default SmallMultipleWaffles
