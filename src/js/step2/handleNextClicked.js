import questions from '../state/questions'
import renderNextQuestion from '../step3/renderNextQuestion'
import clearSelectedAnswerStyle from './clearSelectedAnswerStyle'

// 2.D
export default function handleNextClicked() {
  document
    .getElementById('btn-next')
    .removeEventListener('click', handleNextClicked)

  // if you didn't choose an answer before selecting next, alert user
  if (window.currentlySelectedAnswerIndex === null) {
    alert("You didn't make a selection")
    return
  }

  const currentQuestionObject = questions[window.indexOfCurrentQuestion]
  const currentAnswerObject =
    currentQuestionObject.answers[window.currentlySelectedAnswerIndex]

  const userResultDataItem = {
    question: currentQuestionObject.question,
    answer: currentAnswerObject.value,
    didUserGetQuestionRight: currentAnswerObject.correct,
  }
  window.userResultsData.push(userResultDataItem)

  clearSelectedAnswerStyle()

  if (userResultDataItem.didUserGetQuestionRight) {
    confetti.start()
    const audioElement = document.getElementById('successAudio')
    audioElement.play()
    setTimeout(() => {
      confetti.stop()
      alert('You got it right!')
      audioElement.load()
      renderNextQuestion()
    }, 2000)
  } else {
    alert('You got it wrong!')
    renderNextQuestion()
  }
}
