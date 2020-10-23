import styled, { createGlobalStyle } from "styled-components"
import COLORS from "./colors.js"

// Waffle sizing
const smallBlockSize = 10
const regularBlockSize = 15
const borderSize = 4

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

  h2 {
    font-family: "Tiempos Headline";
    font-size: 1.5rem;
  }

  h3 {
    font-family: "National 2 Web Bold";
    font-size: 0.8em;
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

  a {
    text-decoration: underline;
    color: inherit;

    &:hover {
      color: ${COLORS.accent};
      text-decoration: underline;
    }
  }
`

export const EssayWrapper = styled.main`
  max-width: 743px;
  margin: 0 auto;
  font-size: 16px;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
  width: 100%;
`

export const Prose = styled.p`
  font-family: "Tiempos Text";
  max-width: 620px;
  margin: 1rem auto;
  padding: 0 1rem;
  width: 100%;
`

export const Emphasis = styled.div`
  width: 100%;
  border: 4px solid black;
  margin: 2rem auto;
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
  width: 100%;
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
  margin: ${props => (props.margin ? props.margin : "0")};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${props =>
    props.small
      ? `${smallBlockSize * 10 + 2 * borderSize}px`
      : `${regularBlockSize * 10 + 2 * borderSize}px`};
`

export const WaffleChartBounds = styled.div`
  display: flex;
  width: ${props =>
    props.small ? `${smallBlockSize * 10}px` : `${regularBlockSize * 10}px`};
  height: ${props =>
    props.small ? `${smallBlockSize * 10}px` : `${regularBlockSize * 10}px`};
  flex-wrap: wrap;
  flex-direction: column;
  outline: ${borderSize}px black solid;
  margin-left: ${borderSize}px;
  &:hover {
    cursor: ${props => (props.clickable ? "pointer" : "auto")};
  }
`

export const WafflesWithTitles = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: space-evenly;
  width: 100%;
  margin-top: 40px;
  //position: relative;
`

export const LinedTitle = styled.div`
  position: absolute;
  width: 100%;
  top: ${props => (props.top ? props.top : "0")};
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Block = styled.div`
  height: ${props =>
    props.small ? `${smallBlockSize}px` : `${regularBlockSize}px`};
  width: ${props =>
    props.small ? `${smallBlockSize}px` : `${regularBlockSize}px`};
  border-bottom: ${props =>
    props.borderBottom ? `${borderSize}px solid black` : "1px solid black"};
  border-right: ${props =>
    props.borderRight ? `${borderSize}px solid black` : "1px solid black"};
  border-left: ${props =>
    props.borderLeft ? `${borderSize}px solid black` : "1px solid black"};
  border-top: ${props =>
    props.borderTop ? `${borderSize}px solid black` : "1px solid black"};

  background: ${props => props.color};
`

export const WaffleChartLabel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.i === 0 ? "flex-start" : "flex-end")};
`

export const WaffleLabelText = styled.div`
  font-size: 0.8rem;
  text-align: ${props => (props.i === 0 ? "start" : "end")};
`

export const Percentage = styled.div`
  font-family: "National 2 Web Bold";
  -webkit-text-stroke: ${props => (props.small ? "1px black" : "1.5px black")};
  font-size: ${props => (props.small ? "1.5rem" : "2rem")};
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
export const TableWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
`

export const TableRow = styled.div`
  display: flex;
  padding-top: 5px;
  padding-bottom: 5px;
`

export const HeadingDivider = styled.hr`
  width: 100%;
  background-color: black;
  border-width: 0px;
  height: 4px;
`

export const TableDivider = styled.hr`
  width: 100%;
  background-color: black;
  border-width: 0px;
  height: 1px;
`
export const WaffleRow = styled.div`
  width: 100%;
  display: flex;
`

export const WaffleRowItem = styled.div`
  display: flex;
  flex-basis: ${props => (props.flexBasis ? props.flexBasis : "100%")};
  justify-content: center;
`
