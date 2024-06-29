import React from 'react'
import quizLogo from '../assets/quiz-logo.png'
const Header = () => {
  return (
    <header>
        <img src={quizLogo} alt="Quiz Logo" />
        <h1>Quiz App</h1>
    </header>
  )
}

export default Header