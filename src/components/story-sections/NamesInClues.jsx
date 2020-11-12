import React from "react"
import copy from "../../data/copy.json"
import { Section, Callout } from "../../styles/styles.js"
import { createHtmlForCopy } from "../utils.js"
import popularClueNames from "../../data/topPeopleNytCluesOnly.json"
import PopularNamesTable from "../charts/table/PopularNamesTable.jsx"
import { RoughNotation } from "react-rough-notation"
import AboveBelow from "../charts/above-below/AboveBelow.jsx"
import poemWithNeutral from "../../data/POEM-including-neutral.json"
import poem from "../../data/POEM.json"
import chessWithNeutral from "../../data/CHESS-including-neutral.json"
import chess from "../../data/CHESS.json"
import mitWithNeutral from "../../data/MIT-including-neutral.json"
import mit from "../../data/MIT.json"
import Edit from "../../svg/mdi-edit.svg"
import COLORS from "../../styles/colors.js"

const NamesInClues = () => {
  return (
    <Section>
      <h1 style={{ fontSize: "2.5rem" }}>3. Redefining “common knowledge”</h1>

      {createHtmlForCopy(copy.deepDivePart2Intro)}

      <PopularNamesTable
        data={popularClueNames}
        featuredColumn="randomClue"
        columnTitle="Sample clue"
      />

      {createHtmlForCopy(copy.deepDivePart2)}

      <AboveBelow
        data={poem}
        overviewData={poemWithNeutral}
        word="poem"
        compare="race"
      />
      <AboveBelow
        data={mit}
        overviewData={mitWithNeutral}
        word="mit"
        compare="gender"
      />
      {/* <AboveBelow
        data={chess}
        overviewData={chessWithNeutral}
        word="chess"
        compare="race"
      /> */}
    </Section>
  )
}

export default NamesInClues
