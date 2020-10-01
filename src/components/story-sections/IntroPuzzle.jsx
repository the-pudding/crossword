import React, { useState } from "react";
import copy from "../../data/copy.json";
import {
  StoryTitle,
  ScrollyStep,
  CrosswordWaffleWrapper,
} from "../../styles/styles.js";
import CrosswordChart from "../charts/crossword/CrosswordChart.jsx";
import WaffleChart from "../charts/WaffleChart.jsx";
import { Scrollama, Step } from "react-scrollama";

const tempData = {
  across: {
    1: {
      clue: "McGhee",
      answer: "MICHELLE",
      row: 4,
      col: 0,
      color: "cornflowerblue",
    },
    2: {
      clue: "The proof is in the __",
      answer: "PUDDING",
      row: 1,
      col: 3,
      color: "gold",
    },
  },
  down: {
    3: {
      clue: "Goldenberg",
      answer: "RUSSELL",
      row: 0,
      col: 4,
      color: "cornflowerblue",
    },
    4: {
      clue: "Jan",
      answer: "DIEHM",
      row: 3,
      col: 1,
      color: "cornflowerblue",
    },
  },
};

const IntroPuzzle = () => {
  const [stepIndex, setStepIndex] = useState(null);

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
          data={tempData}
          colorCode={stepIndex === 1}
          showAnswers={stepIndex === 1}
        />
        <div style={{ opacity: stepIndex === 1 ? 1 : 0 }}>
          <WaffleChart title={"Race"} />
          <WaffleChart title={"Gender"} />
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
