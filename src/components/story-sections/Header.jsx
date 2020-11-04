import React from "react"
import { RoughNotation } from "react-rough-notation"
import { Section, Prose } from "../../styles/styles.js"

const Header = () => {
  return (
    <Section>
      <h1>
        1.
        <RoughNotation
          type="circle"
          show={true}
          animate={true}
          color="lightgrey"
        >
          {" "}
          Who's{" "}
        </RoughNotation>
        in the crossword?
      </h1>
      <div>
        By <strong>Michelle McGhee</strong>
      </div>
      <div style={{ fontSize: "0.8rem", color: "grey" }}>
        with <strong>Russell Goldenberg</strong> and <strong>Jan Diehm</strong>
      </div>
    </Section>
  )
}

export default Header
