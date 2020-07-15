export default function renderQuestion(text) {
  document.getElementById('question').innerHTML = `
  <div>${text}</div>
  `
}
