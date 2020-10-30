import React from "react"
import { Section } from "../../styles/styles.js"
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
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
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
          <div>SWEETCAROLINE</div>
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
          <div>Funny Fey</div>
          <div>
            <RoughNotation
              type="box"
              show={true}
              animate={false}
              color="lightgrey"
            >
              TINA
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
