import React from "react"
import IntroPuzzle from "../components/story-sections/IntroPuzzle.jsx"
import WhyThisMatters from "../components/story-sections/WhyThisMatters.jsx"
import SmallMultipleWaffles from "../components/story-sections/SmallMultipleWaffles.jsx"
import UsaTodayDeepDive from "../components/story-sections/UsaTodayDeepDive.jsx"
import NytLongView from "../components/story-sections/NytLongView.jsx"
import { GlobalStyle, EssayWrapper } from "../styles/styles.js"
import copy from "../data/copy.json"
import "./index.css"

function Home() {
  return (
    <EssayWrapper>
      <GlobalStyle />
      <div style={{ marginTop: "50px" }}>
        <h1>{copy.title}</h1>
        <div>By Michelle McGhee and Russell Goldenberg</div>
      </div>

      <IntroPuzzle />
      <NytLongView />
      <WhyThisMatters />
      <SmallMultipleWaffles />
      <UsaTodayDeepDive />
    </EssayWrapper>
  )
}

export default Home
