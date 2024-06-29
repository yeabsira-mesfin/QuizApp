import React, { useState } from "react";
import QUESTIONS from "../questions";
const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  function handleSelectAnswer(selectedAnswer){
    setUserAnswers((prevAnswer)=>{
        return [...prevAnswer, selectedAnswer]
    });
  }
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers]
  shuffledAnswers.sort((a,b)=> 1);

  return (
    <div id="quiz">
        <div id="question">
          <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
          <ul id="answers">
            {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
              <li key={answer} className="answer">
        
                <button onClick={()=>handleSelectAnswer(answer)}>{answer}</button>
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default Quiz;
