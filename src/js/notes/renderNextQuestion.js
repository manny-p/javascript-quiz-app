import renderCurrentQuestion from './renderCurrentQuestion'
import clearSelectedAnswerStyle from './clearSelectedAnswerStyle'
import renderResultsPage from './renderResultsPage'
import questions from '../state/questions'

export default function renderNextQuestion() {
  // if we're already at the last question
  if (window.indexOfCurrentQuestion === questions.length - 1) {
    //    alert('You human are done!')
    renderResultsPage()
    return
  }

  clearSelectedAnswerStyle()
  window.indexOfCurrentQuestion++
  renderCurrentQuestion()
}
