// 4.A
export default function renderResultsPage() {
  const feedback = window.userResultsData.reduce((accumulator, element) => {
    let questionCorrectText = element.didUserGetQuestionRight ? 'Yes' : 'No'
    return (accumulator += `
    <div class="results-container">

    <div class="question-list">Question: ${element.question}</div>

    <div class="results-user-answers">Your answer: ${element.answer}</div>

    <div class="correct">Correct? ${questionCorrectText}</div>

    </div>`)
  }, '<div class="results-page-title">Quiz Results: <br></div>')

  document.querySelector('.container-game').innerHTML = feedback
}
