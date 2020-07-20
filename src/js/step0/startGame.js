import renderCurrentQuestion from '../step1/renderCurrentQuestion'
import questions from '../state/questions'
import _ from 'lodash'

// *0.B

// *User Story: As a user, I want to view the initial Q&A, so that I can repsond.

// *Game Logic: unhide the sections of the template so that the Q&A & Next button can be rendered into it

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

  /* 
  //* set up globally available variables.
  One for the user results data, one for tracking the index of the current question, one for the questions being shuffled that way they are available across files*/
  window.userResultsData = []

  // shuffle the array of questions
  window.questions = _.shuffle(questions)

  // setting the index to 0
  window.indexOfCurrentQuestion = 0

  renderCurrentQuestion()
}
