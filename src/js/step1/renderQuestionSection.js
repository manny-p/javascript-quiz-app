// *1.B
export default function renderQuestionSection(id, value) {
  document.getElementById(id).innerHTML = `
  <div>${value}</div>
  `
}
