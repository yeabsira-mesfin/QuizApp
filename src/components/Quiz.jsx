import React, { useState } from "react";
import QUESTIONS from "../questions";
import QuestionTimer from "./QuestionTimer";
import quizCompleted from "../assets/quiz-complete.png";
const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevAnswer) => {
      return [...prevAnswer, selectedAnswer];
    });
  }

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleted} alt="Trophy" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5); // Used to shuffle the answers

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer timeout={10000} onTimeout={()=> handleSelectAnswer(null)}/>
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
