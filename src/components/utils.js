import React from "react"
import _ from "lodash"
import COLORS from "../styles/colors.js"
import { RoughNotation } from "react-rough-notation"
import {
  Prose,
  SmallNote,
  Heading,
  Image,
  ImageWrapper,
  Emphasis,
} from "../styles/styles.js"
import { TwitterTweetEmbed } from "react-twitter-embed"
import twitter from "../images/twitter.png"

// workaround for react so links work
export const createMarkup = content => {
  return { __html: content }
}

export const createHtmlForCopy = copy => {
  return copy.map(
    ({ step, text, type, value, source, caption, tweetId }, i) => {
      if (type === "text") {
        return <Prose key={i} dangerouslySetInnerHTML={createMarkup(value)} />
      } else if (type === "emphasized-text") {
        return (
          <Emphasis>
            <Prose key={i} dangerouslySetInnerHTML={createMarkup(value)} />
          </Emphasis>
        )
      } else if (type === "small") {
        return (
          <SmallNote key={i} dangerouslySetInnerHTML={createMarkup(value)} />
        )
      } else if (type === "image") {
        return (
          <ImageWrapper key={i}>
            <Image src={twitter} />
            <p style={{ fontSize: "12px" }}>{caption}</p>
          </ImageWrapper>
        )
      } else if (type === "tweet") {
        return (
          <div style={{ width: "500px" }}>
            <TwitterTweetEmbed tweetId={"1303360662450601986"} />
          </div>
        )
      } else if (type === "header") {
        return <Heading key={i} dangerouslySetInnerHTML={createMarkup(value)} />
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
        row: row - 1,
        col: col - 1,
        race: binaryRace,
        gender,
      }
    } else if (dir === "down") {
      result.down[id] = {
        clue,
        answer,
        row: row - 1,
        col: col - 1,
        race: binaryRace,
        gender,
      }
    }
  })
  return result
}
