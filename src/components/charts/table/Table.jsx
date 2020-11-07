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
          <th style={{ width: columnWidths[i] }}>
            <h3
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

      {data.map(d => (
        <>
          <TableRow>
            {columns.map((column, i) => (
              <td style={{ width: columnWidths[i] }}>
                <div
                  style={{
                    textAlign: i < 2 ? "left" : "right",
                    marginRight: i < 2 ? "10px" : "0px",
                    marginLeft: i >= 2 ? "10px" : "0px",
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
