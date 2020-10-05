import React from "react";
import IntroPuzzle from "./components/story-sections/IntroPuzzle.jsx";
import Intro from "./components/story-sections/Intro.jsx";
import SlopeChart from "./components/charts/SlopeChart.jsx";
import Experiment from "./Experiment.jsx";

function App() {
  return (
    <div>
      <IntroPuzzle />
      <Intro />
      {/* <Experiment /> */}
    </div>
  );
}

export default App;
