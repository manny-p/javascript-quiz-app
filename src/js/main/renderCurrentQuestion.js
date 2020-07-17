import renderQuestionSection from './renderQuestionSection'
import questions from '../state/questions'
import _ from 'lodash'

export default function renderCurrentQuestion() {
  let shuffledQuestions = _.shuffle(questions)

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
}
