import handleAnswerSelected from './handleAnswerSelected'
import handleNextClicked from './handleNextClicked'

export default function setupCheckAnswer() {
  const btnAnswers = document.querySelectorAll('[id^="answer"]')

  // log the nodeList (typeof object)
  // NodeList(4) [button#answer0.btn-answers.btn, button#answer1.btn-answers.btn, button#answer2.btn-answers.btn, button#answer3.btn-answers.btn]

  //console.log(btnAnswers)

  window.currentlySelectedAnswerIndex = null

  // turn nodeLIst into array so we can loop over using Array.from
  Array.from(btnAnswers).forEach(item =>
    item.addEventListener('click', handleAnswerSelected),
  )

  document
    .getElementById('btn-next')
    .addEventListener('click', handleNextClicked)
}
