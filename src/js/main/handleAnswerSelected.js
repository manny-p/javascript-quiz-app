export default function handleAnswerSelected(event) {
  //
  const idAsString =
    event.target.getAttribute('id') ||
    event.target.parentNode.getAttribute('id')
  const answerIndex = idAsString.split('answer')[1]
  const answerIndexAsInteger = parseInt(answerIndex)
  window.currentlySelectedAnswerIndex = answerIndexAsInteger

  console.log(currentlySelectedAnswerIndex)

  // make the next button be in a state where if you click it, it counts this answer as your "choice"
}

// clicking a question should "select" it, both UX-wise and behind the scenes

// set up listener on next button. Clicking next button should:
// 1. give feedback to the user for right/wrong
// 2. record right/wrong for that given question
// 3. advance the user, or don't

// when user clicks next button, did the user make an option
// if not, alert

// if they make a selection, is it right or wrong

// if its right,
// run confetti
// append that element / replace with buttoin element "CORRECT

// if its wrong, que a message
