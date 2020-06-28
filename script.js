// questions
var questions = [{
  question: 'What color is the sky?',
  choiceA: 'Blue',
  choiceB: 'Purple',
  choiceC: 'Green',
  correct: 'A'
}, {
  question: "What is the first letter of the alphabet?",
  choiceA: 'Z',
  choiceB: 'A',
  choiceC: 'L',
  correct: 'B'
}, {
  question: 'Who is the current President of the United States?',
  choiceA: 'Biden',
  choiceB: 'Obama',
  choiceC: 'Trump',
  correct: 'C'
}, {
  question: 'What city is the capital of Alabama?',
  choiceA: 'Birmingham',
  choiceB: 'Montgomery',
  choiceC: 'Huntsville',
  correct: 'B'
}, {
  question: 'What is the mascot of Auburn University?',
  choiceA: 'Elephant',
  choiceB: 'Blazers',
  choiceC: 'Tiger',
  correct: 'C'
}];

// global variables
var start = document.getElementById('start-btn'),
    startContainer = document.getElementById('start-container'),
    quiz = document.getElementById('quiz-container'),
    question = document.getElementById('question'),
    qImg = document.getElementById('quiz-img'),
    choiceA = document.getElementById('choice-a'),
    choiceB = document.getElementById('choice-b'),
    choiceC = document.getElementById('choice-c'),
    counter = document.getElementById('counter'),
    timeGauge = document.getElementById('timeGauge'),
    progress = document.getElementById('progress'),
    scoreDiv = document.getElementById('score'),
    scoreContent = document.getElementById('score-content'),
    submitBtn = document.getElementById('submit-score'),
    userName = document.getElementById('user-name'),
    userScore = 0,
    highScoreDiv = document.getElementById('high-score-container'),
    runningQuestion = 0,
    count = 0,
    users = [],
    questionTime = 15, // 15s
    lastQuestion = questions.length - 1,
    gaugeWidth = 150, // 150px
    gaugeUnit = gaugeWidth / questionTime,
    score = 0;
let TIMER;

start.addEventListener("click", startQuiz);
if (localStorage.getItem('users')) {
  users = JSON.parse(localStorage.getItem('users'));
}

// start quiz
function startQuiz() {
  startContainer.classList.add('d-none');
  quiz.classList.remove('d-none');
  renderQuestion();
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render a question
function renderQuestion() {
  var q = questions[runningQuestion];

  question.innerHTML = q.question;
  qImg.src = q.imgSrc;
  choiceA.textContent = q.choiceA;
  choiceB.textContent = q.choiceB;
  choiceC.textContent = q.choiceC;
}

// render progress
function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}

// counter render
function renderCounter() {
  if (count <= questionTime) {
    counter.textContent = count;
    timeGauge.style.width = count * gaugeUnit + "px";
    count++
  } else {
    count = 0;
    // change progress color to red
    answerIsWrong();
    if (runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
    } else {
      // end the quiz and show the score
      clearInterval(TIMER);
      scoreRender();
    }
  }
}

// checkAnwer
function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    // answer is correct
    score++;
    // change progress color to green
    answerIsCorrect();
  } else {
    // answer is wrong
    // change progress color to red
    answerIsWrong();
  }
  count = 0;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    // end the quiz and show the score
    clearInterval(TIMER);
    scoreRender();
  }
}

// answer is correct
function answerIsCorrect() {
  document.getElementById(runningQuestion).classList.add('correct');
}

// answer is Wrong
function answerIsWrong() {
  document.getElementById(runningQuestion).classList.add('incorrect');
}

// score render
function scoreRender(userscore) {
  quiz.classList.add('d-none');
  scoreDiv.classList.remove('d-none');

  // calculate the amount of question percent answered by the user
  userScore = Math.round(100 * score / questions.length);

  // return userScore;

  scoreContent.textContent = 'You scored ' + userScore + '%!';
}


submitBtn.addEventListener('click', function(event) {
  event.prevendDefault;

  var user = {
    userName: userName.value.trim().toUpperCase(),
    score: userScore.toString()
  };

  users.push(user);

  // users.sort(function(a, b) {
  //   return parseFloat(a.score) - parseFloat(b.score);
  // });

  localStorage.setItem('users', JSON.stringify(users));

  scoreDiv.classList.add('d-none');

  highScoreDiv.classList.remove('d-none');

  for (var i = 0; i < users.length; i++) {

    var highScoreList = document.querySelector('ul');

    var li = document.createElement('li');

    li.textContent = `${users[i].userName}: ${users[i].score}`;

    highScoreList.append(li);
  }
});