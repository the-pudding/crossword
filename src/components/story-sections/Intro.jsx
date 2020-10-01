import React from "react";
import copy from "../../data/copy.json";
import _ from "lodash";
import { Prose } from "../../styles/styles.js";
import { createMarkup } from "../utils.js";

const Intro = () => {
  return (
    <div>
      {copy.introProse.map(({ value }, i) => (
        <Prose key={i} dangerouslySetInnerHTML={createMarkup(value)} />
      ))}
    </div>
  );
};

export default Intro;
