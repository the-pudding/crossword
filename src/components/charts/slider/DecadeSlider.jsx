import React, { useState } from "react"
import "./DecadeSlider.css"
import {
  DecadeSliderWrapper,
  SliderTick,
  SliderLabel,
} from "../../../styles/styles.js"
import * as d3 from "d3"
import COLORS from "../../../styles/colors.js"
import Chart from "../Chart.jsx"
import useChartDimensions from "../../../hooks/useChartDimensions.js"
import Slider from "react-rangeslider"
import "./DecadeSlider.css"
import _ from "lodash"

const DecadeSlider = ({ decade, setDecade }) => {
  // const [dragLocation, setDragLocation] = useState(0)

  const sliderMarks = [
    {
      value: 1940,
      label: "1940s",
    },
    {
      value: 1950,
      label: "1950s",
    },
    {
      value: 1960,
      label: "1960s",
    },
    {
      value: 1970,
      label: "1970s",
    },
    {
      value: 1980,
      label: "1980s",
    },
    {
      value: 1990,
      label: "1990s",
    },
    {
      value: 2000,
      label: "2000s",
    },
    {
      value: 2010,
      label: "2010s",
    },
  ]
  const labels = {
    1940: (
      <>
        <SliderTick />
        <SliderLabel bold={decade === 1940}>1940s</SliderLabel>
      </>
    ),
    1950: (
      <>
        <SliderTick />
        <SliderLabel bold={decade === 1950}>1950s</SliderLabel>
      </>
    ),
    1960: (
      <>
        <SliderTick />
        <SliderLabel bold={decade === 1960}>1960s</SliderLabel>
      </>
    ),
    1970: (
      <>
        <SliderTick />
        <SliderLabel bold={decade === 1970}>1970s</SliderLabel>
      </>
    ),
    1980: (
      <>
        <SliderTick />
        <SliderLabel bold={decade === 1980}>1980s</SliderLabel>
      </>
    ),
    1990: (
      <>
        <SliderTick />
        <SliderLabel bold={decade === 1990}>1990s</SliderLabel>
      </>
    ),
    2000: (
      <>
        <SliderTick />
        <SliderLabel bold={decade === 2000}>2000s</SliderLabel>
      </>
    ),
    2010: (
      <>
        <SliderTick />
        <SliderLabel bold={decade === 2010}>2010s</SliderLabel>
      </>
    ),
  }
  // const initialDimensions = {
  //   marginTop: 0,
  //   marginRight: 30,
  //   marginBottom: 50,
  //   marginLeft: 30,
  // }
  // const [ref, dms] = useChartDimensions(initialDimensions)

  // const xScale = d3
  //   .scaleLinear()
  //   .domain([1940, 2010])
  //   .range([0, dms.boundedWidth - 2])

  return (
    <DecadeSliderWrapper>
      <Slider
        min={1940}
        max={2010}
        step={10}
        value={decade}
        onChangeStart={() => console.log("hi")}
        onChange={value => setDecade(value)}
        onChangeComplete={() => console.log("hi")}
        style={{ width: "100%" }}
        tooltip={false}
        labels={labels}
      />
    </DecadeSliderWrapper>
  )
}

export default DecadeSlider
