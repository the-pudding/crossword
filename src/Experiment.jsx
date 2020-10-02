import React, { useState } from "react";
import rankings from "./data/rankings.json";
import _ from "lodash";

const Experiment = () => {
  const [decade, setDecade] = useState("2020");
  const [nameHovered, setNameHovered] = useState(null);
  const entryHeight = 30;
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ textAlign: "right" }}>
        <h3>Ranking by appearences</h3>
        {_.first(
          rankings.filter((d) => d.decade === decade)
        ).rankingByAppearances.map(({ name, total }, i) => (
          <div
            key={i}
            style={{ height: "30px" }}
            onMouseEnter={() => setNameHovered(name)}
            onMouseLeave={() => setNameHovered(null)}
          >
            {name} ({total})
          </div>
        ))}
      </div>

      <svg width="350px" style={{ marginTop: "65px" }}>
        {_.first(
          rankings.filter((d) => d.decade === decade)
        ).rankingByAppearances.map((entry, i) => {
          const normalizedEntryLocation = _.findIndex(
            _.first(rankings.filter((d) => d.decade === decade))
              .rankingNormalized,
            (d) => d.name === entry.name
          );
          return (
            <line
              x1={0}
              y1={i * entryHeight}
              x2={350}
              y2={normalizedEntryLocation * entryHeight}
              stroke="black"
              opacity={
                nameHovered === entry.name || nameHovered === null ? 1 : 0
              }
            />
          );
        })}
      </svg>

      <div>
        <h3>Ranking normalized</h3>
        {_.first(
          rankings.filter((d) => d.decade === decade)
        ).rankingNormalized.map(({ name, total }, i) => (
          <div key={i} style={{ height: `${entryHeight}px` }}>
            {name} ({total.toFixed()})
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiment;
