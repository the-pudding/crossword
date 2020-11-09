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
        in the crossword?
      </h1>
      <div>
        By{" "}
        <a href="https://pudding.cool/author/michelle-mcghee" target="_blank">
          <strong>Michelle McGhee</strong>
        </a>
      </div>
      <div style={{ fontSize: "0.8rem", color: COLORS.darkGrey }}>
        with{" "}
        <a
          href="https://pudding.cool/author/russell-goldenberg/"
          target="_blank"
        >
          <strong>Russell Goldenberg</strong>
        </a>{" "}
        and{" "}
        <a href="https://pudding.cool/author/jan-diehm/" target="_blank">
          <strong>Jan Diehm</strong>
        </a>
      </div>
    </Section>
  )
}

export default Header
