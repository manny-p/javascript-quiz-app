import './../scss/main.scss'
import renderQuestionText from './renderQuestionText'
// import func from './func'
const questions = [
  'question 1',
  'question 2',
  'question 3',
  'question 4',
  'question 5',
  'question 6',
  'question 7',
  'question 8',
  'question 9',
  'question 10',
]

let currentQuestionIndex = 0

;(function initialize() {
  // render the button that lets you start the game
  renderQuestionText(questions[currentQuestionIndex])
})()
