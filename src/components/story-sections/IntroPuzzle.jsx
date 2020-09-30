import React from "react";
import copy from "../../data/copy.json";
import { StoryTitle, Prose } from "../../styles/styles.js";
import CrosswordChart from "../charts/CrosswordChart.jsx";

const IntroPuzzle = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <StoryTitle>{copy.title}</StoryTitle>
      {copy.introPuzzle.map((obj, i) => (
        <Prose key={i}>{obj.value}</Prose>
      ))}
      <CrosswordChart />
    </div>
  );
};

export default IntroPuzzle;
