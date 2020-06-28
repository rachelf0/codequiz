document.addEventListener('DOMContentLoaded', () => {
  const timeLeftDisplay = document.querySelector('#time-left')
  const startButton = document.getElementById('start-btn')
  const nextButton = document.getElementById('next-btn')
  const questionContainerElement = document.getElementById('question-container')
  const questionElement = document.getElementById('question')
  const answerButtonsElement = document.getElementById('answer-buttons')
  const startBtn = document.querySelector('#start-btn')
  let myVar;
  let timeLeft = 30
  let shuffledQuestions, currentQuestionIndex
  let gameScore = 0;

  // const countdownEl = document.getElementById('countdown');

  startButton.addEventListener('click', function(){
       startGame();
  })
  
  // startButton.addEventListener('click', updateCountdown)
  nextButton.addEventListener('click', () => {
      currentQuestionIndex++
      setNextQuestion()
  })

  function updateCountdown() {
       myVar = setInterval(changeClock, 1000) 
      function changeClock() {
          if (timeLeft <= -1) {
              timeLeft = 5;
              return clearInterval(myVar) 
          }
          console.log(timeLeft);
          timeLeftDisplay.innerHTML = timeLeft
          timeLeft -=1
      }
  }

  
  
  startBtn.addEventListener('click', updateCountdown)

  

  function startGame() {
      console.log('started')
      startButton.classList.add('hide')
      shuffledQuestions = questions.sort(() => Math.random() - .5)
      currentQuestionIndex = 0
      questionContainerElement.classList.remove('hide')
      setNextQuestion()

  }

  function setNextQuestion() {
      resetState()
      showQuestion(shuffledQuestions[currentQuestionIndex])
  }

  function showQuestion(question) {
      questionElement.innerText = question.question
      question.answers.forEach(answer => {
          const button = document.createElement('button')
          button.innerText = answer.text
          button.classList.add('btn')
          if (answer.correct) {
              button.dataset.correct = answer.correct
          }
          button.addEventListener('click', selectAnswer)
          answerButtonsElement.appendChild(button)
      })
  }

  function resetState() {
      clearStatusClass(document.body)
      nextButton.classList.add('hide')
      while (answerButtonsElement.firstChild) {
          answerButtonsElement.removeChild(answerButtonsElement.firstChild)
      }

  }

  function selectAnswer(e) {
      const selectedButton = e.target
      const correct = selectedButton.dataset.correct
      setStatusClass(document.body, correct)
      Array.from(answerButtonsElement.children).forEach(button => {
          setStatusClass(button, button.dataset.correct)
      })
      if (shuffledQuestions.length > currentQuestionIndex + 1) {
          nextButton.classList.remove('hide')
      } else {
          startButton.innerText = 'Restart'
          startButton.classList.remove('hide')
      }

  }

  function setStatusClass(element, correct) {
      clearStatusClass(element)
      if (correct) {
          element.classList.add('correct')
          gameScore++;
          console.log("score is " + gameScore);
      } else {
          element.classList.add('wrong')
          // debugger;
      }
  }

  function clearStatusClass(element) {
      element.classList.remove('correct')
      element.classList.remove('wrong')
  }

const questions = [
  {
    question: "What is the last letter of the alphabet?",
    answers: [
      { text: 'a', correct: false },
      { text: 'm', correct: false },
      { text: 'z', correct: true },
      { text: 'y', correct: false },
    ]
  },
  {
    question: "What is the first letter of the alphabet?",
    answers: [
      { text: 'a', correct: true },
      { text: 'm', correct: false },
      { text: 'z', correct: false },
      { text: 'y', correct: false },
    ]
  },
  {
    question: "What color is the sky?",
    answers: [
      { text: 'green', correct: false },
      { text: 'purple', correct: false },
      { text: 'red', correct: false },
      { text: 'blue', correct: true },
    ]
  },
  {
    question: "What is 2+2?",
    answers: [
      { text: '5', correct: false },
      { text: '2', correct: false },
      { text: '6', correct: false },
      { text: '4', correct: true },
    ]
  },
  ]
})



