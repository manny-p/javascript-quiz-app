// *4.A
export default function renderResultsPage() {
  const feedback = window.userResultsData.reduce((accumulator, element) => {
    let questionCorrectText = element.didUserGetQuestionRight ? 'Yes' : 'No'
    return (accumulator += `
    <div class="container-user-results">

    <div class="box1">The Question: <br>${element.question}</div>

    <div class="box2">Your answer: <br>${element.answer}</div>

    <div class="box3">Correct? <br>${questionCorrectText}</div>

    </div>`)
  }, '<div class="container-results-title">Quiz Results: <br></div>')

  document.querySelector('.container-game').innerHTML = feedback
}
