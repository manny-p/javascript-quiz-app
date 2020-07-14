import './../scss/main.scss'
import renderQuestionText from './renderQuestionText'
// import func from './func'

let currentQuestionIndex = 0

function initialize() {
  // render the button that lets you start the game
  document.getElementById('app').innerHTML = `
  <div class="container-game">
  <div class="container-question hide">
    <div id="question" class="question">Question XYZ Test</div>
  </div>
  <div id="btn-answers" class="container-btn-answers">
    <button class="btn-answers btn">btn1</button>
    <button class="btn-answers btn">btn2</button>
    <button class="btn-answers btn">btn3</button>
    <button class="btn-answers btn">btn4</button>
  </div>
  <div class="container-clicker">
    <button id="btn-start" class="btn-start btn">start</button>
    <button id="btn-next" class="btn-next btn hide">next</button>
  </div>
</div> 
  `
  {
    /* <button id="start-btn">start</button>
    <button id="next-btn">next</button> */
  }
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
