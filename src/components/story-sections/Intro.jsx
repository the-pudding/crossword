import React from "react"
import {
  Section,
  AnswerBox,
  AnswerCaption,
  IntroCluesExample,
} from "../../styles/styles.js"
import { createHtmlForCopy } from "../utils.js"
import copy from "../../data/copy.json"
import { RoughNotation } from "react-rough-notation"

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
          <div style={{ marginBottom: "10px" }}>
            A 1969 hit for{" "}
            <RoughNotation
              type="box"
              show={true}
              animate={false}
              color="lightgrey"
            >
              Neil Diamond
            </RoughNotation>
          </div>
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
          <div style={{ marginBottom: "10px" }}>Funny Fey</div>
          <div>
            <RoughNotation
              type="box"
              show={true}
              animate={false}
              color="lightgrey"
            >
              <div style={{ display: "flex" }}>
                {"TINA".split("").map(character => (
                  <AnswerBox>{character}</AnswerBox>
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
