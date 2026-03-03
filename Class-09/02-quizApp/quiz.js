const quizData = [
  {
    question: "Which language runs in the browser?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript",
  },
  {
    question: "Which HTML tag is used for links?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: "<a>",
  },
  {
    question: "Which CSS property changes text color?",
    options: ["background-color", "font-style", "color", "text-align"],
    answer: "color",
  },
  {
    question: "Which keyword declares a variable in JS?",
    options: ["var", "int", "string", "float"],
    answer: "var",
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Google", "Netscape", "Apple"],
    answer: "Netscape",
  },
];

let currentQuestion = 0;
let score = 0;
let selectedAnswers = [];

function loadQuestion() {
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const progressEl = document.getElementById("progress");

  const current = quizData[currentQuestion];
  questionEl.textContent = current.question;
  progressEl.textContent = `Question ${currentQuestion + 1} / ${quizData.length}`;

  optionsEl.innerHTML = "";

  current.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.className =
      "w-full text-left px-4 py-3 rounded-xl border hover:bg-indigo-50 transition";

    btn.onclick = function () {
      selectedAnswers[currentQuestion] = option;
      document
        .querySelectorAll("#options button")
        .forEach((b) =>
          b.classList.remove("bg-indigo-100", "border-indigo-500"),
        );
      btn.classList.add("bg-indigo-100", "border-indigo-500");
    };

    if (selectedAnswers[currentQuestion] === option) {
      btn.classList.add("bg-indigo-100", "border-indigo-500");
    }

    optionsEl.appendChild(btn);
  });
}

function nextQuestion() {
  if (!selectedAnswers[currentQuestion]) {
    alert("Please select an option!");
    return;
  }

  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    showResult();
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
}

function showResult() {
  score = 0;

  quizData.forEach((q, index) => {
    if (selectedAnswers[index] === q.answer) {
      score++;
    }
  });

  const resultEl = document.getElementById("result");
  resultEl.classList.remove("hidden");

  if (score >= 3) {
    resultEl.textContent = `🎉 You Passed! Score: ${score}/${quizData.length}`;
    resultEl.className = "mt-6 text-center text-xl font-bold text-green-600";
  } else {
    resultEl.textContent = `❌ You Failed! Score: ${score}/${quizData.length}`;
    resultEl.className = "mt-6 text-center text-xl font-bold text-red-600";
  }

  document.getElementById("options").innerHTML = "";
  document.getElementById("question").textContent = "Quiz Completed!";
}

loadQuestion();
