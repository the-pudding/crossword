import React from "react"

const NameAnnotation = ({ x, y, fill, label }) => {
  return (
    <text
      x={x}
      y={y}
      fill={fill}
      style={{
        fontFamily: "'National 2 Web Bold'",
        fontSize: "1.5em",
        stroke: "black",
        strokeWidth: "1px",
      }}
    >
      {label}
    </text>
  )
}

export default NameAnnotation
