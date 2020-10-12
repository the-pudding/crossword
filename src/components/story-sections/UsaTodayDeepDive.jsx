import React from "react";
import copy from "../../data/copy.json";
import _ from "lodash";
import { Prose, Section } from "../../styles/styles.js";
import { createMarkup } from "../utils.js";
import StackedBarChart from "../charts/StackedBarChart.jsx";
import chess from "../../data/CHESS.json";
import poem from "../../data/POEM.json";

const UsaTodayDeepDive = () => {
  return (
    <>
      <Section>
        {copy.usaTodayProse.map(({ value }, i) => (
          <Prose key={i} dangerouslySetInnerHTML={createMarkup(value)} />
        ))}
        <StackedBarChart data={chess} word={"chess"} />
        <StackedBarChart data={poem} word={"poem"} />
      </Section>
    </>
  );
};

export default UsaTodayDeepDive;
