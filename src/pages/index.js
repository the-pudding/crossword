import React, { useState, useEffect } from "react"
import Header from "../components/story-sections/Header.jsx"
import Intro from "../components/story-sections/Intro.jsx"
import IntroPuzzle from "../components/story-sections/IntroPuzzle.jsx"
import SmallMultipleWaffles from "../components/story-sections/SmallMultipleWaffles.jsx"
import NamesInAnswers from "../components/story-sections/NamesInAnswers.jsx"
import NamesInClues from "../components/story-sections/NamesInClues.jsx"
import Conclusion from "../components/story-sections/Conclusion.jsx"
import Methods from "../components/story-sections/Methods.jsx"
import Meta from "../components/Meta.jsx"
import { GlobalStyle, EssayWrapper } from "../styles/styles.js"
import GlobalFonts from "../styles/fonts/fonts.js"
import "../styles/index.css"
import Logo from "../svg/pudding-logo.svg"
import { annotate, annotationGroup } from "rough-notation"
import COLORS from "../styles/colors.js"
import _ from "lodash"
import copy from "../data/copy.json"

function Home() {
  const [scrollLocation, setScrollLocation] = useState(null)

  // Adding RoughNotations to html elements from copy
  useEffect(() => {
    const underlinedElements = _.range(1, parseInt(copy.numUnderlines) + 1).map(
      n =>
        annotate(document.querySelector(`#underline-${n}`), {
          type: "underline",
          color: COLORS.pencilGrey,
          animate: false,
        })
    )
    const ag = annotationGroup(underlinedElements)
    ag.show()
  }, [])

  return (
    <>
      <Meta />
      <GlobalStyle />
      <GlobalFonts />

      <EssayWrapper>
        <div>
          <Logo style={{ width: "150px", marginTop: "25px" }} />
        </div>

        <Header />
        <Intro />
        <IntroPuzzle scrollLocation={scrollLocation} />

        <SmallMultipleWaffles setScrollLocation={setScrollLocation} />

        <NamesInAnswers />
        <NamesInClues />

        <Conclusion />
        <Methods />
      </EssayWrapper>
    </>
  )
}

export default Home
