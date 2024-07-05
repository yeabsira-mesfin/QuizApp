import React from "react";
import QUESTION from "../questions";
import quizCompleted from "../assets/quiz-complete.png";
const Summary = ({ userAnswers }) => {
  return (
    <div id="summary">
      <img src={quizCompleted} alt="Trophy" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">10%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">10%</span>
          <span className="text">Correctly Answered</span>
        </p>
        <p>
          <span className="number">10%</span>
          <span className="text">Incorrecty Answered</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer,index) => {
            let cssClass = 'user-answer'
            if(answer ===null){
                cssClass+= ' skipped'
            } else if(answer === QUESTION[index].answers[0]){
                cssClass += ' correct'
            } else {
                cssClass += ' wrong'
            }
          return (
            <li key={answer}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTION[index].text}</p>
              <p className={cssClass}>{answer?? 'Skipped'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
