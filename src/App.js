import React from "react";
import IntroPuzzle from "./components/story-sections/IntroPuzzle.jsx";
import Intro from "./components/story-sections/Intro.jsx";
import LineChart from "./components/charts/LineChart.jsx";
import SmallMultipleWaffles from "./components/story-sections/SmallMultipleWaffles.jsx";
import Experiment from "./Experiment.jsx";
import UsaTodayDeepDive from "./components/story-sections/UsaTodayDeepDive.jsx";
import { EssayWrapper } from "./styles/styles.js";
import copy from "./data/copy.json";

function App() {
  return (
    <EssayWrapper>
      <h1>{copy.title}</h1>
      <div>By Michelle McGhee and Russell Goldenberg</div>

      <IntroPuzzle />
      <Intro />
      <SmallMultipleWaffles />
      <UsaTodayDeepDive />
    </EssayWrapper>
  );
}

export default App;
