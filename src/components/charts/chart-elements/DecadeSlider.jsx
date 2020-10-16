import React from "react"
import { Slider } from "antd"

const DecadeSlider = ({ decade, setDecade }) => {
  const sliderMarks = {
    1940: "1940s",
    1950: "1950s",
    1960: "1960s",
    1970: "1970s",
    1980: "1980s",
    1990: "1990s",
    2000: "2000s",
    2010: "2010s",
  }

  return typeof window !== "undefined" ? (
    <div>
      <Slider
        marks={sliderMarks}
        min={1940}
        max={2010}
        step={10}
        defaultValue={1940}
        style={{ width: "500px", margin: "50px" }}
        tooltipVisible={false}
        value={decade}
        onChange={value => setDecade(value)}
      />
    </div>
  ) : null
}

export default DecadeSlider