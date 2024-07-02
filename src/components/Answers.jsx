import React,{useRef} from 'react'

const Answers = ({answers,selectedAnswer,answerColor,onSelect}) => {
    const shuffledAnswers = useRef();
    if(!shuffledAnswers.current){
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5); // Used to shuffle the answers
      }
  return (
    <ul id="answers">
          {shuffledAnswers.current.map((answer) => {
            const isSelected = selectedAnswer === answer;
            let cssClass = '';
            if(answerColor === 'answered' && isSelected){
              cssClass = 'selected'
            }
            if((answerColor === 'correct' || answerColor === 'wrong') && isSelected){
              cssClass = answerColor
            }
            return(
              <li key={answer} className="answer"> 
              <button onClick={() => onSelect(answer)} className={cssClass}>
                {answer}
              </button>
            </li>
            )
           
          }
          )}
        </ul>
  )
}

export default Answers