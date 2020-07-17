import questions from '../state/questions'

export default function renderResultsPage() {
  const feedback = window.resultsData.reduce((accumulator, element) => {
    const questionText = questions[element.indexOfQuestion].question
    const answerThatWasChosen = '<TODO fill me in>'

    return (accumulator += `<div>
    <div>Question was: ${questionText}</div>
    <div>Your answer was: ${answerThatWasChosen}</div>
    <div>Answer was correct? ${
      element.didUserGetQuestionRight ? 'Yes' : 'No'
    }</div></div>`)
  }, 'Here are your Results: <br>')

  document.querySelector('.container-game').innerHTML = feedback
}
