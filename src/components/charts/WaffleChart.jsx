import React, { useState, useEffect } from "react";
import { WaffleChartWrapper, Block } from "../../styles/styles.js";
import _ from "lodash";
import { roundData } from "../utils.js";

const WaffleChart = ({ title, data, colors, changeMetric }) => {
  const [colorLookup, setColorLookup] = useState(null);

  // when we get colors, create a color map from i (0-99) -> color of square
  useEffect(() => {
    const roundedData = roundData(data);
    const colorOptions = colors
      ? colors
      : roundedData.map(
          (d) => "#" + Math.floor(Math.random() * 16777215).toString(16)
        );

    const updatedColorLookup = {};
    let countTo100 = 0;
    _.forEach(roundedData, (groupPercent, groupNum) => {
      _.forEach(_.range(0, groupPercent), (i) => {
        updatedColorLookup[countTo100] = colorOptions[groupNum];
        countTo100 += 1;
      });
    });

    setColorLookup(updatedColorLookup);
  }, [colors]);

  return (
    colorLookup && (
      <div style={{ marginTop: "10px", marginBottom: "10px" }}>
        <div>{title}</div>
        <WaffleChartWrapper onClick={changeMetric}>
          {_.range(0, 100).map((i) => (
            <Block key={i} color={colorLookup[i]} />
          ))}
        </WaffleChartWrapper>
      </div>
    )
  );
};

export default WaffleChart;
