import React, { useState, useCallback, act } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import quizCompleted from "../assets/quiz-complete.png";

const Quiz = () => {
 
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
    
      setUserAnswers((prevAnswer) => {
        return [...prevAnswer, selectedAnswer];
      });
      
    },[]
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleted} alt="Trophy" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
