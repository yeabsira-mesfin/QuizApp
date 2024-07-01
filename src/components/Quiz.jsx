import React, { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import QuestionTimer from "./QuestionTimer";
import quizCompleted from "../assets/quiz-complete.png";
const Quiz = () => {
  const [answerColor, setAnswerColor] = useState('')
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = answerColor === '' ? userAnswers.length : userAnswers.length - 1;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setAnswerColor('answered')
    setUserAnswers((prevAnswer) => {
      return [...prevAnswer, selectedAnswer];
    });
    setTimeout(()=>{
      if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]){
        setAnswerColor('correct')
      } else{
        setAnswerColor('wrong')
      }
      setTimeout(()=> {
        setAnswerColor('');
      }, 2000);
    },1000);
  },
  [activeQuestionIndex]);

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

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5); // Used to shuffle the answers

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer 
        key={activeQuestionIndex} timeout={10000} onTimeout={handleSkipAnswer} />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => {
            const isSelected = userAnswers[userAnswers.length - 1] === answer;
            let cssClass = '';
            if(answerColor === 'answered' && isSelected){
              cssClass = 'selected'
            }
            if(answerColor === 'correct' || answerColor === 'wrong' && isSelected){
              cssClass = answerColor
            }
            return(
              <li key={answer} className="answer"> 
              <button onClick={() => handleSelectAnswer(answer)} className={cssClass}>
                {answer}
              </button>
            </li>
            )
           
          }
          )}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
