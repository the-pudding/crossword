import React from "react";
import copy from "../../data/copy.json";
import _ from "lodash";
import { Prose, Section } from "../../styles/styles.js";
import { createMarkup } from "../utils.js";

const UsaTodayProse = () => {
  return (
    <>
      <Section>
        {copy.usaTodayProse.map(({ value }, i) => (
          <Prose key={i} dangerouslySetInnerHTML={createMarkup(value)} />
        ))}
      </Section>
    </>
  );
};

export default UsaTodayProse;
