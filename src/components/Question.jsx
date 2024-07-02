import React from 'react'
import QuestionTimer from './QuestionTimer'
import Answers from './Answers'
const Question = ({questionText,answers,answerColor,selectedAnswer,onSelectAnswer,onSkipAnswer}) => {
  return (
    <div id="question">
        <QuestionTimer
        
          timeout={10000}
          onTimeout={onSelectAnswer}
        />
        <h2>{questionText}</h2>
        <Answers
         
          answers={answers}
          selectedAnswer={selectedAnswer}
          answerColor={answerColor}
          onSelect={onSelectAnswer}
        />
      </div>
  )
}

export default Question