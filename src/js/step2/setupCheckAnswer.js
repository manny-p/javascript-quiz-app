import handleAnswerSelected from './handleAnswerSelected'
import handleNextClicked from './handleNextClicked'

// 2.A
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
