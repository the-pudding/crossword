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
import COLORS from "../styles/colors.js"

const ClueExamples = ({ clues }) => {
  return (
    <ClueExamplesWrapper>
      {clues.map((d, i) => {
        const { explanation, clue, answer } = d
        return (
          <ClueExample
            i={i}
            clueText={clue}
            answerText={answer}
            explanation={explanation}
          />
        )
      })}
    </ClueExamplesWrapper>
  )
}

const ClueExample = ({ i, clueText, answerText, explanation }) => {
  const [showAnnotations, setShowAnnotations] = useState(false)

  return (
    <RoughNotation
      type="bracket"
      show={showAnnotations}
      animate={true}
      color={COLORS.pencilGrey}
      brackets={i % 2 === 0 ? "left" : "right"}
    >
      <div style={{ display: "flex" }}>
        <ClueAnswerPair>
          <div style={{ fontStyle: "italic" }}>{clueText}</div>
          <div style={{ display: "flex" }}>
            {answerText.split("").map(character => (
              <AnswerBox>{character}</AnswerBox>
            ))}
          </div>
          {showAnnotations && (
            <WrittenNote left={i % 2 === 0}>This is a written note</WrittenNote>
          )}
          {explanation && (
            <div style={{ fontSize: "0.8rem", color: COLORS.darkGrey }}>
              {explanation}
            </div>
          )}
        </ClueAnswerPair>
      </div>
    </RoughNotation>
  )
}

export default ClueExamples
