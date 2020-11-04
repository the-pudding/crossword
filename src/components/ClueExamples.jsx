import React, { useState } from "react"
import {
  ClueExamplesWrapper,
  WrittenNote,
  ClueAnswerPair,
  AnswerBox,
  QuestionCircle,
} from "../styles/styles.js"
import { RoughNotation } from "react-rough-notation"
import _ from "lodash"

const ClueExamples = ({ clues }) => {
  return (
    <ClueExamplesWrapper>
      {clues.map((clue, i) => {
        const clueText = _.trim(clue.split("=")[0])
        const answerText = _.trim(clue.split("=")[1])
        return <ClueExample i={i} clueText={clueText} answerText={answerText} />
      })}
    </ClueExamplesWrapper>
  )
}

const ClueExample = ({ i, clueText, answerText }) => {
  const [showAnnotations, setShowAnnotations] = useState(false)

  return (
    <RoughNotation
      type="bracket"
      show={showAnnotations}
      animate={true}
      color="lightgrey"
      brackets={i % 2 === 0 ? "left" : "right"}
    >
      <div style={{ display: "flex" }}>
        <QuestionCircle onClick={() => setShowAnnotations(!showAnnotations)}>
          ?
        </QuestionCircle>

        <ClueAnswerPair>
          <div>{clueText}</div>
          <div style={{ display: "flex" }}>
            {answerText.split("").map(character => (
              <AnswerBox>{character}</AnswerBox>
            ))}
          </div>
          {showAnnotations && (
            <WrittenNote left={i % 2 === 0}>This is a written note</WrittenNote>
          )}
        </ClueAnswerPair>
      </div>
    </RoughNotation>
  )
}

export default ClueExamples
