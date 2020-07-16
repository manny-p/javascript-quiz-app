export default function handleNextClicked() {
  // if you didn't choose an answer before selecting next
  if (window.currentlySelectedAnswerIndex === null) {
    alert("You didn't make a selection")
    return
  }

  // if you did choose an answer before selecting next:
  // get the index of the current *question* (index in the questions.js array)
  // check if the index stored in window.currentlySelectedAnswerIndex is the right answer to the question
  // give the user a "correct"/"incorrect" alert() accordingly. TODO after the basic flow works: store whether the user got the question right/wrong, in a global variable, for use at the end when showing them which questions they got right/wrong.
  // send the user to the next question (render the next question)
}
