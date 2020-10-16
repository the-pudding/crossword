import React from "react"
import { Section, Letter, Word } from "../../styles/styles.js"

const SankeyChart = () => {
  const word = "ARENA"
  return (
    <Section>
      <Word>
        {word.split("").map(letter => (
          <Letter>{letter}</Letter>
        ))}
      </Word>
    </Section>
  )
}

export default SankeyChart
