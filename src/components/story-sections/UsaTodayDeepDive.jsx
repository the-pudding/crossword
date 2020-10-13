import React from "react";
import copy from "../../data/copy.json";
import _ from "lodash";
import { Section } from "../../styles/styles.js";
import { createHtmlForCopy } from "../utils.js";
import StackedBarChart from "../charts/StackedBarChart.jsx";
import chess from "../../data/CHESS.json";
import poem from "../../data/POEM.json";
import mit from "../../data/MIT.json";
import LineChart from "../charts/LineChart.jsx";

const UsaTodayDeepDive = () => {
  return (
    <>
      <Section>
        {createHtmlForCopy(copy.introduceStackedBar)}
        <StackedBarChart data={chess} word={"chess"} compare="race" />
        <StackedBarChart data={poem} word={"poem"} compare="race" />
        <StackedBarChart data={mit} word={"mit"} compare="gender" />

        {createHtmlForCopy(copy.introduceModernize)}

        {/* <LineChart data={}/> */}
      </Section>
    </>
  );
};

export default UsaTodayDeepDive;
