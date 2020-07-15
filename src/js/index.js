import './../scss/main.scss'
import startGame from './main/startGame'

function initialize() {
  // render the button that lets you start the game
  document.getElementById('app').innerHTML = `
  <div class="container-game ">
  <div id="container-question" class="container-question hidden">
    <div id="question" class="question">Question XYZ Test</div>
  </div>

  <div id="container-answers" class="container-answers hidden">
    <button class="btn-answers btn">answer number 1</button>
    <button class="btn-answers btn">answer number 2</button>
    <button class="btn-answers btn">answer number 3</button>
    <button class="btn-answers btn">answer number 4</button>
  </div>

  <div class="container-clicker">
    <button id="btn-start" class="btn-start btn">start</button>
    <button id="btn-next" class="btn-next btn hidden">next</button>
  </div>
</div>
  `

  document
    .getElementById('btn-start')
    .addEventListener('click', () => startGame())
  console.log('button clicked')
}

initialize()
