// 1. Find the sum of all numbers in the array (use reduce method) [2 marks]

let numbers = [1, 2, 3, 4, 5];

let Result = numbers.reduce((acc, num) => {
  return acc + num;
}, 0);
console.log(Result);

// 2. Add a new number to the end of the array [1 mark]

numbers.push(6);
console.log(numbers);

// Remove the first number from the array [1 mark]
numbers.shift();
console.log(numbers);

//  Reverse the array [1 mark]

let newnumbers = [1, 2, 3, 4, 5, 6];
let reversed = [];
for (let i = newnumbers.length; i > 0; i--) {
  reversed.push(i);
}
console.log(reversed);

//  Check if a specific number exists in the array [1 mark]
console.log(numbers.includes(6));
console.log(numbers.includes(7));

// Create a new array with each number multiplied by 2 using map() [1 mark]
console.log(newnumbers);
let multilesoftwo = newnumbers.map((num) => {
  return num * 2;
});
console.log(multilesoftwo);

// Use filter() to find all numbers greater than 3 [1 mark]
let filtered = multilesoftwo.filter((num) => {
  return num > 3;
});
console.log(filtered);

// Use find() to get the first number that is divisible by 2 [2 marks]
firstdivisible = filtered.find((num) => {
  return num % 2 === 0;
});
console.log(firstdivisible);
