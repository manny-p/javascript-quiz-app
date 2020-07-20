// *4.A
export default function renderResultsPage() {
  document.querySelector('.container-game').style.visibility = 'visible'

  const feedback = window.userResultsData.reduce((accumulator, element) => {
    let questionCorrectText = element.didUserGetQuestionRight ? 'Yes' : 'No'
    return (accumulator += `
    <div class="container-user-results">

    <div class="box1"><span>Question:</span><br>${element.question}</div>

    <div class="box2"><span>Your Answer:</span><br>${element.answer}</div>

    <div class="box3"><span>Correct?</span><br>${questionCorrectText}</div>

    </div>`)
  }, '<div class="container-results-title">Quiz Results: <br></div>')

  document.querySelector('.container-game').innerHTML = feedback
}
