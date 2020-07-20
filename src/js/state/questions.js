// Objects.keys and Object.values
// not ideal for this situation

// questions[0].answers[0].value; // Displays the first question's first answer.

export default [
  {
    question:
      'The document object, like all other global variables, is a property of which object?',
    answers: [
      {
        value: 'location',
        correct: false,
      },
      {
        value: 'body',
        correct: false,
      },
      {
        value: 'window',
        correct: true,
      },
      {
        value: 'localStorage',
        correct: false,
      },
    ],
  },
  {
    question:
      'The ___ is a representation of the document that JavaScript uses to navigate and make changes to a webpage.',
    answers: [
      {
        value: 'global object',
        correct: false,
      },
      {
        value: 'chrome dev tools',
        correct: false,
      },
      {
        value: 'console',
        correct: false,
      },
      {
        value: 'DOM',
        correct: true,
      },
    ],
  },
  {
    question: 'Which of the following is NOT a reserved word in JavaScript?',
    answers: [
      {
        value: ' interface',
        correct: false,
      },
      {
        value: 'program',
        correct: true,
      },
      {
        value: 'throws',
        correct: false,
      },
      {
        value: 'short',
        correct: false,
      },
    ],
  },
  {
    question: 'What causes an endless loop?',
    answers: [
      {
        value: `When the loop's condition never evaluates to false`,
        correct: true,
      },
      {
        value: 'When you use vim as your text editor',
        correct: false,
      },
      {
        value: 'when you use a while loop',
        correct: false,
      },
      {
        value: `when you forget to add 'continue' statement`,
        correct: false,
      },
    ],
  },
  {
    question:
      'Which of the following statements will make the JavaScript interpreter exit a loop even when the loop condition is still true?',
    answers: [
      {
        value: 'stop',
        correct: false,
      },
      {
        value: 'return',
        correct: false,
      },
      {
        value: 'exit',
        correct: false,
      },
      {
        value: 'break',
        correct: true,
      },
    ],
  },
]
