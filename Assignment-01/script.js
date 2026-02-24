document.addEventListener("DOMContentLoaded", () => {
  let name = "Fahad";
  let age = 25;
  let isStudent = true;
  const desgination = undefined;
  const absent = null;
  const output = document.getElementById("output");
  const Check = document.getElementById("check");
  let info = document.getElementById("info");
  let getDetail = document.getElementById("get-detail");
  const num1 = 20;
  const num2 = 5;
  const resultDiv = document.getElementById("result");

  resultDiv.innerHTML = `
      <p class="bg-blue-100 p-2 rounded">Addition of ${num1} + ${num2} : ${num1 + num2}</p>
      <p class="bg-green-100 p-2 rounded">Subtraction of ${num1} - ${num2} : ${num1 - num2}</p>
      <p class="bg-yellow-100 p-2 rounded">Multiplication of ${num1} * ${num2} : ${num1 * num2}</p>
      <p class="bg-red-100 p-2 rounded">Division of ${num1} / ${num1} : ${num1 / num2}</p>
    `;

  getDetail.addEventListener("click", () => {
    info.innerHTML = `Hi My Name is ${name} and i am ${age} and  its ${isStudent} i am student`;
  });
  Check.addEventListener("click", () => {
    output.innerHTML = `
      <p class="p-2 bg-blue-100 rounded">name → ${typeof name}</p>
      <p class="p-2 bg-green-100 rounded">age → ${typeof age}</p>
      <p class="p-2 bg-yellow-100 rounded">isStudent → ${typeof isStudent}</p>
      <p class="p-2 bg-red-100 rounded">designation → ${typeof desgination}</p>
      <p class="p-2 bg-purple-100 rounded">absent → ${typeof absent}</p>
    `;
  });
});
