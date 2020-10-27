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
      {showLabels && (
        <BarLabels>
          <h2 style={{ visibility: "hidden" }}>fake</h2>
          {data.map(d => (
            <BarLabel>
              <strong>{d.publication.long}</strong>
            </BarLabel>
          ))}
        </BarLabels>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>{title}</h2>
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
