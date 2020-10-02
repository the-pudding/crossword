import React, { useState } from "react";
import * as d3 from "d3";
import useChartDimensions from "../../hooks/useChartDimensions.js";
import Chart from "./chart-elements/Chart.jsx";
import Line from "./chart-elements/Line.jsx";
import Axis from "./chart-elements/Axis.jsx";
import { LineChartWrapper } from "../../styles/styles.js";

const LineChart = ({ dataSources }) => {
  const [metric, setMetric] = useState("men");

  const initialDimensions = {
    marginTop: 60,
    marginRight: 60,
    marginBottom: 100,
    marginLeft: 100,
  };
  const [ref, dms] = useChartDimensions(initialDimensions);

  const yScale = d3
    .scaleLinear()
    .domain([0, 100])
    .range([dms.boundedHeight, 0]);
  const xScale = d3
    .scalePoint()
    .domain(dataSources[0].map((d) => d.decade))
    .range([0, dms.boundedWidth]);

  return (
    <>
      <LineChartWrapper ref={ref}>
        <Chart dms={dms}>
          {dataSources.map((data, i) => (
            <Line
              key={`line-${i}`}
              data={data}
              xAccessor={(d) => d.decade}
              yAccessor={(d) => d[metric]}
              xScale={xScale}
              yScale={yScale}
              color={i === 0 ? "orange" : "black"}
              fillArea={false}
            />
          ))}

          <Axis dimension="x" dms={dms} scale={xScale} label="Decade" />
          <Axis dimension="y" dms={dms} scale={yScale} label="%" />
        </Chart>
      </LineChartWrapper>
      <select
        name="metric"
        value={metric}
        onChange={(e) => setMetric(e.target.value)}
      >
        <option value="men">men</option>
        <option value="women">women</option>
        <option value="white">white</option>
        <option value="poc">poc</option>
      </select>
    </>
  );
};

export default LineChart;
