import clearSelectedAnswerStyle from './clearSelectedAnswerStyle'

// *2.B

// *although each m/c answers was being assigned this event handler, when the user cliked the div within the button, the event.target was 'div', and not 'button'

// (the reason this handler was still called when you click on div is that the div is, within the dom tree, located inside the button, and so the button receives the div click event due to the event bubbling from the div to the button

// aka event bubbling

export default function handleAnswerSelected(event) {
  // aka most mission critical section

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
