import questions from '../state/questions'

export default function renderResultsPage() {
  const feedback = window.resultsData.reduce((accumulator, element) => {
    const questionText = questions[element.indexOfQuestion].question

    // todo - fill in
    // let answerThatWasChosen = window.currentlySelectedAnswerIndex

    return (accumulator += `
    <div class="results-container">

    <div class="result-questions">Question: ${questionText}</div>

    <div class="user-answers">Your answer: </div>

    <div class="result-answers">Correct? ${
      element.didUserGetQuestionRight ? 'Yes' : 'No'
    }</div>

    </div>`)
  }, '<div class="result-headline">Quiz Results: <br></div>')

  document.querySelector('.container-game').innerHTML = feedback
}
