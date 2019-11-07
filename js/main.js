//VARIABLES
var audio = new Audio("js/song.mp3");
var video = new Video("js/video.mp4")
var clock = document.getElementById("timer");
var startBtn = document.getElementById("start");
var header = document.querySelector(".header");
var questionAndAnswers = document.querySelector(".question-and-answers");
var questions = document.querySelector(".questions");
var answers = document.querySelector(".answers");
var answerA = document.getElementById("A");
var answerB = document.getElementById("B");
var answerC = document.getElementById("C");
var answerD = document.getElementById("D");
var youLose = document.querySelector(".loser");
var ranOutOfTime = document.querySelector(".ran_out");
var body = document.querySelector("body");



// console.log("this is all of it", questionAndAnswers);
// console.log("this is questions", questions);
// console.log("these are all the answers", answers);
// console.log("this is answer A", answerA);

let questionNum = 0;

const setOfQuestions = [
    {
        question: "If it's not an object, then what is it?",
        options: ["An array", "A primitive", "A variable", "CSS"],
        correctAnswer: "A primitive",
        userAnswer: null,
        passed: null,
    },
    {
        question: "2 + 2",
        options: ["I know", "4", "Don't care", "Confused"],
        correctAnswer: "4",
        userAnswer: null,
        passed: null,
    },
    {
        question: "2 + 3",
        options: ["5", "Don't know", "Don't care", "Confused"],
        correctAnswer: "5",
        userAnswer: null,
        passed: null,
    },
    {
        question: "3 - 1",
        options: ["I know", "2", "Don't care", "Confused"],
        correctAnswer: "2",
        userAnswer: null,
        passed: null,
    },
    {
        question: "3 + 1",
        options: ["I know", "4", "Don't care", "Confused"],
        correctAnswer: "4",
        userAnswer: null,
        passed: null,
    },
    {
        question: "6 x 2",
        options: ["I know", "12", "Don't care", "Confused"],
        correctAnswer: "12",
        userAnswer: null,
        passed: null,
    },
    {
        question: "7 + 1",
        options: ["I know", "8", "Don't care", "Confused"],
        correctAnswer: "8",
        userAnswer: null,
        passed: null,
    },
    {
        question: "0 + 1",
        options: ["I know", "1", "Don't care", "Confused"],
        correctAnswer: "1",
        userAnswer: null,
        passed: null,
    },
    {
        question: "2 x 2",
        options: ["I know", "4", "Don't care", "Confused"],
        correctAnswer: "4",
        userAnswer: null,
        passed: null,
    },
    {
        question: "5 + 4",
        options: ["I know", "9", "Don't care", "Confused"],
        correctAnswer: "9",
        userAnswer: null,
        passed: null,
    },
    {
        question: "10 - 1",
        options: ["I know", "9", "Don't care", "Confused"],
        correctAnswer: "9",
        userAnswer: null,
        passed: null,
    },
    {
        question: "8 x 2",
        options: ["I know", "16", "Don't care", "Confused"],
        correctAnswer: "16",
        userAnswer: null,
        passed: null,
    },
    {
        question: "10 + 1",
        options: ["I know", "11", "Don't care", "Confused"],
        correctAnswer: "11",
        userAnswer: null,
        passed: null,
    },
    {
        question: "you're finished",
        options: ["I know", "congrats", "Don't care", "Confused"],
        correctAnswer: "congrats",
        userAnswer: null,
        passed: null,
    },
    {
        question: "you're finished",
        options: ["I know", "congrats", "Don't care", "Confused"],
        correctAnswer: "congrats",
        userAnswer: null,
        passed: null,
    }
];



function checkAnswer(evt) {
    setOfQuestions[questionNum].userAnswer = evt.target.textContent; 
    console.log('THEIR ANSWER' , evt.target.textContent);
    if (setOfQuestions[questionNum].userAnswer === setOfQuestions[questionNum].correctAnswer){
        //setOfQuestions[questionNum].passed === true;
        questionNum += 1;
        showQuestions(questionNum);
     } else if (setOfQuestions[questionNum].userAnswer === null) {
        answerA.style.visibility = "hidden";
        answerB.style.visibility = "hidden";
        answerC.style.visibility = "hidden";
        answerD.style.visibility = "hidden";
        questions.style.visibility = "hidden";
        youLose.style.visibility = "visible";
        //setOfQuestions[questionNum].passed === false;
    } else {
        answerA.style.visibility = "hidden";
        answerB.style.visibility = "hidden";
        answerC.style.visibility = "hidden";
        answerD.style.visibility = "hidden";
        questions.style.visibility = "hidden";
        youLose.style.visibility = "visible";
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
                answerA.style.visibility = "hidden";
                answerB.style.visibility = "hidden";
                answerC.style.visibility = "hidden";
                answerD.style.visibility = "hidden";
                questions.style.visibility = "hidden";
                ranOutOfTime.style.visibility = "visible";
            }
    } , questionNum < 4 ? 16000 : questionNum < 9 ? 31000 : questionNum < 14 ? 46000 : 15000);     
} 
  

//APPEARANCE?
function init() {
    questions.style.visibility = "hidden";
    answers.style.visibility = "hidden";
    youLose.style.visibility = "hidden";
    ranOutOfTime.style.visibility = "hidden";
        for(let i = 0; i < answers.children.length; i++) {
            answerA.addEventListener("click", checkAnswer);
            answerB.addEventListener("click", checkAnswer);
            answerC.addEventListener("click", checkAnswer);
            answerD.addEventListener("click", checkAnswer);
        }
}



//Pushes clicked answer into theirAnswer and compares it to correctAnswer



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




//Makes start button's visibility hidden and questions visible
function begin() {
    startBtn.style.visibility = "hidden";
    header.style.visibility = "hidden";
    questions.style.visibility = "visible";
    answers.style.visibility = "visible";
    body.style.background = "url(https://images.ctfassets.net/m9t8fn3f4fre/7v43aGpsOfzA66mrYuVF7p/33f6053190b842dda5001a08b36b10f6/Background_BaseGame_1280x720__1_.png)";
    //audio.play();
    showQuestions(questionNum);
    
    }

startBtn.addEventListener("click", begin); 

init();