import React from "react"
import { Section, AnswerBox } from "../../styles/styles.js"
import { createHtmlForCopy } from "../utils.js"
import copy from "../../data/copy.json"
import { RoughNotation } from "react-rough-notation"

const Intro = () => {
  return (
    <>
      <Section>{createHtmlForCopy(copy.introProse)}</Section>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          maxWidth: "620px",
          margin: "1rem auto",
          padding: "0 1rem",
        }}
      >
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
          <div
            style={{ color: "#757575", marginTop: "20px", fontSize: "0.9rem" }}
          >
            A person in the <strong>clue</strong>
          </div>
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
          <div
            style={{ color: "#757575", marginTop: "20px", fontSize: "0.9rem" }}
          >
            A person in the <strong>answer</strong>
          </div>
        </div>
      </div>
    </>
  )
}

export default Intro
