import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Rubik, sans-serif;
    background-color: white;
    color: black;
  }
`;

export const LineChartWrapper = styled.div`
  height: 500px;
`;

export const StoryTitle = styled.h1`
  text-align: center;
`;

export const Prose = styled.p`
  max-width: 40rem;
  margin: 0 auto;
  padding: 1rem;
`;

export const ScrollyStep = styled.div`
  margin: 50vh 0;
  border: 1px solid gray;
  padding: 15px;
  z-index: 1000;
  background: white;
`;

export const CrosswordWrapper = styled.div`
  width: 60%;
  margin-top: 100px;
  margin-bottom: 100px;
  position: sticky;
  top: 100px;
`;
