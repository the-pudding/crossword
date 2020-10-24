import React from "react"
import Header from "../components/story-sections/Header.jsx"
import IntroPuzzle from "../components/story-sections/IntroPuzzle.jsx"
import WhyThisMatters from "../components/story-sections/WhyThisMatters.jsx"
import SmallMultipleWaffles from "../components/story-sections/SmallMultipleWaffles.jsx"
import NamesInAnswers from "../components/story-sections/NamesInAnswers.jsx"
import NamesInClues from "../components/story-sections/NamesInClues.jsx"
import NytLongView from "../components/story-sections/NytLongView.jsx"
import { GlobalStyle, EssayWrapper } from "../styles/styles.js"
import GlobalFonts from "../styles/fonts/fonts.js"
import "../styles/index.css"

function Home() {
  return (
    <>
      <GlobalStyle />
      <GlobalFonts />

      <EssayWrapper>
        <Header />

        <IntroPuzzle />
        <NytLongView />
        <WhyThisMatters />
        <SmallMultipleWaffles />
        <NamesInAnswers />
        <NamesInClues />
      </EssayWrapper>
    </>
  )
}

export default Home
