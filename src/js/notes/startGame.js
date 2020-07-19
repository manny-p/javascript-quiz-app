import renderCurrentQuestion from './renderCurrentQuestion'

export default function startGame() {
  // initialize components
  const btnStart = document.querySelector('#btn-start')
  const btnNext = document.querySelector('#btn-next')
  let containerQuestion = document.querySelector('#container-question')
  let containerAnswers = document.querySelector('#container-answers')

  // remove the start button element
  btnStart.classList.add('hidden')
  // console.log(btnStart)

  // show user question
  containerQuestion.classList.remove('hidden')
  // console.log(containerQuestion)

  // show user multiple choice options
  containerAnswers.classList.remove('hidden')
  // console.log(containerAnswers)

  // show user next button
  btnNext.classList.remove('hidden')

  window.userResultsData = []
  window.indexOfCurrentQuestion = 0

  renderCurrentQuestion()
}

// notes
// render out the 4 answer choices and set up listeners for choosing a given answer (code in there then "takes it from there")
// think about how to make the "questions" array and the "currentQuestionIndex" available even outside this function - maybe just put it on window (making it global)
