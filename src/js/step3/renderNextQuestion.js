import renderCurrentQuestion from '../step1/renderCurrentQuestion'
import clearSelectedAnswerStyle from '../step2/clearSelectedAnswerStyle'
import renderResultsPage from '../step4/renderResultsPage'
import questions from '../state/questions'

// 3.A
export default function renderNextQuestion() {
  // if we're already at the last question
  if (window.indexOfCurrentQuestion === questions.length - 1) {
    renderResultsPage()
    return
  }

  window.indexOfCurrentQuestion++
  renderCurrentQuestion()
}
