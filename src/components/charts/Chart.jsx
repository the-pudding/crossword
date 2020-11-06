import React from "react"

const Chart = ({ dms, svgStyle, children }) => {
  return (
    <svg height={dms.height} width={dms.width} style={svgStyle}>
      <g transform={`translate(${dms.marginLeft}, ${dms.marginTop})`}>
        {children}
      </g>
    </svg>
  )
}

export default Chart
