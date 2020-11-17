import React from "react"
import { Section, Callout, EditSvg } from "../../styles/styles.js"
import copy from "../../data/copy.json"
import { createHtmlForCopy } from "../utils.js"
import _ from "lodash"

const Conclusion = () => {
  return (
    <Section style={{ marginTop: 0 }}>
      {createHtmlForCopy(copy.conclusion)}

      <Callout
        href="https://pudding.cool/2020/11/crossword-puzzles"
        style={{ marginTop: "2rem" }}
      >
        <EditSvg />
        <div style={{ marginLeft: "10px" }}>
          <strong style={{ marginRight: "0.3rem" }}>
            Want some more puzzles?
          </strong>
          Check out the others we've generated with our data.
        </div>
      </Callout>
    </Section>
  )
}

export default Conclusion
