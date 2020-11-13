import styled, { createGlobalStyle } from "styled-components"
import COLORS from "./colors.js"
import Edit from "../svg/mdi-edit.svg"

// Device sizing
const maxSizes = {
  smallMobile: "320px",
  mobile: "480px",
  tablet: "767px",
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
  tablet: 10,
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
      font-size: 16px;
    }
  }
  *, *::after, *::before { 
    box-sizing:border-box; 
  }

  body {
    font-family: "National 2 Web", "Helvetica Neue", sans-serif;
    background-color: white;
    color: ${COLORS.mainColor};
    font-size: inherit;
    line-height: 1.5715;
  }  

  h1 {
    font-family: "Tiempos Headline";
    font-size: 3rem;
    line-height: 1.2;
    text-align: center;
    color: ${COLORS.mainColor};

    @media ${devices.mobile} {
      font-size: 2.5rem;
    }
    @media ${devices.smallMobile} {
      font-size: 2.2rem;
    }
  }

  h2 {
    font-family: "Tiempos Headline";
    font-size: 1.5rem;
    color: ${COLORS.mainColor};
  }

  h3 {
    font-family: "National 2 Web Bold";
    font-size: 0.8rem;
    color: ${COLORS.mainColor};
  }

  strong {
    font-family: "National 2 Web Bold";
  }

  button {
    font-size: 0.8rem;
    font-family: "National 2 Web";
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
    transition: background-position 80ms ease-out;
    background-image: linear-gradient(180deg,transparent 0,${COLORS.crosswordBlue} 0);
    background-position: 0 .9em;
    background-repeat: no-repeat;
    box-shadow: none;
    padding: 0;
    text-decoration: none;
    color: ${COLORS.mainColor};
    pointer-events: all;

    &:hover {
      color: ${COLORS.mainColor};
      background-position: 0 0;
    }
  }

  span#engineers {
    background: ${COLORS.yellow};
  }
  span#athletes{
    background: ${COLORS.yellow};
  }
  span#queer{
    background: ${COLORS.yellow};
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
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;

  @media ${devices.tablet} {
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

  @media ${devices.mobile} {
    padding: 0;
  }
`

export const Emphasis = styled.div`
  width: 100%;
  border: 4px solid ${COLORS.mainColor};
  margin: 2rem auto;
`

export const HowWeDidIt = styled.div`
  font-size: 0.7rem;
  background-color: #efefef;
  padding: 1rem 0;
  max-width: 620px;
  margin: ${props => (props.margin ? props.margin : "1rem auto")};
  width: 100%;
`

export const Method = styled.div`
  max-width: 620px;
  margin: ${props => (props.margin ? props.margin : "0.4rem auto")};
  padding: 0 1rem;
  width: 100%;
  font-size: 0.7rem;

  @media ${devices.mobile} {
    padding: 0;
  }
`

export const MethodNote = styled.div`
  max-width: 620px;
  margin: ${props => (props.margin ? props.margin : "0.4rem auto")};
  padding: 0 1rem;
  width: 100%;
  font-size: 0.5rem;
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

export const LogoWrapper = styled.a`
  margin-top: 25px;
  background-image: none;
`

export const Callout = styled.a`
  text-decoration: none;
  background: ${COLORS.yellow};
  border: 4px ${COLORS.mainColor} solid;
  display: flex;
  align-items: center;
  padding: 15px;
  font-size: 0.9rem;

  transition: background 0.5s ease;

  &:hover {
    text-decoration: none;
    color: ${COLORS.mainColor};
    background: ${COLORS.crosswordBlue};
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
  color: ${COLORS.darkGrey};
  font-size: 0.7rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;

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
  display: flex;
  align-items: center;
  font-family: "Tiempos Text";
  width: 100%;
  margin: 1rem auto;
  padding: 0 1rem;
  max-width: 620px;
`

// Crossword
export const CrosswordChartWrapper = styled.div`
  height: 600px;
  width: 100%;
  margin-top: 80px;

  @media ${devices.tablet} {
    height: auto;
    margin-top: 45px;
  }
`

export const ClueLabels = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media ${devices.tablet} {
    display: none;
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
      x: "28%",
      y: "52%",
    },
    mobile: {
      x: "28%",
      y: "55%",
    },
    smallMobile: {
      x: "26%",
      y: "50%",
    },
  },
  duVernay: {
    normal: {
      x: "73%",
      y: "39%",
    },
    tablet: {
      x: "71%",
      y: "39%",
    },
    mobile: {
      x: "68%",
      y: "34%",
    },
    smallMobile: {
      x: "67%",
      y: "32%",
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
      y: "80%",
    },
    smallMobile: {
      x: "40%",
      y: "78%",
    },
  },
}

export const AnnotationText = styled.div`
  position: absolute;
  font-family: "National 2 Web Bold";
  font-size: 1.25rem;
  line-height: 1.25rem;
  stroke-width: 1px;
  color: ${props => props.color};
  background: white;
  top: ${props => annotationLocations[props.labelKey].normal.y};
  left: ${props => annotationLocations[props.labelKey].normal.x};

  @media ${devices.tablet} {
    font-size: 1.1rem;
    line-height: 1.1rem;
    top: ${props => annotationLocations[props.labelKey].tablet.y};
    left: ${props => annotationLocations[props.labelKey].tablet.x};
  }
  @media ${devices.mobile} {
    font-size: 0.9rem;
    line-height: 0.9rem;
    top: ${props => annotationLocations[props.labelKey].mobile.y};
    left: ${props => annotationLocations[props.labelKey].mobile.x};
  }
  @media ${devices.smallMobile} {
    font-size: 0.8rem;
    line-height: 0.8rem;
    top: ${props => annotationLocations[props.labelKey].smallMobile.y};
    left: ${props => annotationLocations[props.labelKey].smallMobile.x};
  }
`

export const AnnotationEvent = styled.text`
  text-anchor: middle;
  font-size: 0.8rem;

  @media ${devices.mobile} {
    font-size: 0.6rem;
  }
`

export const HorizontalTickLabel = styled.text`
  font-size: 0.8rem;
  text-anchor: middle;
  transform: translate(-3px, 20px);

  @media ${devices.mobile} {
    font-size: 0.6rem;
  }
`

export const VerticalTickLabel = styled.text`
  font-size: 0.8rem;
  alignment-baseline: middle;
  transform: translate(-25px, -10px);

  @media ${devices.mobile} {
    font-size: 0.6rem;
  }
`

// WaffleChart
export const WaffleChartWrapper = styled.div`
  margin: ${props => (props.margin ? props.margin : "0")};
  display: flex;
  width: 100%;

  @media ${devices.tablet} {
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

  @media ${devices.tablet} {
    width: ${waffleBlockSize.tablet * 10}px;
    height: ${waffleBlockSize.tablet * 10}px;
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
  position: relative;

  @media ${devices.tablet} {
    height: ${waffleBlockSize.tablet * 10 + 5}px;
    margin-left: 10px;
  }
  @media ${devices.mobile} {
    height: ${waffleBlockSize.mobile * 10 + 5}px;
    margin-left: 10px;
  }
`

export const GroupHeadingWrapper = styled.div`
  width: 40%;

  @media ${devices.tablet} {
    width: 50%;
  }
`

export const GroupHeading = styled.h3`
  width: ${waffleBlockSize.normal * 10}px;
  padding-left: ${borderSize.normal}px;
  text-align: center;

  @media ${devices.tablet} {
    text-align: start;
    padding-left: 0px;
    margin-bottom: 0px;
  }
`

export const CensusSplitLabel = styled.div`
  font-size: 0.7rem;
  line-height: 0.7rem;
  color: #757575;
  position: absolute;
  top: ${props => props.splitRow * waffleBlockSize.normal - 8}px;
  width: 100px;

  @media ${devices.tablet} {
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

  @media ${devices.tablet} {
    width: ${waffleBlockSize.tablet}px;
    height: ${waffleBlockSize.tablet}px;
  }
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

  @media ${devices.tablet} {
    font-size: ${labelTextSize.tablet};
    line-height: ${labelTextSize.tablet};
  }
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

  @media ${devices.tablet} {
    font-size: ${percentSize.mobile};
    line-height: ${percentSize.mobile};
    width: ${props => (props.outline ? "15%" : null)};
    text-align: ${props => (props.outline ? "right" : null)};
  }
`

export const CensusSplit = styled.h3`
  @media ${devices.tablet} {
    display: none;
  }
`

export const FakePubTitle = styled.div`
  width: 20%;
  visibility: hidden;

  @media ${devices.tablet} {
    display: none;
  }
`

export const WaffleRow = styled.div`
  display: flex;
  margin-bottom: 20px;

  @media ${devices.tablet} {
    flex-direction: column;
  }
`

export const TitleSection = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;

  @media ${devices.tablet} {
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
  }
`

export const WaffleSections = styled.div`
  display: flex;
  width: 80%;

  @media ${devices.tablet} {
    width: 100%;
  }
`

export const PublicationTitle = styled.h2`
  margin: 0;

  @media ${devices.tablet} {
    font-size: 1rem;
    flex-shrink: 0;
  }
`

export const WaffleYearLabel = styled.div`
  display: flex;
  flex-direction: column;
  color: #757575;
  font-size: 0.8rem;
  line-height: 0.9rem;

  @media ${devices.tablet} {
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

  @media ${devices.tablet} {
    font-size: 0.6rem;
    margin-bottom: 0px;
    margin-right: 10px;
  }
`

// Table
export const TableWrapper = styled.table`
  width: 80%;
  font-size: 0.8rem;
  border-collapse: collapse;

  @media ${devices.mobile} {
    font-size: 0.7rem;
    width: 100%;
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

  @media ${devices.tablet} {
    margin-bottom: 0;
    margin-top: 2rem;
  }
`

export const BothChartsWrapper = styled.div`
  display: flex;

  @media ${devices.tablet} {
    flex-direction: column;
  }
`

// AboveBelowChart
export const AboveBelowChartWrapper = styled.div`
  flex-basis: 80%;
  margin-left: 2rem;
  margin-top: 20px;
  position: relative;

  @media ${devices.tablet} {
    width: 100%;
    margin-left: 0;
  }
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

export const SideLabel = styled.text`
  font-size: 0.8rem;
  transform: translate(18px, 15px);

  @media ${devices.tablet} {
    transform: translate(17px, 13px);
    font-size: 0.6rem;
  }
`

// Overview
export const OverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  margin-top: 20px;

  @media ${devices.tablet} {
    flex-direction: row;
    width: 100%;
  }
`

export const Labels = styled.div`
  width: 100%;

  @media ${devices.tablet} {
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

  @media ${devices.tablet} {
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

  @media ${devices.tablet} {
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`

export const OverviewLabel = styled.div`
  font-size: 0.8rem;
  line-height: 0.8rem;

  @media ${devices.tablet} {
    font-size: 0.7rem;
    line-height: 0.7rem;
    margin-left: 7px;
    width: 85%;
  }
`

export const FakeFiller = styled.h3`
  display: none;

  @media ${devices.tablet} {
    display: flex;
    visibility: hidden;
  }
`

export const OverviewBoxWrapper = styled.div`
  height: 108px;
  width: 108px;

  @media ${devices.tablet} {
    height: 80px;
    width: 80px;
  }
`

export const OverviewRect = styled.rect`
  height: 100px;
  width: 100px;
  fill: none;
  stroke: ${COLORS.mainColor};
  stroke-width: 4px;

  @media ${devices.tablet} {
    height: 72px;
    width: 72px;
  }
`

export const OverviewSectionRect = styled.rect`
  height: 100px;
  stroke: ${COLORS.mainColor};
  stroke-width: 1px;

  @media ${devices.tablet} {
    height: 72px;
  }
`

// SidewaysBar
const sidewaysBarBorder = 4
const sidewaysBarBlock = {
  normal: 25,
  mobile: 18,
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
    width: 100%;
    margin-bottom: 25px;

    &:last-of-type {
      margin-bottom: 0px;
    }
  }
`

export const BarLabels = styled.div`
  display: ${props => (props.showLabels ? "flex" : "none")};
  flex-direction: column;
  width: 105px;
  margin-right: 10px;

  @media ${devices.tablet} {
    display: flex;
    width: auto;
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
  width: 500px;
  position: relative;

  @media ${devices.tablet} {
    width: 80%;
  }
  @media ${devices.mobile} {
    width: 90%;
  }
`

export const SliderLabel = styled.div`
  font-family: ${props =>
    props.bold ? "'National 2 Web Bold'" : "'National 2 Web'"};
  font-size: ${props => (props.bold ? "0.85rem" : "0.8rem")};

  @media ${devices.tablet} {
    font-size: ${props => (props.bold ? "0.75rem" : "0.7rem")};
  }
  @media ${devices.mobile} {
    font-size: ${props => (props.bold ? "0.65rem" : "0.6rem")};
  }
`

export const SliderTick = styled.div`
  position: absolute;
  top: -33px;
  left: 18px;
  width: 1px;
  height: 6px;
  background: ${COLORS.mainColor};
  z-index: -1000;

  @media ${devices.mobile} {
    top: -29px;
  }
`

// Clues in text
export const IntroCluesExample = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  max-width: 620px;
  margin: 1rem auto;
  padding: 0 1rem;

  @media ${devices.tablet} {
    flex-direction: column;
  }
`

export const ClueExamplesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => (props.textColor === "white" ? "auto" : "45%")};
  font-size: ${props => (props.textColor === "white" ? "0.8rem" : "inherit")};

  @media ${devices.tablet} {
    width: 100%;
    align-items: center;
  }
`

export const ClueAnswerPair = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: ${props =>
    props.textColor === "white" ? "center" : "flex-start"};
`

export const ClueExample = styled.div`
  margin-bottom: 10px;
  font-style: italic;
`

export const AnswerBox = styled.div`
  height: ${props => (props.boxSize ? `${props.boxSize}px` : "30px")};
  width: ${props => (props.boxSize ? `${props.boxSize}px` : "30px")};
  background: ${props => (props.color ? props.color : null)};
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: ${props =>
    `1px ${props.textColor ? props.textColor : COLORS.mainColor} solid`};
  border-bottom: ${props =>
    `1px ${props.textColor ? props.textColor : COLORS.mainColor} solid`};
  border-left: ${props =>
    `1px ${props.textColor ? props.textColor : COLORS.mainColor} solid`};
  color: ${props => (props.textColor ? props.textColor : COLORS.mainColor)};

  &:last-of-type {
    border-right: ${props =>
      `1px ${props.textColor ? props.textColor : COLORS.mainColor} solid`};
  }

  @media ${devices.mobile} {
    height: 25px;
    width: 25px;
  }

  @media ${devices.smallMobile} {
    height: 20px;
    width: 20px;
    font-size: 0.9rem;
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

export const EditSvg = styled(Edit)`
  width: 1rem;

  @media ${devices.mobile} {
    width: 2rem;
  }
`
