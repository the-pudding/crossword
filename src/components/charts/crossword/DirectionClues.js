// ADAPTED FROM @jaredreisinger/react-crossword

import React from "react"
import PropTypes from "prop-types"
import { Line } from "../../../styles/styles.js"
import _ from "lodash"
// import styled from 'styled-components';

import Clue from "./Clue"

export default function DirectionClues({ direction, clues, clueIndex }) {
  return (
    <div className="direction">
      {/* use something other than h3? */}
      <div className="header">
        <strong>{direction.toUpperCase()}</strong>
      </div>
      <Line color={"#efefef"} />
      {clues.map(({ number, clue, correct }) => {
        const displayClue = clue.split("|").map(d => _.trim(d))[clueIndex]

        return (
          <Clue
            key={number}
            direction={direction}
            number={number}
            correct={correct}
          >
            {displayClue}
          </Clue>
        )
      })}
    </div>
  )
}

DirectionClues.propTypes = {
  /** direction of this list of clues ("across" or "down") */
  direction: PropTypes.string.isRequired,
  /** clues for this List's direction */
  clues: PropTypes.arrayOf(
    PropTypes.shape({
      /** number of the clue (the label shown) */
      number: PropTypes.string.isRequired,
      /** clue text */
      clue: PropTypes.node.isRequired,
      /** whether the answer/guess is correct */
      correct: PropTypes.bool,
    })
  ).isRequired,
}

DirectionClues.defaultProps = {}
