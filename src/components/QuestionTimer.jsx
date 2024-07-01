import React, { useState, useEffect } from "react";

const QuestionTimer = ({ timeout, onTimeout }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('SETTING Timeout')
    const timer = setTimeout(onTimeout, timeout);

    return ()=> {
      clearTimeout(timer)
    }

  }, [timeout, onTimeout]);


  useEffect(() => {
    console.log('setting interval')
   const interval = setInterval(() => {
      setRemainingTime((prevRemaingTime => prevRemaingTime - 100));
    }, 100);

   return ()=>{clearInterval(interval)}
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime}/>;
};

export default QuestionTimer;
