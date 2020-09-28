import React from "react";
import LineChart from "./components/LineChart.jsx";
import raceGenderBreakdown from "./data/raceGenderBreakdownByDecade.json";
import censusData from "./data/usCensusData.json";
import copy from "./data/copy.json";

function App() {
  return (
    <div>
      <h2>{copy.title}</h2>
      <div>{copy.description}</div>
      <LineChart dataSources={[raceGenderBreakdown, censusData]} />
    </div>
  );
}

export default App;
