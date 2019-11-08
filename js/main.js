//VARIABLES
var audio = new Audio("js/song.mp3");
// var video = new Video("js/video.mp4")
var clock = document.getElementById("timer");
var startBtn = document.getElementById("start");
var questions = document.querySelector(".questions");
var answers = document.querySelector(".answers");
var answerA = document.getElementById("A");
var answerB = document.getElementById("B");
var answerC = document.getElementById("C");
var answerD = document.getElementById("D");
var youLose = document.querySelector(".loser");
var ranOutOfTime = document.querySelector(".ran_out");
var body = document.querySelector("body");
var replayBtn = document.getElementById("replay");
var winner = document.getElementById("winner");
var questionNumber = document.getElementById("question_number")

let questionNum = 0;

const setOfQuestions = [
    {
        question: ["HOW DO YOU SAY NOT EQUAL TO IN JAVASCRIPT?", "WHICH OF THE FOLLOWING DOES NOT HAVE THE RIGHT SYNTAX FOR A FUNCTION?", "IF IT'S NOT AN OBJECT, THEN WHAT IS IT?"],
        options: [["/==", ".NOTEQUAL", "0", "!=="],["LET X = FUNCTION[] ()", "VAR X = FUNCTION(){}", "FUNCTION = () => {}", "FUNCTION(){}"], ["AN ARRAY", "A PRIMITIVE", "A VARIABLE", "CSS"]],
        correctAnswer: ["!==", "LET X = FUNCTION[] ()", "A PRIMITIVE"],
        userAnswer: null
    },
    {
        question: ["WHICH OF THE FOLLOWING METHODS HAS AN ACCUMULATOR AS A CALLBACK ARGUMENT?", "WHEN IS A FUNCTION CONSIDERED TO BE A METHOD?", "WHAT IS THE NAME OF THE PROPERTY ON EVENT LISTENERS THAT REPRESENTS THE DOM ELEMENT THAT DISPATCHES THE EVENT?"],
        options: [["REDUCE", "FILTER", "SOME", "FIND"], ["WHEN IT IS ANONYMOUS", "WHEN IT IS A CALLBACK FUNCTION", "WHEN IT IS WITHIN AN OBJECT", "WHEN IT IS A RECURSIVE FUNCTION"], ["TARGET", "CALLBACK FUNCTION", ".ADD", "CLICK"]],
        correctAnswer: ["REDUCE", "WHEN IT IS WITHIN AN OBJECT", "TARGET"],
        userAnswer: null,
    },
    {
        question: ["WHAT VALUE IS THE DEFAULT FOR THE FLEX-DIRECTION PROPERTY?", "A LOOP THAT NEVER ENDS IS CALLED A ______", "WHY DO CLASSES EXIST IN OOP"],
        options: [["GRID-BOX", "ROW", "FLEXBOX", "COLUMN"], ["FOR LOOP", "FOR EACH LOOP", "INFINITE LOOP", "INFINITY.BED.BATH.AND.BEYOND"], ["TO DISTINGUISH BETWEEN OBJECTS", "TO ACCESS HTML CLASSES", "TO CALL CONSTRUCTOR METHODS", "TO CREATE OBJECTS"]],
        correctAnswer: ["ROW", "INFINITE LOOP", "TO CREATE OBJECTS"],
        userAnswer: null,
    },
    {
        question: ["WHAT'S A CALLBACK FUNCTION", "WHAT DOES JQUERY RETURN WHEN IT IS PASSED A STRING REPRESENTING A CSS3 SELECTOR RULE?", "WHERE IS A FUNCTION PLACED WHEN INVOKED?"],
        options: [["A FOREACH METHOD", "AN ANONYMOUS FUNCTION PASSED AS AN ARGUMENT", "A FUNCTION PASSED AS AN ARGUMENT", "AN ARRAY OF FUNCTIONS"], ["AN OBJECT OF ARRAYS", "A CALLBACK", "AN ARRAY OF RULES", "A JQUERY OBJECT"],["CALLSTACK", "ARRAY ITERATOR", "CALLBACK", "CLASS OBJECTS"]],
        correctAnswer: ["A FUNCTION BEING PASSED AS AN ARGUMENT", "A JQUERY OBJECT", "CALLSTACK"],
        userAnswer: null,
    },
    {
        question: ["WHAT CSS FEATURE IS FUNAMENTAL TO THE IMPLEMENTATION OF RESPONSIVE DESIGN?", "WHICH OF THE FOLLOWING IS NOT TRUE ABOUT .THIS?", "WHAT IS THIS BOUND TO WITHIN A METHOD INVOKED ON AN OBJECT?"],
        options: [["@SUPPORTS", "RESPONSIVE-DESIGN: ACTIVE;", "MOCHA", "@MEDIA QUERIES"], ["IT IS ACCESSIBLE IN THE GLOBAL SCOPE", "IT IS A PRE-DEFINED VARIABLE", "ITS VALUE CANNOT BE CHANGED", "A WAY TO IMPLEMENT CODE REUSE"], ["TO THE OBJECT", "TO THE SHINY NEW OBJECT", "TO THE ARGUMENT OF THE FUNCTION", "TO THE RESULT OF THE FUNCTION"]],
        correctAnswer: ["@MEDIA QUERIES", "ITS VALUE CANNOT BE CHANGED", "TO THE OBJECT"],
        userAnswer: null,
    } 
];

var randomNum = function(min, max) {
    min = Math.ceil(0);
    max = Math.floor(2);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }
  var x;

function checkAnswer(evt) {
    setOfQuestions[questionNum].userAnswer = evt.target.textContent; 
    if (questionNum === 5) {
        winner.style.visibility = "visible"; 
        answers.style.visibility = "hidden";
        questions.style.visibility = "hidden";
        clock.style.visibility = "hidden";
        replayBtn.style.visibility = "visible"
        clearInterval(count);
        clearTimeout(timer); 
        return;  
    }

    if (setOfQuestions[questionNum].userAnswer === setOfQuestions[questionNum].correctAnswer[x]) {
        questionNum += 1;
        showQuestions(questionNum);
     } else if (setOfQuestions[questionNum].userAnswer === null) {
        answers.style.visibility = "hidden";
        questions.style.visibility = "hidden";
        ranOutOfTime.style.visibility = "visible";
        replayBtn.style.visibility = "visible";
        clock.style.visibility = "hidden";
        clearInterval(count);
        clearTimeout(timer);  
    } else {
        answers.style.visibility = "hidden";
        questions.style.visibility = "hidden";
        youLose.style.visibility = "visible";
        replayBtn.style.visibility = "visible";
        clock.style.visibility = "hidden";
        clearInterval(count);
        clearTimeout(timer); 
    }
}

let count;

function startTimer(seconds) {
    count = setInterval(function() {
        clock.innerHTML = seconds;
        seconds--;
        if (seconds === -1) {
            clearInterval(count);
        }
        return;
    }, 1000); 
}

let timer;

function checkForLoss() {
   
    timer = setTimeout(function() {
            
             if (questions.style.visibility !== "hidden" && answers.style.visibility !== "hidden") {
                answers.style.visibility = "hidden";
                questions.style.visibility = "hidden";
                ranOutOfTime.style.visibility = "visible";
                replayBtn.style.visibility = "visible";
            }
    } , questionNum === 0 ? 16000 : questionNum <= 2 ? 31000 : questionNum <= 4 ? 46000 : 0);     
} 
  
function init() {
    replayBtn.style.visibility = "hidden";
    questions.style.visibility = "hidden";
    answers.style.visibility = "hidden";
    youLose.style.visibility = "hidden";
    ranOutOfTime.style.visibility = "hidden";
    winner.style.visibility = "hidden";
        for(let i = 0; i < answers.children.length; i++) {
            answerA.addEventListener("click", checkAnswer);
            answerB.addEventListener("click", checkAnswer);
            answerC.addEventListener("click", checkAnswer);
            answerD.addEventListener("click", checkAnswer);
        }
}


function showQuestions(order) {
     x = randomNum(0, 2);
    clearTimeout(timer);
    questions.innerHTML = setOfQuestions[order].question[x]; 
    answerA.innerHTML = setOfQuestions[order].options[x][0];
    answerB.innerHTML = setOfQuestions[order].options[x][1];
    answerC.innerHTML = setOfQuestions[order].options[x][2];
    answerD.innerHTML = setOfQuestions[order].options[x][3];
    clearInterval(count);
    checkForLoss(); 
    if (questionNum === 0) {
        startTimer(15)
    } else if (questionNum <= 2) {
        startTimer(30)
    } else {
        startTimer(45)
    }
    
}

replayBtn.addEventListener('click', function() {
    body.style.background = "url(https://i.imgur.com/1YQ2PRF.png) no-repeat center center fixed";
    body.style.backgroundColor = "rgb(67, 94, 167)";
    startBtn.style.visibility = "visible";
    questionNum = 0;
        init();
    });

function begin() {
    winner.style.visibility = "hidden";
    replayBtn.style.visibility = "hidden";
    startBtn.style.visibility = "hidden";
    questions.style.visibility = "visible";
    answers.style.visibility = "visible";
    body.style.background = "url(https://images.ctfassets.net/m9t8fn3f4fre/7v43aGpsOfzA66mrYuVF7p/33f6053190b842dda5001a08b36b10f6/Background_BaseGame_1280x720__1_.png)";
    audio.play();
    clock.style.visibility = "visible";
    showQuestions(questionNum);
}

startBtn.addEventListener("click", begin); 

init();