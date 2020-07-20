import '../../scss/main.scss'
import startGame from './startGame'

// *0.A
function initialize() {
  // render the button that lets you start the game
  document.getElementById('app').innerHTML = `
  <div class="container-game">
  <div id="container-question" class="container-question hidden">
    <div id="question" class="question"></div>
  </div>

  <div id="container-answers" class="container-answers hidden">
    <button id="answer0" class="btn-answers btn"></button>
    <button id="answer1" class="btn-answers btn"></button>
    <button id="answer2" class="btn-answers btn"></button>
    <button id="answer3" class="btn-answers btn"></button>
  </div>

  <div class="container-clicker">
    <button id="btn-start" class="btn-start btn">Start</button>
    <button id="btn-next" class="btn-next btn hidden">Next</button>
  </div>
</div>
  `
  document
    .getElementById('btn-start')
    .addEventListener('click', () => startGame())
}

initialize()
