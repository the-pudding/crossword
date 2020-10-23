import React from "react"
import {
  TableWrapper,
  TableRow,
  TableDivider,
  HeadingDivider,
} from "../../../styles/styles.js"

const Table = ({ data, columns }) => {
  return (
    <TableWrapper>
      <div style={{ display: "flex" }}>
        {columns.map((column, i) => (
          <h3
            style={{
              flexBasis: "25%",
              margin: 0,
              textAlign: i < 2 ? "left" : "right",
            }}
          >
            {column.title.toUpperCase()}
          </h3>
        ))}
      </div>

      <HeadingDivider />

      {data.map((d, rowNum) => (
        <>
          <TableRow>
            {columns.map((column, i) => (
              <div
                style={{
                  flexBasis: "25%",
                  textAlign: i < 2 ? "left" : "right",
                }}
              >
                {d[column.dataIndex]}
              </div>
            ))}
          </TableRow>
          {rowNum < data.length - 1 && <TableDivider />}
        </>
      ))}
    </TableWrapper>
  )
}

export default Table
