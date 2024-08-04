const quizData = [
  {
      question: "capital on india?",
      options: ["London","Paris", "Delhi",  "Madrid"],
      correct: 2
  },
  {
      question: "who invented telephone?",
      options: ["martin cooper", "Einstin", "Tesla", "Saturn"],
      correct: 0
  },
  {
      question: "king of the jungle?",
      options: ["Elephant", "Lion", "Giraffe", "Hippopotamus"],
      correct: 1
  }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = -1;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const submitBtn = document.getElementById("submit");
const quizEl = document.getElementById("quiz");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const question = quizData[currentQuestion];
  questionEl.textContent = question.question;
  
  optionsEl.innerHTML = "";
  question.options.forEach((option, index) => {
      const button = document.createElement("div");
      button.textContent = option;
      button.classList.add("option");
      button.addEventListener("click", () => selectOption(index));
      optionsEl.appendChild(button);
  });

  submitBtn.style.display = "block";
  resultEl.style.display = "none";
}

function selectOption(index) {
  const options = optionsEl.getElementsByClassName("option");
  for (let i = 0; i < options.length; i++) {
      options[i].classList.remove("selected");
  }
  options[index].classList.add("selected");
  selectedOption = index;
}

function submitAnswer() {
  if (selectedOption === -1) {
      alert("Please select an option!");
      return;
  }

  if (selectedOption === quizData[currentQuestion].correct) {
      score++;
  }

  currentQuestion++;
  selectedOption = -1;

  if (currentQuestion < quizData.length) {
      loadQuestion();
  } else {
      showResult();
  }
}

function showResult() {
  quizEl.style.display = "none";
  resultEl.style.display = "block";
  resultEl.textContent = `You scored ${score} out of ${quizData.length}!`;
}

submitBtn.addEventListener("click", submitAnswer);

loadQuestion();