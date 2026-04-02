document.addEventListener("DOMContentLoaded", () => {
  // ---------- Variables ----------
  const name = "Hassan";
  const age = 20;
  const isStudent = true;
  const designation = undefined;
  const absent = null;
  const num1 = 20;
  const num2 = 5;
  const celsius = 25;
  const fahrenheit = (celsius * 9) / 5 + 32;
  const number = 72;
  const marks = 75;
  let grade;
  const ageForVote = 16;
  let voteMessage;
  const multiplicationNumber = 5;

  // ---------- DOM Elements ----------
  const info = document.getElementById("info");
  const getDetail = document.getElementById("get-detail");

  const output = document.getElementById("output");
  const checkBtn = document.getElementById("check");

  const resultDiv = document.getElementById("result");

  const outputt = document.getElementById("outputt");
  const resultt = document.getElementById("resultt");
  const resulttt = document.getElementById("resulttt");
  const resultttt = document.getElementById("resultttt");

  const container = document.getElementById("numbers");
  const tableDiv = document.getElementById("table");

  // ---------- Event Listeners ----------
  getDetail.addEventListener("click", () => {
    info.innerHTML = `Hi! My name is ${name}, I am ${age} years old, and it is ${isStudent} that I am a student.`;
  });

  checkBtn.addEventListener("click", () => {
    output.innerHTML = `
          <p class="p-2 bg-blue-100 rounded">name → ${typeof name}</p>
          <p class="p-2 bg-green-100 rounded">age → ${typeof age}</p>
          <p class="p-2 bg-yellow-100 rounded">isStudent → ${typeof isStudent}</p>
          <p class="p-2 bg-red-100 rounded">designation → ${typeof designation}</p>
          <p class="p-2 bg-purple-100 rounded">absent → ${typeof absent}</p>
        `;
  });

  // ---------- Math Operations ----------
  resultDiv.innerHTML = `
        <p class="bg-blue-100 p-2 rounded">Addition: ${num1} + ${num2} = ${num1 + num2}</p>
        <p class="bg-green-100 p-2 rounded">Subtraction: ${num1} - ${num2} = ${num1 - num2}</p>
        <p class="bg-yellow-100 p-2 rounded">Multiplication: ${num1} × ${num2} = ${num1 * num2}</p>
        <p class="bg-red-100 p-2 rounded">Division: ${num1} ÷ ${num2} = ${num1 / num2}</p>
      `;

  // ---------- Temperature Conversion ----------
  outputt.innerHTML = `
        <p class="bg-blue-100 p-2 rounded">Celsius: ${celsius}°C</p>
        <p class="bg-green-100 p-2 rounded">Fahrenheit: ${fahrenheit}°F</p>
      `;

  // ---------- Even or Odd ----------
  if (number % 2 === 0) {
    resultt.innerHTML = `<p class="bg-green-100 p-2 rounded">Number ${number} is Even</p>`;
  } else {
    resultt.innerHTML = `<p class="bg-red-100 p-2 rounded">Number ${number} is Odd</p>`;
  }

  // ---------- Grade Checker ----------
  if (marks >= 90) grade = "A";
  else if (marks >= 80) grade = "B";
  else if (marks >= 70) grade = "C";
  else if (marks >= 60) grade = "D";
  else grade = "Fail";

  resulttt.innerHTML = `<p class="bg-blue-100 p-2 rounded">Marks: ${marks} → Grade: ${grade}</p>`;

  // ---------- Voting Eligibility ----------
  voteMessage = ageForVote >= 18 ? "You can vote" : "You cannot vote";
  resultttt.innerHTML = `<p class="bg-blue-100 p-2 rounded">Age: ${ageForVote} → ${voteMessage}</p>`;

  // ---------- Numbers 1 to 10 ----------
  for (let i = 1; i <= 10; i++) {
    container.innerHTML += `<p class="bg-blue-100 p-2 rounded">${i}</p>`;
  }

  // ---------- Multiplication Table ----------
  for (let i = 1; i <= 10; i++) {
    tableDiv.innerHTML += `
          <p class="bg-blue-100 p-2 rounded">
            ${multiplicationNumber} × ${i} = ${multiplicationNumber * i}
          </p>
        `;
  }
});
