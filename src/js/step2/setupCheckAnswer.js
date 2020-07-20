import handleAnswerSelected from './handleAnswerSelected'
import handleNextClicked from './handleNextClicked'

// *User Story/GL: As a user, I need the system to handle my interactions with a given question screen within the quiz

// *2.A
export default function setupCheckAnswer() {
  window.currentlySelectedAnswerIndex = null

  const btnAnswers = document.querySelectorAll('[id^="answer"]')

  Array.from(btnAnswers).forEach(item =>
    item.addEventListener('click', handleAnswerSelected),
  )

  document
    .getElementById('btn-next')
    .addEventListener('click', handleNextClicked)
}
