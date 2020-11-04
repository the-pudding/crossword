import React from "react"
import _ from "lodash"
import COLORS from "../styles/colors.js"
import { RoughNotation } from "react-rough-notation"
import {
  Prose,
  TextNote,
  Image,
  ImageWrapper,
  Emphasis,
  Section,
  ClueExamplesWrapper,
  ClueAnswerPair,
  AnswerBox,
  WrittenNote,
} from "../styles/styles.js"
import { TwitterTweetEmbed } from "react-twitter-embed"
import ClueExamples from "./ClueExamples.jsx"

// workaround for react so links work
export const createMarkup = content => {
  return { __html: content }
}

export const createHtmlForCopy = copy => {
  return copy.map(
    ({ step, text, type, value, source, caption, tweetId, clues }, i) => {
      if (type === "text" && value.includes("<span class=highlighted>")) {
        return <Prose key={i} dangerouslySetInnerHTML={createMarkup(value)} />
      } else if (type === "text") {
        return <Prose key={i} dangerouslySetInnerHTML={createMarkup(value)} />
      } else if (type === "emphasized-text") {
        return (
          <Emphasis>
            <Prose key={i} dangerouslySetInnerHTML={createMarkup(value)} />
          </Emphasis>
        )
      } else if (type === "small") {
        return (
          <TextNote key={i} dangerouslySetInnerHTML={createMarkup(value)} />
        )
      } else if (type === "clues") {
        return <ClueExamples clues={clues} />
      }
      return ""
    }
  )
}

// rounds an array of percentages so that they add up to 100, minimizing error
export const roundData = (data, target = 100) => {
  const originalOrder = data.map(d => d.group)
  const naiveRoundSum = data.reduce((acc, currentValue) => {
    return acc + Math.round(currentValue.percent)
  }, 0)
  const off = target - naiveRoundSum

  const rounded = _.sortBy(
    data,
    ({ percent }) => Math.round(percent) - percent
  ).map(({ group, percent }, i) => ({
    percent: Math.round(percent) + (off > i) - (i >= data.length + off),
    group,
  }))

  const inOriginalOrder = _.sortBy(rounded, d => {
    return _.findIndex(originalOrder, original => original === d.group)
  })
  return inOriginalOrder
}

// adds a field 'color' to crossword data based on the metric (gender or race) that's being displayed
export const addColorsToData = (data, metric) => {
  const updatedData = { across: {}, down: {} }
  const acrossKeys = _.keys(data.across)
  const downKeys = _.keys(data.down)
  _.forEach(acrossKeys, number => {
    updatedData.across[number] = {
      ...data.across[number],
      color: COLORS[data.across[number][metric]],
    }
  })
  _.forEach(downKeys, number => {
    updatedData.down[number] = {
      ...data.down[number],
      color: COLORS[data.down[number][metric]],
    }
  })
  return updatedData
}

export const prepareCrosswordData = data => {
  const result = { across: {}, down: {} }

  _.forEach(data, ({ id, dir, clue, answer, row, col, binaryRace, gender }) => {
    if (dir === "across") {
      result.across[id] = {
        clue,
        answer,
        // row: row - 1,
        // col: col - 1,
        row,
        col,
        race: binaryRace,
        gender,
      }
    } else if (dir === "down") {
      result.down[id] = {
        clue,
        answer,
        // row: row - 1,
        // col: col - 1,
        row,
        col,
        race: binaryRace,
        gender,
      }
    }
  })
  return result
}
