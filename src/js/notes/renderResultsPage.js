export default function renderResultsPage() {
  const feedback = window.userResultsData.reduce((accumulator, element) => {
    let questionCorrectText = element.didUserGetQuestionRight ? 'Yes' : 'No'
    return (accumulator += `
    <div class="results-container">
    <div class="result-questions">Question: ${element.question}</div>
    <div class="user-answers">Your answer: ${element.answer}</div>
    <div class="result-answers">Correct? ${questionCorrectText}</div>
    </div>`)
  }, '<div class="result-headline">Quiz Results: <br></div>')

  document.querySelector('.container-game').innerHTML = feedback
}
