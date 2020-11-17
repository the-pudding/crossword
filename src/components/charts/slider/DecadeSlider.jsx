import React from "react"
import "./DecadeSlider.css"
import {
  DecadeSliderWrapper,
  SliderTick,
  SliderLabel,
} from "../../../styles/styles.js"
import Slider from "react-rangeslider"
import "./DecadeSlider.css"
import _ from "lodash"

const DecadeSlider = ({ decade, setDecade }) => {
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

  return (
    <DecadeSliderWrapper>
      <Slider
        min={1940}
        max={2010}
        step={10}
        value={decade}
        onChange={value => setDecade(value)}
        style={{ width: "100%" }}
        tooltip={false}
        labels={labels}
      />
    </DecadeSliderWrapper>
  )
}

export default DecadeSlider
