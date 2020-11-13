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

const ClueExamples = ({ clues, textColor }) => {
  return (
    <ClueExamplesWrapper textColor={textColor}>
      {clues.map((d, i) => {
        const { explanation, clue, answer } = d
        return (
          <ClueExample
            i={i}
            clueText={clue}
            answerText={answer}
            explanation={explanation}
            textColor={textColor}
          />
        )
      })}
    </ClueExamplesWrapper>
  )
}

const ClueExample = ({ i, clueText, answerText, explanation, textColor }) => {
  const [showAnnotations, setShowAnnotations] = useState(false)

  return (
    <div style={{ display: "flex" }}>
      <ClueAnswerPair textColor={textColor}>
        <div style={{ fontStyle: "italic" }}>{clueText}</div>
        <div style={{ display: "flex" }}>
          {answerText.split("").map(character => (
            <AnswerBox textColor={textColor}>{character}</AnswerBox>
          ))}
        </div>
        {explanation && (
          <div style={{ fontSize: "0.8rem", color: COLORS.darkGrey }}>
            {explanation}
          </div>
        )}
      </ClueAnswerPair>
    </div>
  )
}

export default ClueExamples
