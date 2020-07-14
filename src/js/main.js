import './../scss/main.scss'
import renderQuestionText from './renderQuestionText'
// import func from './func'
const questions = [
  'question 1: test',
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

function initialize() {
  // render the button that lets you start the game
  document.getElementById('app').innerHTML = `
    <button id="start-btn">start</button>
    <button id="next-btn">next</button>
  `

  // document
  //   .getElementById('startGame')
  //   .addEventListener('click', () => loadQuestionScreen())
}

initialize()

// TODO: move out
function loadQuestionScreen() {
  // remove the start button element
  // add the question area to the app div: <div id="questionArea"></div>
  // render out the first question
  renderQuestionText(questions[currentQuestionIndex])

  // render out the 4 answer choices and set up listeners for choosing a given answer (code in there then "takes it from there")
  // TODO, think about how to make the "questions" array and the "currentQuestionIndex" available even outside this function - maybe just put it on window (making it global)
}

// TODO: set up JSON file (can make it just a regular JS array that you export - not technically JSON), that has the questions, and answers for each question
