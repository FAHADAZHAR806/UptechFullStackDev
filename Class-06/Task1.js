/*Task 1: Largest of Three Numbers 
Create three numbers and print the largest.*/

let num1 = 10;
let num2 = 25;
let num3 = 18;

let largest = num1;

if (num2 > largest) {
  largest = num2;
}
if (num3 > largest) {
  largest = num3;
}
console.log("Largest number is:", largest);

/*
Task 2: Positive, Negative or Zero 
Check a number and print: 
• Positive 
• Negative 
• Zero */

let number = 0;

if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

/*Task 23: Simple Login System 
Create: 
let correctUsername = "admin"; 
let correctPassword = "1234"; 
Check: 
• If both correct → "Login Successful" 
• Else → "Invalid Credentials" 
*/
let correctUsername = "admin";
let correctPassword = 1234;
if (correctUsername === "admin" && correctPassword === 1234) {
  console.log("Login Successful");
} else {
  console.log("Invalid Credentials");
}

//// Task4

/*0–100 → 10 per unit 
• 101–200 → 15 per unit 
• 200+ → 20 per unit */

let units = 250;
let bill = 0;

if (units <= 100) {
  bill = units * 10;
} else if (units <= 200) {
  bill = units * 15;
} else {
  bill = units * 20;
}

console.log("Total Bill:", bill);

/*
Task 4: Print Even Numbers 1–50 */
let num = [];
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    num.push(i);
  }
}
console.log(num);

/* ask 5: Reverse Counting 
Print numbers from 20 to 1. */

let nums = [];
for (let i = 20; i >= 1; i--) {
  nums.push(i);
}

console.log(nums);

// Task 6: Factorial Calculator
// Find factorial of a number.
// Example:
// 5! = 5 × 4 × 3 × 2 × 1
let value = 5;
let fac = 1;
for (let i = 1; i <= value; i++) {
  fac *= i;
}
console.log(fac);

/*Take a number like: 
12345 
Count how many digits it has. */

let newval = 12345;
let digitCount = newval.toString().length;

console.log("Total digits:", digitCount);

// Task 8: Sum of Even Numbers (1–100)
let total = [];
let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    num.push(i);
    count = count + i;
  }
}
console.log(count);

// Task 9: Prime Number Checker
// Check if a number is prime.
