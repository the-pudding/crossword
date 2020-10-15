import React from "react"
import _ from "lodash"
import XYFrame from "semiotic/lib/XYFrame"
import ResponsiveOrdinalFrame from "semiotic/lib/ResponsiveOrdinalFrame"

const NameOverTime = ({
  data,
  answer,
  lineColors,
  names,
  nameForBarChart,
  extraAnnotations,
}) => {
  console.log({ data })
  const frameProps = {
    lines: names.map(name => ({
      coordinates: data.map(d => ({
        year: d.year,
        count: _.sum(
          _.keys(d)
            .filter(k =>
              k.toLowerCase().includes(_.camelCase(name).toLowerCase())
            )
            .map(k => d[k])
        ),
      })),
    })),
    size: [800, 500],
    margin: { left: 120, bottom: 90, right: 100, top: 100 },
    xAccessor: d => d.year,
    yAccessor: d => d.count,
    yExtent: [0],
    lineStyle: (d, i) => ({
      stroke: lineColors[i],
      strokeWidth: 2,
      fill: "none",
    }),
    title: `${answer} across all publications`,
    axes: [
      {
        orient: "left",
        label: "Clues per year",
        tickLineGenerator: ({ xy }) => {
          const { x1, x2, y1, y2 } = xy
          return (
            <path
              style={{ stroke: "lightgrey", fill: "none" }}
              d={`M${x1},${y1}L${x2},${y2}`}
            />
          )
        },
      },
      {
        orient: "bottom",
        label: "Year",
        tickLineGenerator: ({ xy }) => {
          const { x1, x2, y1, y2 } = xy
          return (
            <path
              style={{ stroke: "lightgrey", fill: "none" }}
              d={`M${x1},${y1}L${x2},${y2}`}
            />
          )
        },
      },
    ],
  }

  const annotations = names.map((name, i) => ({
    type: "react-annotation",
    year: "2020",
    count:
      frameProps.lines[i].coordinates.filter(d => d.year === "2020")[0].count ||
      0,
    note: { title: name, color: lineColors[i] },
    dx: 65,
    dy: -5,
    disable: "connector",
  }))

  return (
    <div style={{ width: "90%", display: "flex", alignItems: "center" }}>
      <XYFrame
        {...frameProps}
        annotations={[...annotations, ...extraAnnotations]}
      />
      <StackedBar
        data={data}
        name={nameForBarChart}
        title={`What publications are cluing modern ${answer}s in 2020`}
      />
    </div>
  )
}

const StackedBar = ({ data, name, title }) => {
  const colorHash = {
    [`${_.camelCase("usa" + name)}`]: "#ac58e5",
    [`${_.camelCase("nyt" + name)}`]: "#9fd0cb",
    [`${_.camelCase("uni" + name)}`]: "#E0488B",
    [`${_.camelCase("wsj" + name)}`]: "cornflowerblue",
    [`${_.camelCase("lat" + name)}`]: "gold",
  }
  const rAccessor = [
    `${_.camelCase("usa" + name)}`,
    `${_.camelCase("nyt" + name)}`,
    `${_.camelCase("uni" + name)}`,
    `${_.camelCase("wsj" + name)}`,
    `${_.camelCase("lat" + name)}`,
  ]
  const frameProps = {
    data: data.filter(d => d.year === "2020"),
    size: [300, 300],
    responsiveWidth: true,
    type: "bar",
    oAccessor: "year",
    rAccessor,
    style: d => ({ fill: colorHash[rAccessor[d.rIndex]], stroke: "white" }),
    title,
    axes: [
      {
        orient: "left",
        label: <text textAnchor="middle"># of clues</text>,
      },
    ],
    pieceHoverAnnotation: true,
    tooltipContent: d => {
      return (
        <div
          style={{
            height: "50px",
            width: "100px",
            background: "white",
            zIndex: 1000,
          }}
        >
          {d.rName} ({d[d.rName]})
        </div>
      )
    },
    oLabel: true,
  }
  return (
    <div style={{ width: "50%" }}>
      <ResponsiveOrdinalFrame {...frameProps} />
    </div>
  )
}

export default NameOverTime
