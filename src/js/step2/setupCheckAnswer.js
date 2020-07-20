import handleAnswerSelected from './handleAnswerSelected'
import handleNextClicked from './handleNextClicked'

// *User Story: As a user, I need the system to handle my interactions with a given question screen within the quiz

// *GL  sets up a series of handlers for user actions
// aka the apex

// *2.A
export default function setupCheckAnswer() {
  // setting it null indicating it is Not yet set
  window.currentlySelectedAnswerIndex = null

  // selecting the 4 multiple choice answers
  const btnAnswers = document.querySelectorAll('[id^="answer"]')
  // turn elements (node list) into an array, loop over all the answer choices, add set up listner on each one for a user to click
  Array.from(btnAnswers).forEach(item =>
    item.addEventListener('click', handleAnswerSelected),
  )

  document
    .getElementById('btn-next')
    .addEventListener('click', handleNextClicked)
}
