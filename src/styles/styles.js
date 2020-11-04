import styled, { createGlobalStyle } from "styled-components"
import COLORS from "./colors.js"

// Device sizing
const maxSizes = {
  smallMobile: "320px",
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "2560px",
}
const devices = {
  smallMobile: `(max-width: ${maxSizes.smallMobile})`,
  mobile: `(max-width: ${maxSizes.mobile})`,
  tablet: `(max-width: ${maxSizes.tablet})`,
  laptop: `(max-width: ${maxSizes.laptop})`,
  desktop: `(max-width: ${maxSizes.desktop})`,
}

// Waffle sizing
const waffleBlockSize = {
  normal: 15,
  mobile: 8,
}
const percentSize = {
  normal: "1.5rem",
  mobile: "1rem",
}
const labelTextSize = {
  normal: "0.7rem",
  mobile: "0.5rem",
}
const borderSize = {
  normal: 4,
  mobile: 2,
}

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 20px;

    @media ${devices.mobile} {
      font-size: 18px;
    }
  }

  body {
    font-family: "National 2 Web", "Helvetica Neue", sans-serif;
    background-color: white;
    color: black;
    font-size: inherit;
  }  

  h1 {
    font-family: "Tiempos Headline";
    font-size: 3rem;
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
      color: ${COLORS.blue};
      text-decoration: underline;
    }
  }

  #blue {
    color: ${COLORS.blue};
  }
  #pink {
    color: ${COLORS.pink};
  }
`

export const EssayWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 768px;
  margin: 0 auto;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
  width: 100%;

  @media ${devices.tablet} {
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

export const Prose = styled.p`
  font-family: "Tiempos Text";
  max-width: 620px;
  margin: ${props => (props.margin ? props.margin : "1rem auto")};
  padding: 0 1rem;
  width: 100%;

  span.highlighted {
    background: yellow;
  }
`

export const Emphasis = styled.div`
  width: 100%;
  border: 4px solid black;
  margin: 2rem auto;
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
  background: ${COLORS.yellow};
  outline: 4px black solid;
  display: flex;
  align-items: center;
  padding: 15px;
  margin-top: 50px;

  @media ${devices.mobile} {
    font-size: 0.8rem;
  }
`

export const TextNote = styled.p`
  font-size: 0.8rem;
  max-width: 620px;
  margin: 1rem auto;
  padding: 0 1rem;
  width: 100%;

  @media ${devices.mobile} {
    text-align: center;
  }
`

export const ChartNote = styled.div`
  color: #757575;
  font-size: 0.7em;
  width: 80%;
  margin-top: 1em;
  margin-bottom: 1em;
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

// Crossword
export const CrosswordChartWrapper = styled.div`
  height: 600px;
  width: 100%;
  margin-top: 100px;

  @media ${devices.tablet} {
    height: auto;
    margin-top: 25px;
  }
`

export const PuzzleWaffles = styled.div`
  @media ${devices.tablet} {
    display: flex;
    justify-content: space-evenly;
  }
`

// LineChart
export const LineChartWrapper = styled.div`
  width: 90%;
  height: 500px;
  position: relative;

  @media ${devices.mobile} {
    height: 350px;
    width: 100%;
  }
`

const annotationLocations = {
  gardner: {
    normal: {
      x: "30%",
      y: "52%",
    },
    tablet: {
      x: "30%",
      y: "52%",
    },
    mobile: {
      x: "30%",
      y: "52%",
    },
    smallMobile: {
      x: "26%",
      y: "50%",
    },
  },
  duVernay: {
    normal: {
      x: "75%",
      y: "39%",
    },
    tablet: {
      x: "77%",
      y: "39%",
    },
    mobile: {
      x: "71%",
      y: "39%",
    },
    smallMobile: {
      x: "69%",
      y: "39%",
    },
  },
  otherAvas: {
    normal: {
      x: "43%",
      y: "81%",
    },
    tablet: {
      x: "43%",
      y: "81%",
    },
    mobile: {
      x: "43%",
      y: "81%",
    },
    smallMobile: {
      x: "40%",
      y: "80%",
    },
  },
}

export const AnnotationText = styled.div`
  position: absolute;
  font-family: "National 2 Web Bold";
  font-size: 1.5rem;
  line-height: 1.5rem;
  stroke-width: 1px;
  color: ${props => props.color};
  background: white;
  top: ${props => annotationLocations[props.labelKey].normal.y};
  left: ${props => annotationLocations[props.labelKey].normal.x};

  @media ${devices.tablet} {
    font-size: 1.2rem;
    line-height: 1.2rem;
    top: ${props => annotationLocations[props.labelKey].tablet.y};
    left: ${props => annotationLocations[props.labelKey].tablet.x};
  }
  @media ${devices.mobile} {
    font-size: 1rem;
    line-height: 1rem;
    top: ${props => annotationLocations[props.labelKey].mobile.y};
    left: ${props => annotationLocations[props.labelKey].mobile.x};
  }
  @media ${devices.smallMobile} {
    font-size: 1rem;
    line-height: 1rem;
    top: ${props => annotationLocations[props.labelKey].smallMobile.y};
    left: ${props => annotationLocations[props.labelKey].smallMobile.x};
  }
`

export const AnnotationEvent = styled.text`
  font-family: "National 2 Web Bold";
  text-anchor: middle;

  @media ${devices.mobile} {
    font-size: 0.9rem;
  }
`

// WaffleChart
export const WaffleChartWrapper = styled.div`
  margin: ${props => (props.margin ? props.margin : "0")};
  display: flex;
  //width: ${waffleBlockSize.normal * 10 + 2 * borderSize.normal + 60}px;
  width: 100%;

  @media ${devices.mobile} {
    //width: ${waffleBlockSize.mobile * 10 + 2 * borderSize.mobile + 60}px;
    margin: 0;
  }
`

export const WaffleChartBounds = styled.div`
  display: flex;
  width: ${waffleBlockSize.normal * 10}px;
  height: ${waffleBlockSize.normal * 10}px;
  flex-wrap: wrap;
  outline: ${borderSize.normal}px black solid;
  margin-left: ${borderSize.normal}px;
  &:hover {
    cursor: ${props => (props.clickable ? "pointer" : "auto")};
  }

  @media ${devices.mobile} {
    width: ${waffleBlockSize.mobile * 10}px;
    height: ${waffleBlockSize.mobile * 10}px;
  }
`

export const WaffleChartLabels = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: ${waffleBlockSize.normal * 10 + 5}px;
  margin-left: 10px;
  width: 100px;

  @media ${devices.mobile} {
    height: ${waffleBlockSize.mobile * 10 + 5}px;
    width: 40px;
  }
`

export const CensusSplitLabel = styled.div`
  font-size: 0.7rem;
  line-height: 0.7rem;
  color: #757575;

  @media ${devices.mobile} {
    display: none;
  }
`

export const Block = styled.div`
  width: ${waffleBlockSize.normal}px;
  height: ${waffleBlockSize.normal}px;
  border-bottom: ${props =>
    props.borderBottom
      ? `${borderSize.normal}px solid ${COLORS.yellow}`
      : "0px"};
  border-right: ${props =>
    props.borderRight
      ? `${borderSize.normal}px solid ${COLORS.yellow}`
      : "0px"};
  border-left: ${props =>
    props.borderLeft ? `${borderSize.normal}px solid ${COLORS.yellow}` : "0px"};
  border-top: ${props =>
    props.borderTop ? `${borderSize.normal}px solid ${COLORS.yellow}` : "0px"};

  outline: 1px solid black;

  background: ${props => props.color};

  @media ${devices.mobile} {
    width: ${waffleBlockSize.mobile}px;
    height: ${waffleBlockSize.mobile}px;
  }
`

export const WaffleChartLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const WaffleLabelText = styled.div`
  font-family: "National 2 Web Bold";
  font-size: ${labelTextSize.normal};
  line-height: ${labelTextSize.normal};

  @media ${devices.mobile} {
    font-size: ${labelTextSize.mobile};
    line-height: ${labelTextSize.mobile};
    overflow-wrap: anywhere;
  }
`

export const Percentage = styled.div`
  font-family: "National 2 Web Bold";
  font-size: ${percentSize.normal};
  line-height: ${percentSize.normal};
  color: ${props => (props.color ? props.color : "inherit")};
  -webkit-text-stroke: ${props =>
    props.color === "white" ? "1px black" : "0px"};

  @media ${devices.mobile} {
    font-size: ${percentSize.mobile};
    line-height: ${percentSize.mobile};
  }
`

export const CensusSplit = styled.h3`
  @media ${devices.mobile} {
    display: none;
  }
`

export const WaffleRow = styled.div`
  display: flex;
  margin-bottom: 20px;
`

export const PublicationTitle = styled.h2`
  @media ${devices.mobile} {
    font-size: 1rem;
  }
`

export const WaffleYearLabel = styled.div`
  color: #757575;
  font-size: 0.8rem;

  @media ${devices.mobile} {
    font-size: 0.5rem;
  }
`

// Table
export const TableWrapper = styled.table`
  width: 80%;

  @media ${devices.mobile} {
    font-size: 0.8rem;
  }
`

export const HeaderRow = styled.tr`
  border-bottom: 4px solid black;
`

export const TableRow = styled.tr`
  height: 3.5rem;
  border-top: 1px solid black;
`

// AboveBelow
export const AboveBelowWrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 3rem;

  @media ${devices.mobile} {
    margin-bottom: 0;
    margin-top: 2rem;
  }
`

export const BothChartsWrapper = styled.div`
  display: flex;

  @media ${devices.mobile} {
    flex-direction: column;
  }
`

// AboveBelowChart
export const AboveBelowChartWrapper = styled.div`
  flex-basis: 80%;
  margin-left: 2rem;
  margin-top: 20px;
  position: relative;

  @media ${devices.mobile} {
    width: 100%;
    margin-left: 0;
  }
`

export const YearLabels = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 0.8rem;
  margin-top: 15px;
`

export const StackedSquaresWrapper = styled.div`
  height: 350px;
`

export const Tooltip = styled.div`
  position: absolute;
  top: ${props => (props.hoverY ? `${props.hoverY}px` : 0)};
  left: ${props => (props.hoverX ? `${props.hoverX}px` : 0)};
  background: white;
  outline: 2px black solid;
  width: 200px;
  padding: 15px;
  textoverflow: scroll;
`

// Overview
export const OverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  margin-top: 20px;

  @media ${devices.mobile} {
    flex-direction: row;
    align-items: center;
    width: 100%;
  }
`

export const Labels = styled.div`
  width: 100%;

  @media ${devices.mobile} {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
  }
`
export const CluesChart = styled.div`
  width: 100%;

  @media ${devices.mobile} {
    width: 30%;
  }
`

export const OverviewRow = styled.div`
  display: flex;
  flex-direction: column;

  @media ${devices.mobile} {
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`

export const OverviewLabel = styled.div`
  font-size: 0.8rem;

  @media ${devices.mobile} {
    font-size: 0.7rem;
    margin-left: 10px;
  }
`

// SidewaysBar
const sidewaysBarBorder = 4
// const sidewaysBarBlock = 25
const sidewaysBarBlock = {
  normal: 25,
  mobile: 15,
}

export const SidewaysBars = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;

  @media ${devices.tablet} {
    flex-direction: column;
    align-items: center;
  }
`

export const SidewaysBarWrapper = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;

  @media ${devices.tablet} {
    width: auto;
    position: relative;
    margin-bottom: 20px;
  }
`

export const BarLabels = styled.div`
  display: ${props => (props.showLabels ? "flex" : "none")};
  flex-direction: column;
  width: 105px;
  margin-right: 10px;

  @media ${devices.tablet} {
    display: flex;
    position: absolute;
    left: -115px;
    font-size: 0.8rem;
  }
  @media ${devices.mobile} {
    left: -85px;
  }
`

export const BarLabel = styled.div`
  height: ${sidewaysBarBlock.normal}px;
  text-align: end;

  @media ${devices.mobile} {
    height: ${sidewaysBarBlock.mobile}px;
  }
`

export const SidewaysBarBounds = styled.div`
  display: flex;
  flex-wrap: wrap;
  outline: ${sidewaysBarBorder}px black solid;
  width: ${10 * sidewaysBarBlock.normal}px;
  height: ${5 * sidewaysBarBlock.normal}px;

  @media ${devices.mobile} {
    width: ${10 * sidewaysBarBlock.mobile}px;
    height: ${5 * sidewaysBarBlock.mobile}px;
  }
`

export const SidewaysBarBlock = styled.div`
  height: ${sidewaysBarBlock.normal}px;
  width: ${sidewaysBarBlock.normal}px;
  outline: 1px black solid;
  background: ${props => props.color};

  @media ${devices.mobile} {
    height: ${sidewaysBarBlock.mobile}px;
    width: ${sidewaysBarBlock.mobile}px;
  }
`

// DecadeSlider

export const DecadeSliderWrapper = styled.div`
  margin: 3rem 0 3rem 0;
`

// Clues in text
export const IntroCluesExample = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  max-width: 620px;
  margin: 1rem auto;
  padding: 0 1rem;

  @media ${devices.mobile} {
    flex-direction: column;
  }
`

export const ClueExamplesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;

  @media ${devices.tablet} {
    width: 100%;
    align-items: center;
  }
`

export const ClueAnswerPair = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
`

export const AnswerBox = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px black solid;
  border-bottom: 1px black solid;
  border-left: 1px black solid;

  &:last-of-type {
    border-right: 1px black solid;
  }

  @media ${devices.mobile} {
    height: 25px;
    width: 25px;
  }
`

export const WrittenNote = styled.div`
  font-family: "Mansalva";
  position: absolute;
  top: 0px;
  left: ${props => (props.left ? "-225px" : null)};
  right: ${props => (props.left ? "0px" : "-250px")};
  color: lightgrey;
`

export const AnswerCaption = styled.div`
  color: #757575;
  margin-top: 20px;
  font-size: 0.8rem;
`

export const QuestionCircle = styled.div`
  width: 16px;
  height: 16px;
  border: 1px black solid;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  line-height: 0.9rem;
  align-self: center;
  margin-right: 20px;

  &:hover {
    cursor: pointer;
    color: ${COLORS.blue};
    border-color: ${COLORS.blue};
  }
`
