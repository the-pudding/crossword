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
