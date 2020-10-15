import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Rubik, sans-serif;
    background-color: white;
    color: black;
  }
`

export const EssayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 100%;
`

export const LineChartWrapper = styled.div`
  width: 80%;
  height: 500px;
`

export const Prose = styled.p`
  width: 40rem;
  margin: 0 auto;
  padding: 1rem;
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

export const CrosswordWaffleWrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const WaffleChartBounds = styled.div`
  display: flex;
  width: 120px;
  height: 120px;
  flex-wrap: wrap;
  &:hover {
    cursor: ${props => (props.clickable ? "pointer" : "auto")};
  }
`

export const WaffleChartWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
`

export const Block = styled.div`
  height: 10px;
  width: 10px;
  margin: 1px;
  background: ${props => props.color};
`

export const WaffleChartLabel = styled.div`
  color: ${props => props.color};
`

export const Percentage = styled.div`
  font-weight: bold;
  font-size: ${props => (props.numLabels === 2 ? "36px" : "26px")};
`

export const WaffleTitle = styled.div`
  margin-bottom: 10px;
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

export const StackedBarChartWrapper = styled.div`
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
