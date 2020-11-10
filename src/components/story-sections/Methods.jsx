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

      <h2>❤️</h2>
      {createHtmlForCopy(copy.thanks)}
    </Section>
  )
}

export default Methods
