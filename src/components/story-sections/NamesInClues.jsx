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

const NamesInClues = () => {
  return (
    <Section>
      <h1>
        3. Names in{" "}
        <RoughNotation
          type="underline"
          show={true}
          animate={false}
          color="lightgrey"
        >
          <span>clues</span>
        </RoughNotation>
      </h1>
      <PopularNamesTable
        data={popularClueNames}
        featuredColumn="randomClue"
        columnTitle="Random clue"
      />

      {createHtmlForCopy(copy.deepDivePart2)}

      <AboveBelow
        data={poem}
        overviewData={poemWithNeutral}
        word="poem"
        compare="race"
      />
      {/* <AboveBelow
        data={chess}
        overviewData={chessWithNeutral}
        word="chess"
        compare="race"
      /> */}
      <AboveBelow
        data={mit}
        overviewData={mitWithNeutral}
        word="mit"
        compare="gender"
      />

      <Callout>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginRight: "10px" }}
        >
          <path
            d="M3 17.2501V21.0001H6.75L17.81 9.94006L14.06 6.19006L3 17.2501ZM20.71 7.04006C21.1 6.65006 21.1 6.02006 20.71 5.63006L18.37 3.29006C17.98 2.90006 17.35 2.90006 16.96 3.29006L15.13 5.12006L18.88 8.87006L20.71 7.04006Z"
            fill="black"
          />
        </svg>
        <strong>Cool article. Now take me to the puzzles.</strong>
      </Callout>
    </Section>
  )
}

export default NamesInClues
