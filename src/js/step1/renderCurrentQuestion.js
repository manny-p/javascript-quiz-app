import renderQuestionSection from './renderQuestionSection'
import setupCheckAnswer from '../step2/setupCheckAnswer'
import _ from 'lodash'

// GL: We have template, and now are putting data the page, then we can a separate function to set up the event handlers for check answer

// *1.A
export default function renderCurrentQuestion() {
  // let shuffledQuestions = _.shuffle(questions) TODO implement

  // show question
  let elementIds = ['question', 'answer0', 'answer1', 'answer2', 'answer3']

  let elementValues = [
    window.questions[window.indexOfCurrentQuestion].question,
    window.questions[window.indexOfCurrentQuestion].answers[0].value,
    window.questions[window.indexOfCurrentQuestion].answers[1].value,
    window.questions[window.indexOfCurrentQuestion].answers[2].value,
    window.questions[window.indexOfCurrentQuestion].answers[3].value,
  ]
  elementIds.map((element, index) =>
    renderQuestionSection(element, elementValues[index]),
  )

  // *GL sets up event handlers
  // set up listeners on the questions
  setupCheckAnswer()
}
