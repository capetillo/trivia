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

questionNumber = 1 + questionNum

const setOfQuestions = [
    {
        question: "HOW DO YOU SAY NOT EQUAL TO IN JAVASCRIPT?",
        options: ["/==", ".NOTEQUAL", "0", "!=="],
        correctAnswer: "!==",
        userAnswer: null,
    },
    {
        question: "WHICH OF THE FOLLOWING DOES NOT HAVE THE RIGHT SYNTAX FOR A FUNCTION?",
        options: ["LET X = FUNCTION[] ()", "VAR X = FUNCTION(){}", "FUNCTION = () => {}", "FUNCTION(){}"],
        correctAnswer: "LET X = FUNCTION[] ()",
        userAnswer: null,
    },
    {
        question: "IF IT'S NOT AN OBJECT, THEN WHAT IS IT?",
        options: ["AN ARRAY", "A PRIMITIVE", "A VARIABLE", "CSS"],
        correctAnswer: "A PRIMITIVE",
        userAnswer: null,
    },
    {
        question: "WHICH OF THE FOLLOWING METHODS HAS AN ACCUMULATOR AS A CALLBACK ARGUMENT?",
        options: ["REDUCE", "FILTER", "SOME", "FIND"],
        correctAnswer: "REDUCE",
        userAnswer: null,
    },
    {
        question: "WHEN IS A FUNCTION CONSIDERED TO BE A METHOD?",
        options: ["WHEN IT IS ANONYMOUS", "WHEN IT IS A CALLBACK FUNCTION", "WHEN IT IS WITHIN AN OBJECT", "WHEN IT IS A RECURSIVE FUNCTION"],
        correctAnswer: "WHEN IT IS WITHIN AN OBJECT",
        userAnswer: null,
    },
    {
        question: "WHAT IS THE NAME OF THE PROPERTY ON EVENT LISTENERS THAT REPRESENTS THE DOM ELEMENT THAT DISPATCHES THE EVENT?",
        options: ["TARGET", "CALLBACK FUNCTION", ".ADD", "CLICK"],
        correctAnswer: "TARGET",
        userAnswer: null,
    },
    {
        question: "WHAT VALUE IS THE DEFAULT FOR THE FLEX-DIRECTION PROPERTY?",
        options: ["GRID-BOX", "ROW", "FLEXBOX", "COLUMN"],
        correctAnswer: "ROW",
        userAnswer: null,
    },
    {
        question: "A LOOP THAT NEVER ENDS IS CALLED A ______",
        options: ["FOR LOOP", "FOR EACH LOOP", "INFINITE LOOP", "INFINITY.BED.BATH.AND.BEYOND"],
        correctAnswer: "INFINITE LOOP",
        userAnswer: null,
    },
    {
        question: "WHY DO CLASSES EXIST IN OOP",
        options: ["TO DISTINGUISH BETWEEN OBJECTS", "TO ACCESS HTML CLASSES", "TO CALL CONSTRUCTOR METHODS", "TO CREATE OBJECTS"],
        correctAnswer: "TO CREATE OBJECTS",
        userAnswer: null,
    },
    {
        question: "WHAT'S A CALLBACK FUNCTION",
        options: ["A FOREACH METHOD", "AN ANONYMOUS FUNCTION PASSED AS AN ARGUMENT", "A FUNCTION PASSED AS AN ARGUMENT", "AN ARRAY OF FUNCTIONS"],
        correctAnswer: "A FUNCTION BEING PASSED AS AN ARGUMENT",
        userAnswer: null,
    },
    {
        question: "WHAT DOES JQUERY RETURN WHEN IT IS PASSED A STRING REPRESENTING A CSS3 SELECTOR RULE?",
        options: ["AN OBJECT OF ARRAYS", "A CALLBACK", "AN ARRAY OF RULES", "A JQUERY OBJECT"],
        correctAnswer: "A JQUERY OBJECT",
        userAnswer: null,
    },
    {
        question: "LAST ONE",
        options: ["I know", "4", "Don't care", "Confused"],
        correctAnswer: "4",
        userAnswer: null,
    },
    {
        question: "WHERE IS A A FUNCTION PLACED WHEN INVOKED?",
        options: ["CALLSTACK", "ARRAY ITERATOR", "CALLBACK", "CLASS OBJECTS"],
        correctAnswer: "CALLSTACK",
        userAnswer: null,
    },
    {
        question: "WHAT CSS FEATURE IS FUNAMENTAL TO THE IMPLEMENTATION OF RESPONSIVE DESIGN?",
        options: ["@SUPPORTS", "RESPONSIVE-DESIGN: ACTIVE;", "MOCHA", "@MEDIA QUERIES"],
        correctAnswer: "@MEDIA QUERIES",
        userAnswer: null,
    },
    {
        question: "WHICH OF THE FOLLOWING IS NOT TRUE ABOUT .THIS?",
        options: ["IT IS ACCESSIBLE IN THE GLOBAL SCOPE", "IT IS A PRE-DEFINED VARIABLE", "ITS VALUE CANNOT BE CHANGED", "A WAY TO IMPLEMENT CODE REUSE"],
        correctAnswer: "ITS VALUE CANNOT BE CHANGED",
        userAnswer: null,
    }
];


function checkAnswer(evt) {
    setOfQuestions[questionNum].userAnswer = evt.target.textContent; 
    console.log('THEIR ANSWER' , evt.target.textContent);
    console.log("QUESTION NUM ", questionNum)
    if (questionNum === 13) {
        winner.style.visibility = "visible"; 
        answers.style.visibility = "hidden";
        questions.style.visibility = "hidden";
        clock.style.visibility = "hidden";
        replayBtn.style.visibility = "visible"
        clearInterval(count);
        clearTimeout(timer); 
        //questionNumber.style.visibility = "hidden";
        return;  
    }
    if (setOfQuestions[questionNum].userAnswer === setOfQuestions[questionNum].correctAnswer) {
        questionNum += 1;
        showQuestions(questionNum);
     } else if (setOfQuestions[questionNum].userAnswer === null) {
        answers.style.visibility = "hidden";
        questions.style.visibility = "hidden";
        ranOutOfTime.style.visibility = "visible";
        replayBtn.style.visibility = "visible";
        clock.style.visibility = "hidden";
        //questionNumber.style.visibility = "hidden";
        clearInterval(count);
        clearTimeout(timer);  
    } else {
        answers.style.visibility = "hidden";
        questions.style.visibility = "hidden";
        youLose.style.visibility = "visible";
        replayBtn.style.visibility = "visible";
        clock.style.visibility = "hidden";
        //questionNumber.style.visibility = "hidden";
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
    } , questionNum < 4 ? 16000 : questionNum < 9 ? 31000 : questionNum < 14 ? 46000 : 0);     
} 
  
//APPEARANCE AT BEGINNING AND WHEN REPLAY IS CLICKED
function init() {
    //questionNumber.style.visibility = "hidden";
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

//Makes questions + options visible
function showQuestions(order) {
    clearTimeout(timer);
    questions.innerHTML = setOfQuestions[order].question; 
    answerA.innerHTML = setOfQuestions[order].options[0];
    answerB.innerHTML = setOfQuestions[order].options[1];
    answerC.innerHTML = setOfQuestions[order].options[2];
    answerD.innerHTML = setOfQuestions[order].options[3];
    clearInterval(count);
    checkForLoss(); 
    if (questionNum === 0 || questionNum + 1 < 5) {
        startTimer(15)
    } else if (questionNum + 1 >= 5 && questionNum + 1 < 10) {
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


//Makes start button's visibility hidden and questions visible
function begin() {
    //questionNumber.style.visibility = "visible";
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