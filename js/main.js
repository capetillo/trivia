//VARIABLES
var audio = new Audio('js/song.mp3');


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


// console.log("this is all of it", questionAndAnswers);
// console.log("this is questions", questions);
// console.log("these are all the answers", answers);
// console.log("this is answer A", answerA);

let questionNum = 0;

const setOfQuestions = [
    {
        question: `<p class="questions">If it's not an object, then what is it?</p>`,
        options: ["An array", "A primitive", "A variable", "CSS"],
        correctAnswer: "A primitive",
    },
    {
        question: "why tf",
        options: ["I know", "Don't know", "Don't care", "Confused"],
        correctAnswer: "Don't know",
    },
    {
        question: "hmm",
        options: ["I know Morgan", "Don't know", "Don't care", "Confused"],
        correctAnswer: "I know Morgan",
    },
    {
        question: "why tf",
        options: ["I know", "Don't know", "Don't care", "Confused"],
        correctAnswer: "Don't know",
    },
    {
        question: "why tf",
        options: ["I know", "Don't know", "Don't care", "Confused"],
        correctAnswer: "Don't know",
    },
    {
        question: "why tf",
        options: ["I know", "Don't know", "Don't care", "Confused"],
        correctAnswer: "Don't know",
    },
    {
        question: "why tf",
        options: ["I know", "Don't know", "Don't care", "Confused"],
        correctAnswer: "Don't know",
    },
    {
        question: "why tf",
        options: ["I know", "Don't know", "Don't care", "Confused"],
        correctAnswer: "Don't know",
    },
    {
        question: "why tf",
        options: ["I know", "Don't know", "Don't care", "Confused"],
        correctAnswer: "Don't know",
    },
    {
        question: "why tf",
        options: ["I know", "Don't know", "Don't care", "Confused"],
        correctAnswer: "Don't know",
    },
    {
        question: "why tf",
        options: ["I know", "Don't know", "Don't care", "Confused"],
        correctAnswer: "Don't know",
    },
    {
        question: "why tf",
        options: ["I know", "Don't know", "Don't care", "Confused"],
        correctAnswer: "Don't know",
    },
    {
        question: "why tf",
        options: ["I know", "Don't know", "Don't care", "Confused"],
        correctAnswer: "Don't know",
    },
    {
        question: "why tf",
        options: ["I know", "Don't know", "Don't care", "Confused"],
        correctAnswer: "Don't know",
    }
];


function checkAnswer(evt) {
    // console.log("this is their choice", evt.target.textContent)
        if (evt.target.textContent === setOfQuestions[questionNum].correctAnswer) {
            questionNum += 1;
            questions.textContent = setOfQuestions[questionNum].question; 
            answerA.textContent = setOfQuestions[questionNum].options[0];
            answerB.textContent = setOfQuestions[questionNum].options[1];
            answerC.textContent = setOfQuestions[questionNum].options[2];
            answerD.textContent = setOfQuestions[questionNum].options[3];

         } else {
            answers.style.visibility = "hidden";
            youLose.style.visibility = "visible";
            questions.style.visibility = "hidden";
            }
         }

//APPEARANCE?
function init() {
    questions.style.visibility = "hidden";
    answers.style.visibility = "hidden";
    youLose.style.visibility = "hidden";
        for(let i = 0; i < answers.children.length; i++) {
            answerA.addEventListener("click", checkAnswer);
            answerB.addEventListener("click", checkAnswer);
            answerC.addEventListener("click", checkAnswer);
            answerD.addEventListener("click", checkAnswer);
        }
    }



//Pushes clicked answer into theirAnswer and compares it to correctAnswer




//Makes questions + options visible
 function showQuestions() {
    
        questions.innerHTML = setOfQuestions[0].question;
        answerA.innerHTML = setOfQuestions[0].options[0];
        answerB.innerHTML = setOfQuestions[0].options[1];
        answerC.innerHTML = setOfQuestions[0].options[2];
        answerD.innerHTML = setOfQuestions[0].options[3];
    }


//Makes start button's visibility hidden and questions visible
function begin() {
    startBtn.style.visibility = "hidden";
    header.style.visibility = "hidden";
    answers.style.visibility = "visible";
    questions.style.visibility = "visible";
    audio.play();
    showQuestions();
    }

startBtn.addEventListener("click", begin); 




init();