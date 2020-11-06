import React from "react"
import _ from "lodash"
import {
  BarLabels,
  SidewaysBarBounds,
  SidewaysBarBlock,
  BarLabel,
} from "../../../styles/styles.js"

const SidewaysBar = ({ data, title, showLabels }) => {
  return (
    <>
      <BarLabels showLabels={showLabels}>
        <h2 style={{ visibility: "hidden", fontSize: "1.2rem" }}>fake</h2>
        {data.map(d => (
          <BarLabel>
            <strong>{d.publication.long}</strong>
          </BarLabel>
        ))}
      </BarLabels>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: "1.2rem" }}>{title}</h2>
        <SidewaysBarBounds>
          {_.range(0, 50).map(i => (
            <SidewaysBarBlock
              color={
                data[_.floor(i / 10)].count > i % 10
                  ? data[_.floor(i / 10)].color
                  : "white"
              }
            />
          ))}
        </SidewaysBarBounds>
      </div>
    </>
  )
}

export default SidewaysBar
