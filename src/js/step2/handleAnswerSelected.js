import clearSelectedAnswerStyle from './clearSelectedAnswerStyle'

// *2.B

// event bubbling

export default function handleAnswerSelected(event) {
  let idAsString

  if (event.target.getAttribute('id')) {
    // if the user clicked the edge
    idAsString = event.target.getAttribute('id')
  } else {
    // if the user cliccked in the central area
    idAsString = event.target.parentNode.getAttribute('id')
  }

  const answerIndex = idAsString.split('answer')[1]
  // turn the data type from string to integer
  const answerIndexAsInteger = parseInt(answerIndex)
  // set as a global variable the index of the currently selected answer
  window.currentlySelectedAnswerIndex = answerIndexAsInteger

  // clear previous selected
  clearSelectedAnswerStyle()

  // give that element a class to give it the "selected" style
  document.getElementById(idAsString).classList.add('selected-answer')
}
