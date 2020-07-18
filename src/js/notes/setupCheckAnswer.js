import handleAnswerSelected from './handleAnswerSelected'
import handleNextClicked from './handleNextClicked'

export default function setupCheckAnswer() {
  const btnAnswers = document.querySelectorAll('[id^="answer"]')

  window.currentlySelectedAnswerIndex = null

  // turn node list into an array, loop over, add event listners
  Array.from(btnAnswers).forEach(item =>
    item.addEventListener('click', handleAnswerSelected),
  )

  document
    .getElementById('btn-next')
    .addEventListener('click', handleNextClicked)
}

// log the nodeList (typeof object)
// NodeList(4) [button#answer0.btn-answers.btn, button#answer1.btn-answers.btn, button#answer2.btn-answers.btn, button#answer3.btn-answers.btn]

//console.log(btnAnswers)
