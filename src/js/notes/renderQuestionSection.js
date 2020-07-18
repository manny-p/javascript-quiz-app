import setupCheckAnswer from './setupCheckAnswer'

export default function renderQuestionSection(id, value) {
  document.getElementById(id).innerHTML = `
  <div>${value}</div>
  `

  // set up listeners on the questions
  setupCheckAnswer()

  // clicking a question should "select" it, both UX-wise and behind the scenes

  // set up listener on next button. Clicking next button should:
  // 1. give feedback to the user for right/wrong
  // 2. record right/wrong for that given question
  // 3. advance the user, or don't
}
