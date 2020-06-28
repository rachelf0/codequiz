document.addEventListener('DOMContentLoaded', () => {
  const timeLeftDisplay = document.querySelector('#time-left')
  const startButton = document.getElementById('start-btn')
  const nextButton = document.getElementById('next-btn')
  const questionContainerElement = document.getElementById('question-container')
  const questionElement = document.getElementById('question')
  const answerButtonsElement = document.getElementById('#start-btn')
  let myVar;
  let timeLeft = 60
  let shuffledQuestions, currentQuestionIndex
  let gameScore = 0;
  
  startButton.addEventListener('click', function () {
    startGame();
  })

  nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
  })

  function updatedCountdown() {
    myVar = setInterval(changeClock, 1000)
    function changeClock () {
      if (timeLeft <= -1) {
        timeLeft = 5;
        return clearInterval(myVar)
      }
      console.log(timeLeft);
      timeLeftDisplay.innerHTML = timeLeft
      timeLeft -=1
    }
  }
})

var questions = [
  {
    title: "What is the last letter of the alphabet?",
    choices: ["a", "k", "z", "i"],
    correct: "z",
  },
  {
    title: "What is the first letter of the alphabet?",
    choices: ["r", "k", "a", "i"],
    correct: "a",
  },
  {
    title: "What color is the sky?",
    choices: ["red", "green", "purple", "blue"],
    correct: "blue",
  },
  {
    title: "What is 2+2?",
    choices: ["5", "4", "1", "2"],
    correct: "4",
  },
]




