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
    color: ${COLORS.mainColor};
    font-size: inherit;
  }  

  h1 {
    font-family: "Tiempos Headline";
    font-size: 3rem;
    text-align: center;
    color: ${COLORS.mainColor};
  }

  h2 {
    font-family: "Tiempos Headline";
    font-size: 1.5rem;
    color: ${COLORS.mainColor};
  }

  h3 {
    font-family: "National 2 Web Bold";
    font-size: 0.8em;
    color: ${COLORS.mainColor};

  }

  strong {
    font-family: "National 2 Web Bold";
  }

  button {
    font-size: 0.8rem;
    padding: 0.3rem;
    background: #efefef;
    border-radius: 4px;
    border: none;
    margin-right: 10px;

    &:hover {
      cursor: pointer;
      background: ${COLORS.crosswordYellowLight};
    }
    &:last-of-type {
      margin-right: 0px;
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
  border: 4px solid ${COLORS.mainColor};
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

export const Callout = styled.a`
  text-decoration: none;
  background: ${COLORS.yellow};
  border: 4px ${COLORS.mainColor} solid;
  display: flex;
  align-items: center;
  padding: 15px;
  margin-top: 50px;
  font-size: 0.9rem;

  transition: background 0.5s ease;

  &:hover {
    text-decoration: none;
    color: ${COLORS.mainColor};
    background: ${COLORS.crosswordYellowLight};
  }

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
  font-size: 0.7rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media ${devices.mobile} {
    font-size: 0.6rem;
  }
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
  background-color: ${props => (props.color ? props.color : COLORS.mainColor)};
  border-width: 0px;
  height: 1px;
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : "0px")};
`

export const SkipButtonWrapper = styled.div`
  width: 100%;
  margin: 1rem auto;
  padding: 0 1rem;
  max-width: 620px;
`

// Crossword
export const CrosswordChartWrapper = styled.div`
  height: 600px;
  width: 100%;
  margin-top: 100px;

  @media ${devices.tablet} {
    height: auto;
    margin-top: 45px;
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
  text-anchor: middle;
  font-size: 0.9rem;

  @media ${devices.mobile} {
    font-size: 0.8rem;
  }
`

// WaffleChart
export const WaffleChartWrapper = styled.div`
  margin: ${props => (props.margin ? props.margin : "0")};
  display: flex;
  width: 100%;

  @media ${devices.mobile} {
    margin: 0;
  }
`

export const WaffleChartBounds = styled.div`
  display: flex;
  position: relative;
  width: ${waffleBlockSize.normal * 10}px;
  height: ${waffleBlockSize.normal * 10}px;
  flex-wrap: wrap;
  outline: ${borderSize.normal}px ${COLORS.mainColor} solid;
  margin-left: ${borderSize.normal}px;
  flex-shrink: 0;

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
  margin-left: 17px;
  width: auto;

  @media ${devices.mobile} {
    height: ${waffleBlockSize.mobile * 10 + 5}px;
    margin-left: 10px;
  }
`

export const GroupHeadingWrapper = styled.div`
  width: 40%;

  @media ${devices.mobile} {
    width: 50%;
  }
`

export const GroupHeading = styled.h3`
  width: ${waffleBlockSize.normal * 10}px;
  padding-left: ${borderSize.normal}px;
  text-align: center;

  @media ${devices.mobile} {
    text-align: start;
    padding-left: 0px;
    margin-bottom: 0px;
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

  outline: 1px solid ${COLORS.mainColor};

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
  }
`

export const Percentage = styled.div`
  font-family: "National 2 Web Bold";
  font-size: ${percentSize.normal};
  line-height: ${percentSize.normal};
  color: ${props =>
    props.color === COLORS.offWhite
      ? COLORS.darkGrey
      : props.color
      ? props.color
      : "inherit"};
  -webkit-text-stroke: ${props =>
    props.color === "white" ? `1px ${COLORS.mainColor}` : null};

  @media ${devices.mobile} {
    font-size: ${percentSize.mobile};
    line-height: ${percentSize.mobile};
    width: ${props => (props.outline ? "15%" : null)};
    text-align: ${props => (props.outline ? "right" : null)};
  }
`

export const CensusSplit = styled.h3`
  @media ${devices.mobile} {
    display: none;
  }
`

export const FakePubTitle = styled.div`
  width: 20%;
  visibility: hidden;

  @media ${devices.mobile} {
    display: none;
  }
`

export const WaffleRow = styled.div`
  display: flex;
  margin-bottom: 20px;

  @media ${devices.mobile} {
    flex-direction: column;
  }
`

export const TitleSection = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;

  @media ${devices.mobile} {
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
  }
`

export const WaffleSections = styled.div`
  display: flex;
  width: 80%;

  @media ${devices.mobile} {
    width: 100%;
  }
`

export const PublicationTitle = styled.h2`
  @media ${devices.mobile} {
    font-size: 1rem;
    margin: 0;
    flex-shrink: 0;
  }
`

export const WaffleYearLabel = styled.div`
  display: flex;
  flex-direction: column;
  color: #757575;
  font-size: 0.8rem;
  line-height: 0.9rem;

  @media ${devices.mobile} {
    font-size: 0.6rem;
    line-height: 0.6rem;
    margin-left: 10px;
    flex-direction: row;
    align-items: center;
    padding-right: 0px !important;
  }
`

export const WaffleYearSelect = styled.select`
  font-size: 0.8rem;
  margin-bottom: 10px;
  border-radius: 5px;
  background: #f4f4f4;
  width: 66px;
  border: 1px solid #c9c9c9;

  @media ${devices.mobile} {
    font-size: 0.6rem;
    margin-bottom: 0px;
    margin-right: 10px;
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
  border-bottom: 4px solid ${COLORS.mainColor};
`

export const TableRow = styled.tr`
  height: 3.5rem;
  border-top: 1px solid ${COLORS.mainColor};
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
  outline: 2px ${COLORS.mainColor} solid;
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
  margin-bottom: 20px;

  @media ${devices.mobile} {
    margin-bottom: 0px;
    width: 30%;
  }
`

export const OverviewRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;

  &:last-of-type {
    margin-bottom: 0px;
  }

  @media ${devices.mobile} {
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`

export const OverviewLabel = styled.div`
  font-size: 0.8rem;
  line-height: 0.8rem;

  @media ${devices.mobile} {
    font-size: 0.7rem;
    line-height: 0.7rem;
    margin-left: 7px;
    width: 85%;
  }
`

export const FakeFiller = styled.h3`
  display: none;

  @media ${devices.mobile} {
    display: flex;
    visibility: hidden;
  }
`

// SidewaysBar
const sidewaysBarBorder = 4
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
    left: -78px;
  }
`

export const BarLabel = styled.div`
  height: ${sidewaysBarBlock.normal}px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 0.8rem;

  @media ${devices.mobile} {
    height: ${sidewaysBarBlock.mobile}px;
    font-size: 0.6rem;
  }
`

export const SidewaysBarBounds = styled.div`
  display: flex;
  flex-wrap: wrap;
  outline: ${sidewaysBarBorder}px ${COLORS.mainColor} solid;
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
  outline: 1px ${COLORS.mainColor} solid;
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
  border-top: 1px ${COLORS.mainColor} solid;
  border-bottom: 1px ${COLORS.mainColor} solid;
  border-left: 1px ${COLORS.mainColor} solid;

  &:last-of-type {
    border-right: 1px ${COLORS.mainColor} solid;
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
  color: ${COLORS.grey};
`

export const AnswerCaption = styled.div`
  color: ${COLORS.darkGrey};
  margin-top: 20px;
  font-size: 0.8rem;
`

export const QuestionCircle = styled.div`
  width: 16px;
  height: 16px;
  border: 1px ${COLORS.mainColor} solid;
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
