import renderNextQuestion from '../step3/renderNextQuestion.js'
import { explode } from '@ddlab/bomb'

// *2.E
export default function handleAnswerSelected(didUserGetQuestionRight) {
  if (didUserGetQuestionRight) {
    confetti.start()
    const audioElement = document.getElementById('successAudio')
    audioElement.play()
    setTimeout(() => {
      confetti.stop()
      alert('You got it right!')
      audioElement.load()
      renderNextQuestion()
    }, 2000)
  } else {
    const audioElement = document.getElementById('failureAudio')
    audioElement.play()
    setTimeout(() => {
      explode(document.getElementsByClassName('container-game')[0])
      setTimeout(() => {
        alert('You got it wrong!')
        audioElement.load()
        renderNextQuestion()
      }, 1000)
    }, 1000)
  }
}
