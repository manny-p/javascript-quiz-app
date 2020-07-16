import renderQuestion from './renderQuestion'
import questions from '../state/questions'
import _ from 'lodash'

export default function startGame() {
  // confetti.start()

  // initialize components
  const btnStart = document.querySelector('#btn-start')
  const btnNext = document.querySelector('#btn-next')
  let containerQuestion = document.querySelector('#container-question')
  let containerAnswers = document.querySelector('#container-answers')

  // remove the start button element
  btnStart.classList.add('hidden')
  console.log(btnStart)
  // show user question
  containerQuestion.classList.remove('hidden')
  console.log(containerQuestion)
  // show user multiple choice options
  containerAnswers.classList.remove('hidden')
  console.log(containerAnswers)
  // show user next button
  btnNext.classList.remove('hidden')

  window.answers = []

  // show question
  let elementIds = ['question', 'answer0', 'answer1', 'answer2', 'answer3']
  let shuffledQuestions = _.shuffle(questions)

  for (let index = 0; index < shuffledQuestions.length; index++) {
    let elementValues = [
      shuffledQuestions[index].question,
      shuffledQuestions[index].answers[0].value,
      shuffledQuestions[index].answers[1].value,
      shuffledQuestions[index].answers[2].value,
      shuffledQuestions[index].answers[3].value,
    ]
    elementIds.map(
      (element, index) => renderQuestion(element, elementValues[index]),
      // if answer clicked is correct, show the button correct
    )
  }
}

// notes
// render out the 4 answer choices and set up listeners for choosing a given answer (code in there then "takes it from there")
// think about how to make the "questions" array and the "currentQuestionIndex" available even outside this function - maybe just put it on window (making it global)
