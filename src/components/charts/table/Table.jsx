import React from "react"
import { TableWrapper, HeaderRow, TableRow } from "../../../styles/styles.js"
import _ from "lodash"

const columnWidths = {
  0: "25%",
  1: "45%",
  2: "15%",
  3: "15%",
}

const Table = ({ data, columns }) => {
  return (
    <TableWrapper>
      <HeaderRow>
        {columns.map((column, i) => (
          // <th key={i} style={{ width: columnWidths[i] }}>
          <th key={i}>
            <h3
              key={i}
              style={{
                textAlign: i < 2 ? "left" : "right",
                marginRight: i < 2 ? "10px" : "0px",
                marginLeft: i >= 2 ? "10px" : "0px",
              }}
            >
              {_.capitalize(column.title)}
            </h3>
          </th>
        ))}
      </HeaderRow>

      {data.map((d, rowNumber) => (
        <>
          <TableRow key={rowNumber}>
            {columns.map((column, i) => (
              <td>
                {/* <td style={{ width: columnWidths[i] }}> */}
                <div
                  key={`${rowNumber}-${i}`}
                  style={{
                    textAlign: i < 2 ? "left" : "right",
                    marginRight: i < 2 ? "10px" : "0px",
                    marginLeft: i >= 2 ? "10px" : "0px",
                    fontStyle: column.key === "randomClue" ? "italic" : null,
                  }}
                >
                  {d[column.dataIndex]}
                </div>
              </td>
            ))}
          </TableRow>
        </>
      ))}
    </TableWrapper>
  )
}

export default Table
