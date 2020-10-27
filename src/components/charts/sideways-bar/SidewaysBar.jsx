import React from "react"
import _ from "lodash"
import { BarLabels } from "../../../styles/styles.js"

const borderSize = 4
const blockSize = 25

const SidewaysBar = ({ data, title, showLabels }) => {
  return (
    <>
      {showLabels && (
        <BarLabels>
          <h2 style={{ visibility: "hidden" }}>fake</h2>
          {data.map(d => (
            <div
              style={{
                height: blockSize,
                textAlign: "end",
              }}
            >
              <strong>{d.publication.long}</strong>
            </div>
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
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            outline: `${borderSize}px black solid`,
            width: 10 * blockSize,
            height: 5 * blockSize,
          }}
        >
          {_.range(0, 50).map(i => (
            <div
              style={{
                height: blockSize,
                width: blockSize,
                border: "1px black solid",
                background:
                  data[_.floor(i / 10)].count > i % 10
                    ? data[_.floor(i / 10)].color
                    : "null",
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SidewaysBar
