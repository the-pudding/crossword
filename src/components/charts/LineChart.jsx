import React, { useState } from "react";
import * as d3 from "d3";
import useChartDimensions from "../../hooks/useChartDimensions.js";
import Chart from "./chart-elements/Chart.jsx";
import Line from "./chart-elements/Line.jsx";
import Axis from "./chart-elements/Axis.jsx";
import { LineChartWrapper } from "../../styles/styles.js";
import theeData from "../../data/THEE.json";

const LineChart = () => {
  const initialDimensions = {
    marginTop: 60,
    marginRight: 200,
    marginBottom: 100,
    marginLeft: 100,
  };
  const [ref, dms] = useChartDimensions(initialDimensions);

  const yScale = d3
    .scaleLinear()
    .domain(
      d3.extent([
        ...theeData.map((d) => d.oldTimeyYou),
        ...theeData.map((d) => d.meganTheeStallion),
        ...theeData.map((d) => d.lyric),
      ])
    )
    .range([dms.boundedHeight, 0])
    .nice();
  const xScale = d3
    .scalePoint()
    .domain(theeData.map((d) => d.year))
    .range([0, dms.boundedWidth]);

  return (
    <>
      <LineChartWrapper ref={ref}>
        <h1 style={{ textAlign: "center" }}>
          How <span style={{ background: "yellow" }}>THEE</span> is clued across
          the big 5 crosswords
        </h1>
        <Chart dms={dms}>
          <Line
            data={theeData}
            xAccessor={(d) => d.year}
            yAccessor={(d) => (d.meganTheeStallion ? d.meganTheeStallion : 0)}
            xScale={xScale}
            yScale={yScale}
            color={"orange"}
            fillArea={false}
          />
          <Line
            data={theeData}
            xAccessor={(d) => d.year}
            yAccessor={(d) => d.oldTimeyYou}
            xScale={xScale}
            yScale={yScale}
            color={"grey"}
            fillArea={false}
          />
          <Line
            data={theeData}
            xAccessor={(d) => d.year}
            yAccessor={(d) => (d.lyric ? d.lyric : 0)}
            xScale={xScale}
            yScale={yScale}
            color={"grey"}
            fillArea={false}
          />

          <text x={650} y={200}>
            old-timey "you"
          </text>
          <text x={650} y={270}>
            poem or song
          </text>
          <text x={650} y={330}>
            Megan Thee Stallion
          </text>

          <Axis dimension="x" dms={dms} scale={xScale} label="year" />
          <Axis dimension="y" dms={dms} scale={yScale} label="clues per year" />
        </Chart>
      </LineChartWrapper>
    </>
  );
};

export default LineChart;
