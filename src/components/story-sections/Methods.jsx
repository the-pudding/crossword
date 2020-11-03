import React from "react"
import { Section, Prose } from "../../styles/styles.js"
import copy from "../../data/copy.json"
import { createHtmlForCopy } from "../utils.js"

const Methods = () => {
  return (
    <Section>
      <Prose margin="0">
        <h3 style={{ fontSize: "1rem" }}>Methodology</h3>
      </Prose>
      {createHtmlForCopy(copy.methodology)}
    </Section>
  )
}

export default Methods
