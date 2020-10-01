import React, { useState, useRef, useEffect } from "react";
import Crossword from "./Crossword.js";
import confetti from "canvas-confetti";

const CrosswordChart = ({ data, colorCode, showAnswers }) => {
  const crosswordRef = useRef(null);

  useEffect(() => {
    crosswordRef.current.reset();
  }, []);

  useEffect(() => {
    if (showAnswers) {
      crosswordRef.current.fillAllAnswers();
    }
  }, [showAnswers]);

  return (
    <div>
      <Crossword
        ref={crosswordRef}
        theme={{
          numberColor: "black",
          focusBackground: "gold",
          highlightBackground: "#72cefc",
        }}
        data={data}
        onCorrect={() => {
          if (crosswordRef.current.isCrosswordCorrect()) {
            confetti();
          }
        }}
        colorCode={colorCode ? true : false}
      />
      {!showAnswers && (
        <>
          <button onClick={() => crosswordRef.current.fillAllAnswers()}>
            skip to results
          </button>
          <button
            onClick={() => {
              crosswordRef.current.reset();
            }}
          >
            clear
          </button>
        </>
      )}
    </div>
  );
};

export default CrosswordChart;
