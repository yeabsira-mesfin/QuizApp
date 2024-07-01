import React, { useState, useEffect } from "react";

const QuestionTimer = ({ timeout, onTimeout }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('SETTING Timeout')
    setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout]);


  useEffect(() => {
    console.log('setting interval')
    setInterval(() => {
      setRemainingTime((prevRemaingTime => prevRemaingTime - 100));
    }, 100);
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime}/>;
};

export default QuestionTimer;
