import styled, { createGlobalStyle } from "styled-components"
import COLORS from "./colors.js"

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "National 2 Web", "Helvetica Neue", sans-serif;
    background-color: white;
    color: black;
  }  

  h1 {
    font-family: "Tiempos Headline";
    font-size: 4rem;
    text-align: center;
  }

  strong {
    font-family: "National 2 Web Bold";
  }

  button {
    font-size: 0.8rem;
    padding: 5px;
    margin: 5px;
    background: white;
    border: 1px black solid;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
    }
  }
`

export const EssayWrapper = styled.main`
  max-width: 743px;
  margin: 0 auto;
  font-size: 18px;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 100%;
`

export const Prose = styled.p`
  font-family: "Tiempos Text";
  max-width: 620px;
  margin: 1rem auto;
  padding: 0 1rem;
  width: 100%;
`

export const SmallNote = styled.p`
  font-size: 0.8rem;
  max-width: 620px;
  margin: 1rem auto;
  padding: 0 1rem;
  width: 100%;
`

export const Fade = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 75px;
  z-index: 100;
  background: linear-gradient(
    to top,
    rgb(255, 255, 255) 0%,
    rgb(48, 47, 44, 0) 100%
  );
`

export const Line = styled.hr`
  background-color: black;
  border-width: 0px;
  height: 1px;
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : "0px")};
`

export const LineChartWrapper = styled.div`
  width: 80%;
  height: 500px;
`

export const Heading = styled.h2`
  width: 40rem;
  margin: 0 auto;
  padding: 1rem;
`

export const ScrollyStep = styled.div`
  margin: 50vh 0;
  border: 1px solid gray;
  padding: 15px;
  z-index: 1000;
  background: white;
  width: 600px;
  text-align: center;
`

export const WaffleChartWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`

export const WaffleChartBounds = styled.div`
  display: flex;
  width: 150px;
  height: 150px;
  flex-wrap: wrap;
  flex-direction: column;
  outline: 4px black solid;
  margin-left: 4px;
  &:hover {
    cursor: ${props => (props.clickable ? "pointer" : "auto")};
  }
`

export const Block = styled.div`
  height: 15px;
  width: 15px;
  border: 1px solid black;
  background: ${props => props.color};
`

export const WaffleChartLabel = styled.div`
  width: 50%;
`

export const Percentage = styled.div`
  font-family: "National 2 Web Bold";
  -webkit-text-stroke: 1.5px black;
  font-size: 36px;
  color: ${props => (props.color ? props.color : "inherit")};
`

export const WaffleTitle = styled.div`
  //margin-bottom: 10px;
`

export const SlopeChartWrapper = styled.div`
  height: 80vh;
`

export const WaffleMultiplesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 15px;
  margin-right: 15px;
`

export const TitledWaffle = styled.div`
  margin: 10px;
`

export const AboveBelowChartWrapper = styled.div`
  height: 400px;
  width: 80%;
`

export const ImageWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Image = styled.img`
  height: 450px;
`

export const Callout = styled.div`
  background: ${COLORS.accent};
  outline: 4px black solid;
  display: flex;
  align-items: center;
  padding: 15px;
  margin-top: 50px;
`

// DecadeSlider

export const SlideContainer = styled.div`
  width: 70%;
`

export const Slider = styled.input`
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  width: 70%;
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
  transition: opacity 0.2s;
  height: 1px;
  background: black;

  ::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 12px; /* Set a specific slider handle width */
    height: 12px; /* Slider handle height */
    background: ${COLORS.accent};
    outline: 2px solid black;
    cursor: pointer; /* Cursor on hover */
  }

  ::-moz-range-thumb {
    width: 12px; /* Set a specific slider handle width */
    height: 12px; /* Slider handle height */
    background: ${COLORS.accent};
    cursor: pointer; /* Cursor on hover */
  }
`
