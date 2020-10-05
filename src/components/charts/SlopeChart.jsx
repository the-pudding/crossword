import React from "react";
import * as d3 from "d3";
import useChartDimensions from "../../hooks/useChartDimensions.js";
import Chart from "./chart-elements/Chart.jsx";
import { SlopeChartWrapper } from "../../styles/styles.js";
import rankedByNumAppearances from "../../data/rankedByNumAppearances.json";
import rankedByScore from "../../data/rankedByScore.json";
import _ from "lodash";

const SlopeChart = () => {
  const initialDimensions = {
    marginTop: 60,
    marginRight: 200,
    marginBottom: 60,
    marginLeft: 200,
  };
  const [ref, dms] = useChartDimensions(initialDimensions);

  const leftAccessor = (d) => d.score;
  const rightAccessor = (d) => d.numAppearances;
  const labelAccessor = (d) => d.answer;

  const leftValues = _.take(rankedByScore, 20).map(leftAccessor);
  const rightValues = _.take(rankedByNumAppearances, 20).map(rightAccessor);

  const leftScale = d3
    .scaleLinear()
    .domain(d3.extent(leftValues))
    .range([0, dms.boundedHeight]);
  const rightScale = d3
    .scaleLinear()
    .domain(d3.extent(rightValues))
    .range([0, dms.boundedHeight]);

  return (
    <SlopeChartWrapper ref={ref}>
      <Chart dms={dms}>
        <line
          x1={0}
          y1={0}
          x2={0}
          y2={dms.boundedHeight}
          stroke="black"
          fill="none"
        />
        <line
          x1={dms.boundedWidth}
          y1={0}
          x2={dms.boundedWidth}
          y2={dms.boundedHeight}
          stroke="black"
          fill="none"
        />
        <SlopeChartCircles
          dms={dms}
          data={rankedByScore}
          scale={leftScale}
          accessor={leftAccessor}
          labelAccessor={labelAccessor}
          radius="3"
          color="cornflowerblue"
          left={true}
        />
        <SlopeChartCircles
          dms={dms}
          data={rankedByNumAppearances}
          scale={rightScale}
          accessor={rightAccessor}
          labelAccessor={labelAccessor}
          radius="3"
          color="gold"
          left={false}
        />
      </Chart>
    </SlopeChartWrapper>
  );
};

const SlopeChartCircles = ({
  dms,
  data,
  scale,
  accessor,
  labelAccessor,
  radius,
  color,
  left,
}) => {
  return data.map((d, i) => (
    <g
      transform={`translate(${left ? 0 : dms.boundedWidth}, ${scale(
        accessor(d)
      )})`}
    >
      <circle key={i} r={radius} fill={color} cx={0} cy={0} />
      <text x={left ? -100 : 100} y={0}>
        {labelAccessor(d)}
      </text>
    </g>
  ));
};

export default SlopeChart;
