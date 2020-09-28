import React from "react";
import * as d3 from "d3";
import "./WaffleChart.css";
import _ from "lodash";

const WaffleChart = ({ data }) => {
  return (
    <div className="waffle-chart-wrapper">
      {_.range(0, 100).map((i) => (
        <div
          key={i}
          class="block"
          style={{ background: i < 5 ? "cornflowerblue" : "lightgrey" }}
        />
      ))}
    </div>
  );
};

export default WaffleChart;
