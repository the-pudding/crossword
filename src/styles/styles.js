import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "National 2 Web", "Helvetica Neue", sans-serif;
    background-color: white;
    color: black;
  }  

  h1 {
    font-family: "Tiempos Headline";
    font-size: 64px;
    line-height: 77px;
    text-align: center;
  }

  strong {
    font-family: "National 2 Web Bold";
  }

  button {
    font-size: 14px;
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

export const EssayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px;
`

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const SmallNote = styled.p`
  font-size: 14px;
  width: 40rem;
  margin: 0 auto;
  padding: 1rem;
`

export const Prose = styled.p`
  font-family: "Tiempos Text";
  font-size: 18px;
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

// export const CrosswordWaffleWrapper = styled.div`
//   margin-top: 100px;
//   margin-bottom: 100px;
//   position: sticky;
//   top: 100px;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `

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
