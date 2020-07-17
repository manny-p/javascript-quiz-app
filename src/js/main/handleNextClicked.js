import questions from '../state/questions'
import renderNextQuestion from './renderNextQuestion'
import storeQuestionResult from './storeQuestionResult'

export default function handleNextClicked() {
  // if you didn't choose an answer before selecting next, alert user
  if (window.currentlySelectedAnswerIndex === null) {
    alert("You didn't make a selection")
    return
  }

  console.log('currently selected answer index', currentlySelectedAnswerIndex)
  console.log('index of current question', window.indexOfCurrentQuestion)

  const currentAnswer = questions[window.indexOfCurrentQuestion].answers
  const didUserGetQuestionRight =
    currentAnswer[window.currentlySelectedAnswerIndex].correct

  // TODO - add logic for storing results
  // create a store question result function

  // which question, and did you get it right or wrong?
  const resultDataItem = {
    indexOfQuestion: window.indexOfCurrentQuestion,
    indexOfAnswerSelected: window.currentlySelectedAnswerIndex,
    didUserGetQuestionRight: didUserGetQuestionRight,
  }
  storeQuestionResult(resultDataItem)

  if (didUserGetQuestionRight) {
    confetti.start()
    setTimeout(() => {
      confetti.stop()
      alert('You got it right!')
      renderNextQuestion()
    }, 2000)
  } else {
    alert('You got it wrong!')
    renderNextQuestion()
  }

  // if you did choose an answer before selecting next:
  // get the index of the current *question* (index in the questions.js array) --done
  // check if the index stored in window.currentlySelectedAnswerIndex is the right answer to the question
  // give the user a "correct"/"incorrect" alert() accordingly. --done
  //  TODO after the basic flow works: store whether the user got the question right/wrong, in a global variable, for use at the end when showing them which questions they got right/wrong.
  // send the user to the next question (render the next question)

  // -------------------- //
  //   make the next button be in a state where if you click it, it counts this answer as your "choice"
  // clicking a question should "select" it, both UX-wise and behind the scenes

  // set up listener on next button. Clicking next button should:
  // 1. give feedback to the user for right/wrong
  // 2. record right/wrong for that given question
  // 3. advance the user, or don't
}
