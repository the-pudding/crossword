import React, { useState } from "react";
import copy from "../../data/copy.json";
import {
  StoryTitle,
  ScrollyStep,
  CrosswordWaffleWrapper,
} from "../../styles/styles.js";
import _ from "lodash";
import CrosswordChart from "../charts/crossword/CrosswordChart.jsx";
import WaffleChart from "../charts/WaffleChart.jsx";
import raceGenderBreakdown from "../../data/raceGenderBreakdownByDecade.json";
import { Scrollama, Step } from "react-scrollama";
import { addColorsToData } from "../utils.js";
import { COLORS } from "../../styles/colors.js";

const tempData = {
  across: {
    1: {
      clue: "McGhee",
      answer: "MICHELLE",
      row: 4,
      col: 0,
      race: "poc",
      gender: "woman",
    },
    2: {
      clue: "The proof is in the __",
      answer: "PUDDING",
      row: 1,
      col: 3,
      race: "white",
      gender: "man",
    },
  },
  down: {
    3: {
      clue: "Goldenberg",
      answer: "RUSSELL",
      row: 0,
      col: 4,
      race: "white",
      gender: "man",
    },
    4: {
      clue: "Jan",
      answer: "DIEHM",
      row: 3,
      col: 1,
      race: "white",
      gender: "woman",
    },
  },
};

const IntroPuzzle = () => {
  const [stepIndex, setStepIndex] = useState(null);
  const [metric, setMetric] = useState("gender");

  // advancing scrollytelling steps
  const onStepEnter = ({ data }) => {
    setStepIndex(data);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <StoryTitle>{copy.title}</StoryTitle>
      <div>By Michelle McGhee and Russell Goldenberg</div>

      <CrosswordWaffleWrapper>
        <CrosswordChart
          data={addColorsToData(tempData, metric)}
          colorCode={stepIndex === 1}
          showAnswers={stepIndex === 1}
        />
        <div style={{ opacity: stepIndex === 1 ? 1 : 0 }}>
          <WaffleChart
            title={"Gender"}
            data={_.pick(
              _.first(raceGenderBreakdown.filter((d) => d.decade === "2020")),
              ["men", "women"]
            )}
            colors={[COLORS.woman, COLORS.man]}
            changeMetric={() => setMetric("gender")}
          />
          <WaffleChart
            title={"Race"}
            data={_.pick(
              _.first(raceGenderBreakdown.filter((d) => d.decade === "2020")),
              ["white", "poc"]
            )}
            colors={[COLORS.poc, COLORS.white]}
            changeMetric={() => setMetric("race")}
          />
        </div>
      </CrosswordWaffleWrapper>

      <Scrollama onStepEnter={onStepEnter} debug offset={0.8}>
        {copy.introSteps.map((step, i) => (
          <Step data={i} key={i}>
            <ScrollyStep>{step.text}</ScrollyStep>
          </Step>
        ))}
      </Scrollama>
    </div>
  );
};

export default IntroPuzzle;
