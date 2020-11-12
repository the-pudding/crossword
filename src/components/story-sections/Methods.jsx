import React from "react"
import { Section, Prose } from "../../styles/styles.js"
import copy from "../../data/copy.json"
import { createHtmlForCopy } from "../utils.js"
import _ from "lodash"

const Methods = () => {
  return (
    <Section id="method">
      <Prose margin="0">
        <h3 style={{ fontSize: "1rem" }}>Methods</h3>
      </Prose>
      {createHtmlForCopy(copy.methodology)}

      {/* <h2 style={{ margin: "0.8rem 0" }}>❤️</h2> */}
      <div style={{ marginTop: "2rem" }}>{createHtmlForCopy(copy.thanks)}</div>
    </Section>
  )
}

export default Methods
