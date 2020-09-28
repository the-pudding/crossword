import React from "react";

const Chart = ({ dms, children }) => {
  return (
    <svg height={dms.height} width={dms.width}>
      <g transform={`translate(${dms.marginLeft}, ${dms.marginTop})`}>
        {children}
      </g>
    </svg>
  );
};

export default Chart;
