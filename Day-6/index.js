const quizData = [
  {
    question: "Which one of the following not comes under datastructure?",
    options: [
      { Option: "Array", correct: "False" },
      { Option: "int", correct: "True" },
      { Option: "Linkedlist", correct: "False" },
      { Option: "Tree", correct: "False" },
    ],
    explanation: "You Made It 🤠!! int is a DATATYPE not a datastructure",
  },
  {
    question: "console.log('1' + 2 - 1) output of following code?",
    options: [
      { Option: "2", correct: "False" },
      { Option: "1", correct: "False" },
      { Option: "undefined", correct: "False" },
      { Option: "11", correct: "True" },
    ],
    explanation:
      "'1' + 2: The + operator is used for both string concatenation, The string is converted to the number 12, and then 12 - 1 is calculated, resulting in 11.",
  },
  {
    question: "Which datastucture uses Recursion ?",
    options: [
      { Option: "Array", correct: "False" },
      { Option: "Stack", correct: "True" },
      { Option: "Linkedlist", correct: "False" },
      { Option: "None", correct: "False" },
    ],
    explanation:
      " Got it 😍 Recursion often involves the use of the call stack",
  },
  {
    question: "Which one of the following not a programming language?",
    options: [
      { Option: "HTML", correct: "True" },
      { Option: "PHP", correct: "False" },
      { Option: "Javascript", correct: "False" },
      { Option: ".net", correct: "False" },
    ],
    explanation: "HURRAY!! 🥳 HTML is scripting language",
  },
  {
    question:
      "Which one of the following programming language known for it's simplicity",
    options: [
      { Option: "CSS", correct: "False" },
      { Option: "HTML", correct: "False" },
      { Option: "Python", correct: "True" },
      { Option: "RUBY", correct: "False" },
    ],
    explanation: "Here You Go ! 🚀 Python known for it's simplicity",
  },
];

const welcome = document.getElementById("welcome");
const start = document.getElementById("start");
const showQuiz = document.getElementById("quiz");
const question = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const explanation = document.getElementById("explanation");
const next = document.getElementById("next");
const scoreDiv = document.getElementById("scoreDiv");

start.onclick = () => {
  welcome.style.display = "none";
  startQuiz();
};

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  resetOption();
  showQuiz.style.display = "flex";
  let curretQuestion = quizData[currentQuestionIndex];
  question.innerHTML = curretQuestion.question;
  curretQuestion.options.forEach((optioon) => {
    const eachOptionContainer = document.createElement("div");
    eachOptionContainer.classList.add("eachOption");
    const inputOpt = document.createElement("input");
    inputOpt.type = "radio";
    inputOpt.name = "myoptions";
    inputOpt.id = optioon.Option;
    const labelOpt = document.createElement("label");
    labelOpt.htmlFor = optioon.Option;
    labelOpt.innerHTML = optioon.Option;
    const breakOpt = document.createElement("br");
    eachOptionContainer.appendChild(inputOpt);
    eachOptionContainer.appendChild(labelOpt);
    eachOptionContainer.appendChild(breakOpt);
    optionsContainer.appendChild(eachOptionContainer);
    if (optioon.correct) {
      labelOpt.dataset.correct = optioon.correct;
    }
    labelOpt.addEventListener("click", function (e) {
      const selectedAns = e.target;
      const isCorrect = selectedAns.dataset.correct === "True";
      if (isCorrect) {
        score++;
        selectedAns.classList.add("correct");
        explanation.innerHTML = curretQuestion.explanation;
        explanation.style.display = "flex";
        next.style.display = "flex";
      } else {
        selectedAns.classList.add("incorrect");
      }
    });
  });
}

function resetOption() {
  while (optionsContainer.firstChild) {
    optionsContainer.removeChild(optionsContainer.firstChild);
  }
  explanation.style.display = "none";
  next.style.display = "none";
}

function handleNext() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    startQuiz();
  } else {
    resetOption();
    question.style.display = "none";
    scoreDiv.style.display = "flex";
    scoreDiv.innerHTML += `${score}/${quizData.length}`;
  }
}

next.onclick = () => {
  if (currentQuestionIndex < quizData.length) {
    handleNext();
  } else {
    startQuiz();
  }
};

// function selectAnswer(e) {
//   const selectedAns = e.target;
//   const isCorrect = selectedAns.dataset.correct === "True";
//   if (isCorrect) {
//     selectedAns.classList.add("correct");

//   } else {
//     selectedAns.classList.add("incorrect");
//   }
// }
