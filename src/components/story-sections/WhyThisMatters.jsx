import React from "react"
import copy from "../../data/copy.json"
import _ from "lodash"
import { Section } from "../../styles/styles.js"
import { createHtmlForCopy } from "../utils.js"

const WhyThisMatters = () => {
  return (
    <>
      <Section>{createHtmlForCopy(copy.introProse)}</Section>
    </>
  )
}

export default WhyThisMatters
