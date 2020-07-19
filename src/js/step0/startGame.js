import renderCurrentQuestion from '../step1/renderCurrentQuestion'

// * 0.B
export default function startGame() {
  // remove the start button element
  const btnStart = document.querySelector('#btn-start')
  btnStart.classList.add('hidden')

  // show user next button
  const btnNext = document.querySelector('#btn-next')
  btnNext.classList.remove('hidden')

  // show user question
  let containerQuestion = document.querySelector('#container-question')
  containerQuestion.classList.remove('hidden')

  // show user multiple choice options
  let containerAnswers = document.querySelector('#container-answers')
  containerAnswers.classList.remove('hidden')

  /* set up globally available variables.
  One for the results data, one for tracking the index of the current question. */
  window.userResultsData = []
  window.indexOfCurrentQuestion = 0

  renderCurrentQuestion()
}

// notes
// render out the 4 answer choices and set up listeners for choosing a given answer (code in there then "takes it from there")
// think about how to make the "questions" array and the "currentQuestionIndex" available even outside this function - maybe just put it on window (making it global)
