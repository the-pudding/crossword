import React, { useState, useRef, useEffect } from "react";
import Crossword from "./Crossword.js";
import { CrosswordWrapper } from "../../../styles/styles.js";
import confetti from "canvas-confetti";

const CrosswordChart = ({ data, colorCode, showAnswers }) => {
  const [confettiUsed, setConfettiUsed] = useState(false);
  const crosswordRef = useRef(null);

  useEffect(() => {
    crosswordRef.current.reset();
  }, []);

  useEffect(() => {
    if (showAnswers) {
      setConfettiUsed(true); // stop confetti in advance
      crosswordRef.current.fillAllAnswers();
    }
  }, [showAnswers]);

  return (
    <CrosswordWrapper>
      <Crossword
        ref={crosswordRef}
        theme={{
          numberColor: "black",
          focusBackground: "gold",
          highlightBackground: "#72cefc",
        }}
        data={data}
        onCrosswordCorrect={() => {
          if (crosswordRef.current.isCrosswordCorrect() && !confettiUsed) {
            confetti();
            setConfettiUsed(true);
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
              setConfettiUsed(false);
              crosswordRef.current.reset();
            }}
          >
            clear
          </button>
        </>
      )}
    </CrosswordWrapper>
  );
};

export default CrosswordChart;
