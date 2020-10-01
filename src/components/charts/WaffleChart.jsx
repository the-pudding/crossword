import React, { useState, useEffect } from "react";
import {
  WaffleChartWrapper,
  WaffleChartBounds,
  WaffleChartLabel,
  Block,
  Percentage,
} from "../../styles/styles.js";
import _ from "lodash";
import { roundData } from "../utils.js";

const WaffleChart = ({ title, data, colors, changeMetric }) => {
  const [colorLookup, setColorLookup] = useState(null);
  const [roundedData, setRoundedData] = useState(null);

  // round data to whole numbers
  useEffect(() => {
    setRoundedData(roundData(data));
  }, [data]);

  // when we get colors, create a color map from i (0-99) -> color of square
  useEffect(() => {
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
    colorLookup &&
    roundedData && (
      <WaffleChartWrapper>
        <div>
          <div style={{ marginBottom: "5px" }}>{title}</div>
          <WaffleChartBounds onClick={changeMetric}>
            {_.range(0, 100).map((i) => (
              <Block key={i} color={colorLookup[i]} />
            ))}
          </WaffleChartBounds>
        </div>
        <div style={{ marginLeft: "10px", marginTop: "18px" }}>
          <WaffleChartLabel color={colors[0]}>
            <Percentage>{roundedData[0]}%</Percentage>
            {title.toLowerCase() === "gender" ? "women" : "POC"}
          </WaffleChartLabel>
          <WaffleChartLabel color={colors[1]}>
            <Percentage>{roundedData[1]}%</Percentage>
            {title.toLowerCase() === "gender" ? "men" : "white"}
          </WaffleChartLabel>
        </div>
      </WaffleChartWrapper>
    )
  );
};

export default WaffleChart;
