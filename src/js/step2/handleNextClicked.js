import renderNextQuestion from '../step3/renderNextQuestion'
import clearSelectedAnswerStyle from './clearSelectedAnswerStyle'
import handleAnswerResult from './handleAnswerResult'

// *2.D
export default function handleNextClicked() {
  // if you didn't choose an answer before selecting next, alert user
  if (window.currentlySelectedAnswerIndex === null) {
    alert("You didn't make a selection")
    return
  }

  // disable next button (for now) while processing next button click
  // if we didn't do this, it was skipping questions when clicking the button a few times quickly
  // doing something like that on purspose to "stress test" the app is called "negative testing"
  document
    .getElementById('btn-next')
    .removeEventListener('click', handleNextClicked)

  // track the the users's answer to the question, alongside what the question was and whether they got it right
  const currentQuestionObject = window.questions[window.indexOfCurrentQuestion]

  const currentAnswerObject =
    currentQuestionObject.answers[window.currentlySelectedAnswerIndex]

  const userResultDataItem = {
    question: currentQuestionObject.question,
    answer: currentAnswerObject.value,
    didUserGetQuestionRight: currentAnswerObject.correct,
  }
  window.userResultsData.push(userResultDataItem)

  // clear the background color for selected answer, because we don't want to see that answer styled as "selected"  when you go to the next question
  clearSelectedAnswerStyle()

  // handle user feedback and next steps for "got it right" case/"got it wrong" case
  handleAnswerResult(userResultDataItem.didUserGetQuestionRight)
}
