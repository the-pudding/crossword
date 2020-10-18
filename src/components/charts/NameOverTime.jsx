import React from "react"
import _ from "lodash"
import XYFrame from "semiotic/lib/XYFrame"
import OrdinalFrame from "semiotic/lib/OrdinalFrame"

const NameOverTime = ({
  data,
  answer,
  lineColors,
  names,
  nameForBarChart,
  extraAnnotations,
}) => {
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

  const publications = ["nyt", "uni", "wsj", "lat", "usa"]

  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <XYFrame
        {...frameProps}
        annotations={[...annotations, ...extraAnnotations]}
      />
      <PublicationBars
        data={publications.map(publication => ({
          publication,
          duVernay:
            data.filter(d => d.year === "2020")[0][
              `${publication}AvaDuVernay`
            ] || 0,
        }))}
        name={nameForBarChart}
        title={`What publications are cluing modern ${answer}s in 2020`}
      />
    </div>
  )
}

const PublicationBars = ({ data, name, title }) => {
  const colorHash = {
    usa: "#ac58e5",
    nyt: "#9fd0cb",
    uni: "#E0488B",
    wsj: "cornflowerblue",
    lat: "gold",
  }

  const frameProps = {
    data: _.orderBy(data, ["duVernay"], ["desc"]),
    size: [400, 400],
    type: "bar",
    oAccessor: "publication",
    rAccessor: "duVernay",
    style: d => ({ fill: colorHash[d.publication], stroke: "white" }),
    title,
    axes: [
      {
        orient: "left",
        label: <text textAnchor="middle"># of clues</text>,
      },
    ],
    oLabel: true,
  }
  return <OrdinalFrame {...frameProps} />
}

export default NameOverTime
