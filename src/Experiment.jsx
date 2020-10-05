import React, { useState } from "react";
import rankedByNumAppearance from "./data/rankedByNumAppearances.json";
import rankedByScore from "./data/rankedByScore.json";

import _ from "lodash";

const Experiment = () => {
  const n = 20;

  const leftList = _.take(
    _.orderBy(
      rankedByScore.map((d, i) => ({ ...d, num: i + 1 })),
      ["score"],
      ["asc"]
    ),
    50
  );
  // const rightList = _.orderBy(
  //   rankedByNumAppearance.map((d, i) => ({
  //     ...d,
  //     num: rankedByNumAppearance.length - i,
  //   })),
  //   ["numAppearances"],
  //   ["desc"]
  // );
  const rightList = leftList.map((leftEntry) => {
    const matchingEntry = rankedByNumAppearance.filter(
      (rightEntry) => rightEntry.answer === leftEntry.answer
    )[0];
    return { ...matchingEntry };
  });

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <h3>Ranked by score</h3>
        {leftList.map((d) => (
          <div>
            {d.num}. {d.answer} ({d.score.toFixed()}) -{" "}
            <ul>
              {d.names.map((name) => (
                <li>{name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <h3>Ranked by # appearances</h3>
        {rightList.map((d, i) => {
          return (
            <div>
              {d.answer} ({d.numAppearances})
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experiment;
