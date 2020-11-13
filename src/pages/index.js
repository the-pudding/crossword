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
import { GlobalStyle, EssayWrapper, LogoWrapper } from "../styles/styles.js"
import "react-rangeslider/lib/index.css"
import Logo from "../svg/pudding-logo.svg"
import { annotate, annotationGroup } from "rough-notation"
import COLORS from "../styles/colors.js"
import _ from "lodash"
import { RoughNotation } from "react-rough-notation"
import copy from "../data/copy.json"

function Home() {
  const [scrollLocation, setScrollLocation] = useState(null)
  const [logoHovered, setLogoHovered] = useState(false)

  // Adding RoughNotations to html elements from copy
  useEffect(() => {
    const emphasizedElements = _.range(1, parseInt(copy.numBoxes) + 1).map(n =>
      annotate(document.querySelector(`#box-${n}`), {
        type: "box",
        color: COLORS.pencilGrey,
        animate: false,
        strokeWidth: 1,
        multiline: true,
      })
    )
    const ag = annotationGroup(emphasizedElements)
    ag.show()
  }, [])

  return (
    <>
      <Meta />
      <GlobalStyle />

      <EssayWrapper>
        <LogoWrapper
          href="https://pudding.cool/"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <RoughNotation
            type="underline"
            show={logoHovered}
            animate={true}
            color={COLORS.pencilGrey}
          >
            <Logo style={{ width: "150px" }} />
          </RoughNotation>
        </LogoWrapper>

        <Header />
        <Intro />
        <IntroPuzzle scrollLocation={scrollLocation} />

        <SmallMultipleWaffles setScrollLocation={setScrollLocation} />

        <NamesInAnswers />
        <NamesInClues />

        {/* <Conclusion /> */}
        <Methods />
      </EssayWrapper>
    </>
  )
}

export default Home
