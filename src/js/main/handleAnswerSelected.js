import clearSelectedAnswerStyle from './clearSelectedAnswerStyle'

export default function handleAnswerSelected(event) {
  const idAsString =
    event.target.getAttribute('id') ||
    event.target.parentNode.getAttribute('id')
  const answerIndex = idAsString.split('answer')[1]
  const answerIndexAsInteger = parseInt(answerIndex)
  window.currentlySelectedAnswerIndex = answerIndexAsInteger

  clearSelectedAnswerStyle()

  // give that element a class to give it the "selected" style
  document.getElementById(idAsString).classList.add('selected-answer')
}

// if they make a selection, is it right or wrong

// if its right,
// run confetti
// append that element / replace with buttoin element "CORRECT

// if its wrong, que a message
