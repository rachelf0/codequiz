var displayTimeElem = document.getElementById("displayTime")
var displayTitleElem = document.getElementById("questionTitle")
var btn0Elem = document.getElementById("btn-0")
var btn1Elem = document.getElementById("btn-1")
var btn2Elem = document.getElementById("btn-2")
var btn3Elem = document.getElementById("btn-3")
var timerElem = document.getElementById("countdown")
//use interval timer for the time remaining
var timeRemaining = 60;
var currentQuestion = 0;
var score = 0;
    var score = 0;
    for (var i=0; i < questions; i++) {
        if(response == questions[i].correct){
            score++;
            alert("Correct!");
        }
        else {
            alert("Wrong!");
        }
    }
    alert("you got " + score + "/" + questions);

var questions = [
    {
        title:"What is the last letter of the alphabet?",
        choices:["a","k","z","i"],
        correct:"z",
    },
    {
        title:"What is the first letter of the alphabet?",
        choices:["r","k","a","i"],
        correct:"a",
    },
    {
        title:"What color is the sky?",
        choices:["red","green","purple","blue"],
        correct:"blue",
    },
    {
        title:"What is 2+2?",
        choices:["5","4","1","2"],
        correct:"4",
    },
]
currentQuestion = currentQuestion + 2

//if you ever see object object know you have to access a property (with a ".")
displayTitleElem.textContent = questions[currentQuestion].title

btn0Elem.textContent = questions[currentQuestion].choices


//do the same thing with the buttons as above and you won't need any values in the HTML

// goes in the on click for the start quiz
displayTimeElem.textContent = timeRemaining




