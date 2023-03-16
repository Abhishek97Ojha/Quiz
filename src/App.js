import { useState } from "react";
import "./App.css";
import { questions } from "./Components/Questions";

function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextValue = currentValue + 1;
    if (nextValue < questions.length) {
      setCurrentValue(nextValue);
    } else {
      setShowScore(true);
    }
  };
  const restartGame = () => {
    setScore(0);
    setCurrentValue(0);
    setShowScore(false);
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="container">
          <h1>Final Result</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button className="restart" onClick={() => restartGame()}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <div className="container">
            <div className="header">
              <h1>Quiz</h1>
            </div>
            <div className="question">
              <h2>Question {currentValue + 1}</h2>
              <h3> {questions[currentValue].questionText}</h3>

              <div className="answer">
                {questions[currentValue].answerOptions.map((ele) => {
                  return (
                    <button
                      className="cont"
                      onClick={() => {
                        handleAnswer(ele.isCorrect);
                      }}
                    >
                      {ele.answerText}{" "}
                    </button>
                  );
                })}
              </div>
            </div>
            <h2 className="score">Current Score : {score}</h2>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
