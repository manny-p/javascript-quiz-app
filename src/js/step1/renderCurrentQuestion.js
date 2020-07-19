import renderQuestionSection from './renderQuestionSection'
import questions from '../state/questions'
import setupCheckAnswer from '../step2/setupCheckAnswer'
import clearSelectedAnswerStyle from '../step2/clearSelectedAnswerStyle'
import _ from 'lodash'

// * 1.A
export default function renderCurrentQuestion() {
  // let shuffledQuestions = _.shuffle(questions) TODO implement

  // show question
  let elementIds = ['question', 'answer0', 'answer1', 'answer2', 'answer3']

  let elementValues = [
    questions[window.indexOfCurrentQuestion].question,
    questions[window.indexOfCurrentQuestion].answers[0].value,
    questions[window.indexOfCurrentQuestion].answers[1].value,
    questions[window.indexOfCurrentQuestion].answers[2].value,
    questions[window.indexOfCurrentQuestion].answers[3].value,
  ]
  elementIds.map(
    (element, index) => renderQuestionSection(element, elementValues[index]),
    // if answer clicked is correct, show the button correct
  )

  // set up listeners on the questions
  setupCheckAnswer()
}
