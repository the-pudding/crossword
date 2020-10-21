import React from "react"
import { RoughNotation } from "react-rough-notation"
import { HeaderWrapper } from "../../styles/styles.js"

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>
        1.
        <RoughNotation
          type="circle"
          show={true}
          animate={false}
          color="lightgrey"
        >
          {" "}
          <span>Who's</span>{" "}
        </RoughNotation>
        in the crossword?
      </h1>
      <div style={{ fontSize: "16px" }}>
        By <strong>Michelle McGhee</strong>
      </div>
      <div style={{ color: "grey" }}>
        with <strong>Russell Goldenberg</strong> and <strong>Jan Diehm</strong>
      </div>
    </HeaderWrapper>
  )
}

export default Header
