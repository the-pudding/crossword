import React from "react";
import copy from "../../data/copy.json";
import _ from "lodash";
import { Prose, Section } from "../../styles/styles.js";
import { createMarkup } from "../utils.js";
import twitter from "../../images/twitter.png";

const Intro = () => {
  return (
    <>
      <Section>
        {copy.introProse.map(({ type, value }, i) => {
          if (type === "text") {
            return (
              <Prose key={i} dangerouslySetInnerHTML={createMarkup(value)} />
            );
          } else if (type === "image") {
            return (
              <div
                key={i}
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={twitter}
                  style={{
                    height: "450px",
                  }}
                />
                <p style={{ fontSize: "12px" }}>
                  Clues from a 2020 USA Today puzzle
                </p>
              </div>
            );
          }
        })}
      </Section>
    </>
  );
};

export default Intro;
