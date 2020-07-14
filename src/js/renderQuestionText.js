export default function renderQuestionText(text) {
  document.getElementById('questionArea').innerHTML = `
  <div>${text}</div>
  `
}
