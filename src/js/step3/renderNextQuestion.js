import renderCurrentQuestion from '../step1/renderCurrentQuestion'
import renderResultsPage from '../step4/renderResultsPage'

// *3.A

// High Level GL: loops back to step 2 until quiz is finsihed
export default function renderNextQuestion() {
  // if we're already at the last question
  if (window.indexOfCurrentQuestion === questions.length - 1) {
    renderResultsPage()
    return
  }

  /* restore visibility of game container element, to account for when 'explode' function has been called on it
   (whether applicable for this question or not, we run this for each new question we render) */
  document.querySelector('.container-game').style.visibility = 'visible'

  window.indexOfCurrentQuestion++
  renderCurrentQuestion()
}
