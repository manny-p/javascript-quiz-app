import renderNextQuestion from '../step3/renderNextQuestion'
import clearSelectedAnswerStyle from './clearSelectedAnswerStyle'
import handleAnswerResult from './handleAnswerResult'

// *2.D
export default function handleNextClicked() {
  if (window.currentlySelectedAnswerIndex === null) {
    alert("You didn't make a selection")
    return
  }

  document
    .getElementById('btn-next')
    .removeEventListener('click', handleNextClicked)

  const currentQuestionObject = window.questions[window.indexOfCurrentQuestion]

  const currentAnswerObject =
    currentQuestionObject.answers[window.currentlySelectedAnswerIndex]

  const userResultDataItem = {
    question: currentQuestionObject.question,
    answer: currentAnswerObject.value,
    didUserGetQuestionRight: currentAnswerObject.correct,
  }
  window.userResultsData.push(userResultDataItem)

  clearSelectedAnswerStyle()

  handleAnswerResult(userResultDataItem.didUserGetQuestionRight)
}
