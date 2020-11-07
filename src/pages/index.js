import React, { useEffect } from "react"
import Header from "../components/story-sections/Header.jsx"
import Intro from "../components/story-sections/Intro.jsx"
import IntroPuzzle from "../components/story-sections/IntroPuzzle.jsx"
import SmallMultipleWaffles from "../components/story-sections/SmallMultipleWaffles.jsx"
import NamesInAnswers from "../components/story-sections/NamesInAnswers.jsx"
import NamesInClues from "../components/story-sections/NamesInClues.jsx"
import Methods from "../components/story-sections/Methods.jsx"
import Meta from "../components/Meta.jsx"
import { GlobalStyle, EssayWrapper } from "../styles/styles.js"
import GlobalFonts from "../styles/fonts/fonts.js"
import "../styles/index.css"
import Logo from "../svg/pudding-logo.svg"
import { annotate, annotationGroup } from "rough-notation"
import COLORS from "../styles/colors.js"
import _ from "lodash"

function Home() {
  // Adding RoughNotations to html elements from copy
  useEffect(() => {
    const numUnderlines = 5
    const underlinedElements = _.range(1, numUnderlines + 1).map(n =>
      annotate(document.querySelector(`#underline-${n}`), {
        type: "underline",
        color: COLORS.grey,
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
        <IntroPuzzle />

        <SmallMultipleWaffles />

        <NamesInAnswers />
        <NamesInClues />

        <Methods />
      </EssayWrapper>
    </>
  )
}

export default Home
