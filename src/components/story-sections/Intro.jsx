import React from "react"
import {
  Section,
  AnswerBox,
  AnswerCaption,
  IntroCluesExample,
  ClueExample,
} from "../../styles/styles.js"
import { createHtmlForCopy } from "../utils.js"
import copy from "../../data/copy.json"
import { RoughNotation } from "react-rough-notation"
import COLORS from "../../styles/colors.js"

const Intro = () => {
  return (
    <>
      <Section>{createHtmlForCopy(copy.introProse)}</Section>

      <IntroCluesExample>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ClueExample>
            A 1969 hit for{" "}
            <RoughNotation
              type="box"
              show={true}
              animate={false}
              color={COLORS.pencilGrey}
            >
              <strong>Neil Diamond</strong>
            </RoughNotation>
          </ClueExample>
          <div style={{ display: "flex" }}>
            {"SWEETCAROLINE".split("").map(character => (
              <AnswerBox>{character}</AnswerBox>
            ))}
          </div>
          <AnswerCaption>
            A person in the <strong>clue</strong>
          </AnswerCaption>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ClueExample>
            Funny <strong>FEY</strong>
          </ClueExample>
          <div>
            <RoughNotation
              type="box"
              show={true}
              animate={false}
              color={COLORS.pencilGrey}
            >
              <div style={{ display: "flex" }}>
                {"TINA".split("").map(character => (
                  <AnswerBox style={{ fontFamily: "'National 2 Web Bold'" }}>
                    {character}
                  </AnswerBox>
                ))}
              </div>
            </RoughNotation>
          </div>
          <AnswerCaption>
            A person in the <strong>answer</strong>
          </AnswerCaption>
        </div>
      </IntroCluesExample>
    </>
  )
}

export default Intro
