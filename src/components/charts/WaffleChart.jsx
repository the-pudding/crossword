import React from "react";
import { WaffleChartWrapper, Block } from "../../styles/styles.js";
import _ from "lodash";

const WaffleChart = ({ title }) => {
  return (
    <div style={{ marginTop: "10px", marginBottom: "10px" }}>
      <div>{title}</div>
      <WaffleChartWrapper>
        {_.range(0, 100).map((i) => (
          <Block
            key={i}
            style={{ background: i < 5 ? "cornflowerblue" : "lightgrey" }}
          />
        ))}
      </WaffleChartWrapper>
    </div>
  );
};

export default WaffleChart;
