import React, { useState } from "react";

// Sample questions data
const questions = [
  {
    question: "Which of the following are programming languages?",
    options: ["java", "python", "css", "c"],
    answer: ["java", "python", "c"],
  },
  {
    question: "Which of these are fruits?",
    options: ["apple", "carrot", "banana", "lettuce"],
    answer: ["apple", "banana"],
  },
  {
    question: "Which of these are programming languages?",
    options: ["javascript", "html", "ruby", "css"],
    answer: ["javascript", "ruby"],
  },
];

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = () => {
    const currentQuestion = questions[currentIndex];
    // Check if selectedAnswer matches the correct answer
    const isCorrect = selectedAnswer.length === currentQuestion.answer.length &&
      selectedAnswer.every((val) => currentQuestion.answer.includes(val));
    
    if (isCorrect) {
      setScore(score + 1);
    }

    // Move to the next question
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer([]);
    } else {
      setShowScore(true);
    }
  };

  // Inline styles for the components
  const styles = {
    quizContainer: {
      backgroundColor: "#f0f8ff",
      padding: "20px",
      borderRadius: "8px",
      width: "50%",
      margin: "auto",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      fontFamily: "'Arial', sans-serif",
    },
    title: {
      textAlign: "center",
      color: "#2c3e50",
      fontSize: "2rem",
      marginBottom: "20px",
    },
    question: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "20px",
      textAlign: "center",
      color: "#34495e",
    },
    optionContainer: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "20px",
    },
    option: {
      backgroundColor: "#ecf0f1",
      padding: "10px",
      margin: "5px 0",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "all 0.3s",
    },
    optionHover: {
      backgroundColor: "#3498db",
      color: "white",
      transform: "scale(1.05)",
    },
    submitButton: {
      backgroundColor: "#2ecc71",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1.2rem",
      display: "block",
      margin: "0 auto",
    },
    submitDisabled: {
      backgroundColor: "#7f8c8d",
      cursor: "not-allowed",
    },
    scoreContainer: {
      textAlign: "center",
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#2c3e50",
    },
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div style={styles.quizContainer}>
      <h2 style={styles.title}>Quiz Game</h2>
      {!showScore ? (
        <>
          <div style={styles.question}>{currentQuestion.question}</div>
          <div style={styles.optionContainer}>
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                style={{
                  ...styles.option,
                  ...(selectedAnswer.includes(option) ? styles.optionHover : {}),
                }}
                onClick={() => {
                  setSelectedAnswer((prev) =>
                    prev.includes(option)
                      ? prev.filter((item) => item !== option)
                      : [...prev, option]
                  );
                }}
              >
                {option}
              </div>
            ))}
          </div>
          <button
            onClick={handleAnswer}
            style={{
              ...styles.submitButton,
              ...(selectedAnswer.length === 0 ? styles.submitDisabled : {}),
            }}
            disabled={selectedAnswer.length === 0}
          >
            Submit Answer
          </button>
        </>
      ) : (
        <div style={styles.scoreContainer}>
          You scored {score} out of {questions.length}
        </div>
      )}
    </div>
  );
};

export default Quiz;
