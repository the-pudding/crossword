import React from "react";
import copy from "../../data/copy.json";
import _ from "lodash";
import { Prose, Section } from "../../styles/styles.js";
import { createMarkup } from "../utils.js";
import StackedBarChart from "../charts/StackedBarChart.jsx";
import chess from "../../data/CHESS.json";
import poem from "../../data/POEM.json";
import mit from "../../data/MIT.json";
import LineChart from "../charts/LineChart.jsx";

const UsaTodayDeepDive = () => {
  return (
    <>
      <Section>
        {copy.introduceStackedBar.map(({ value }, i) => (
          <Prose key={i} dangerouslySetInnerHTML={createMarkup(value)} />
        ))}
        <StackedBarChart data={chess} word={"chess"} compare="race" />
        <StackedBarChart data={poem} word={"poem"} compare="race" />
        <StackedBarChart data={mit} word={"mit"} compare="gender" />

        {copy.introduceModernize.map(({ value }, i) => (
          <Prose key={i} dangerouslySetInnerHTML={createMarkup(value)} />
        ))}

        {/* <LineChart data={}/> */}
      </Section>
    </>
  );
};

export default UsaTodayDeepDive;
