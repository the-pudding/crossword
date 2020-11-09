import React from "react"
import { Section, Callout } from "../../styles/styles.js"
import copy from "../../data/copy.json"
import { createHtmlForCopy } from "../utils.js"
import _ from "lodash"
import Edit from "../../svg/mdi-edit.svg"

const Conclusion = () => {
  return (
    <Section>
      {createHtmlForCopy(copy.conclusion)}
      <Callout
        href="https://pudding.cool/2020/11/crossword-puzzles"
        target="_blank"
      >
        <Edit />
        <strong style={{ marginLeft: "10px" }}>
          Cool article. Now take me to the puzzles.
        </strong>
      </Callout>
    </Section>
  )
}

export default Conclusion
