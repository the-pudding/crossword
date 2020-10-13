import React from "react"
import IntroPuzzle from "../components/story-sections/IntroPuzzle.jsx"
import Intro from "../components/story-sections/Intro.jsx"
import SmallMultipleWaffles from "../components/story-sections/SmallMultipleWaffles.jsx"
import UsaTodayDeepDive from "../components/story-sections/UsaTodayDeepDive.jsx"
import NytLongView from "../components/story-sections/NytLongView.jsx"
import { EssayWrapper } from "../styles/styles.js"
import copy from "../data/copy.json"
import "./index.css"

function Home() {
  return (
    <EssayWrapper>
      <div style={{ marginTop: "50px" }}>
        <h1>{copy.title}</h1>
        <div>By Michelle McGhee and Russell Goldenberg</div>
      </div>

      <IntroPuzzle />
      <Intro />
      <NytLongView />
      <SmallMultipleWaffles />
      <UsaTodayDeepDive />
    </EssayWrapper>
  )
}

export default Home
