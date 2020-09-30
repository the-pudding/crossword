import React, { useRef, useEffect } from "react";
import Crossword from "@jaredreisinger/react-crossword";
import confetti from "canvas-confetti";

const crosswordData = {
  across: {
    1: {
      clue: "McGhee",
      answer: "MICHELLE",
      row: 4,
      col: 0,
    },
    2: {
      clue: "The proof is in the __",
      answer: "PUDDING",
      row: 1,
      col: 3,
    },
  },
  down: {
    3: {
      clue: "Goldenberg",
      answer: "RUSSELL",
      row: 0,
      col: 4,
    },
    4: {
      clue: "Jan",
      answer: "DIEHM",
      row: 3,
      col: 1,
    },
  },
};

const CrosswordChart = () => {
  const crosswordRef = useRef(null);

  useEffect(() => {
    crosswordRef.current.reset();
  }, []);

  return (
    <div style={{ width: "50%", marginTop: "100px", marginBottom: "100px" }}>
      <Crossword
        ref={crosswordRef}
        theme={{
          numberColor: "black",
          focusBackground: "gold",
          highlightBackground: "#72cefc",
        }}
        data={crosswordData}
        onCrosswordCorrect={() => {
          if (crosswordRef.current.isCrosswordCorrect()) confetti();
        }}
      />
      <button onClick={() => crosswordRef.current.fillAllAnswers()}>
        skip to results
      </button>
      <button onClick={() => crosswordRef.current.reset()}>clear</button>
    </div>
  );
};

export default CrosswordChart;
