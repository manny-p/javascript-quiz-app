// Objects.keys and Object.values
// not ideal for this situation

// questions[0].answers[0].value; // Displays the first question's first answer.

export default [
  {
    question: 'question one',
    answers: [
      {
        value: 'num 1',
        correct: true,
      },
      {
        value: 'number 2',
        correct: false,
      },
      {
        value: 'n3',
        correct: false,
      },
      {
        value: '4',
        correct: false,
      },
    ],
  },
  {
    question: 'question y',
    answers: [
      {
        value: 'n1 qy',
        correct: false,
      },
      {
        value: 'n2 qy',
        correct: false,
      },
      {
        value: 'n3 qy',
        correct: false,
      },
      {
        value: 'n4 qy',
        correct: true,
      },
    ],
  },
]

// console.log(questions[index].answers.correct)

// {
//   question2: 'question 2',
//   answer2: 'answer 2',
// },
// {
//   question3: 'question 3',
//   answer3: 'answer 3',
// },
// {
//   question4: 'question 4',
//   answer4: 'answer 4',
// },
// {
//   question5: 'question 5',
//   answer5: 'answer 5',
// },
// {
//   question6: 'question 6',
//   answer6: 'answer 6',
// },
// {
//   question7: 'question 7',
//   answer7: 'answer 7',
// },
// ]
