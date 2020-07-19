// 2.C
export default function() {
  // clear out the "selected" style for all buttons
  const btnAnswers = document.querySelectorAll('[id^="answer"]')
  // turn node list into an array, loop over, add event listners
  Array.from(btnAnswers).forEach(item =>
    item.classList.remove('selected-answer'),
  )
}
