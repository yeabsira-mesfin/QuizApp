import React, { useState, useCallback, act } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import quizCompleted from "../assets/quiz-complete.png";

const Quiz = () => {
  const [answerColor, setAnswerColor] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex =
    answerColor === "" ? userAnswers.length : userAnswers.length - 1;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnswerColor("answered");
      setUserAnswers((prevAnswer) => {
        return [...prevAnswer, selectedAnswer];
      });
      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerColor("correct");
        } else {
          setAnswerColor("wrong");
        }
        setTimeout(() => {
          setAnswerColor("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
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
        questionText={QUESTIONS[activeQuestionIndex].text}
        answers={QUESTIONS[activeQuestionIndex].answers}
        answerColor={answerColor}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
