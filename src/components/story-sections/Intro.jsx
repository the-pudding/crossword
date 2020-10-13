import React from "react";
import copy from "../../data/copy.json";
import _ from "lodash";
import { Section } from "../../styles/styles.js";
import { createHtmlForCopy } from "../utils.js";

const Intro = () => {
  return (
    <>
      <Section>{createHtmlForCopy(copy.introProse)}</Section>
    </>
  );
};

export default Intro;
