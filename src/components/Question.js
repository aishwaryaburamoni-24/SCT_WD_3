import React from "react";

const Question = ({ question, selectedAnswer, setSelectedAnswer }) => {
  const handleSelection = (answer) => {
    if (question.type === "multi") {
      // For multi-select, toggle selection
      setSelectedAnswer((prev) =>
        prev.includes(answer)
          ? prev.filter((item) => item !== answer)
          : [...prev, answer]
      );
    } else {
      // For single-answer, just set the selected answer
      setSelectedAnswer(answer);
    }
  };

  return (
    <div>
      <h2>{question.question}</h2>

      {/* Display options line by line */}
      {question.options.map((option, index) => (
        <div key={index}>
          <button
            onClick={() => handleSelection(option)}
            style={{
              backgroundColor: selectedAnswer.includes(option)
                ? "lightblue"
                : "",
            }}
          >
            {option}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Question;
