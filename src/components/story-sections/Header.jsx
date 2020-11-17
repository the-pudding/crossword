import React from "react"
import { RoughNotation } from "react-rough-notation"
import { Section } from "../../styles/styles.js"
import COLORS from "../../styles/colors.js"

const Header = () => {
  return (
    <Section>
      <h1>
        1.
        <RoughNotation
          type="circle"
          show={true}
          animate={true}
          color={COLORS.pencilGrey}
        >
          {" "}
          Who’s{" "}
        </RoughNotation>
        in the Crossword?
      </h1>
      <div>
        By{" "}
        <a href="https://pudding.cool/author/michelle-mcghee">
          <strong>Michelle McGhee</strong>
        </a>
      </div>
      <div style={{ fontSize: "0.8rem", color: COLORS.darkGrey }}>
        with{" "}
        <a href="https://pudding.cool/author/russell-goldenberg/">
          <strong>Russell Goldenberg</strong>
        </a>{" "}
        and{" "}
        <a href="https://pudding.cool/author/jan-diehm/">
          <strong>Jan Diehm</strong>
        </a>
      </div>
    </Section>
  )
}

export default Header
