// Switch Statement
// Write a function that takes a day number (1-7) as input and returns the name of the day. Use
// a switch statement to return the correct day name based on the input.

function getDayName(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Monday";

    case 2:
      return "Tuesdat";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursdy";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid day number";
  }
}

console.log(getDayName(4));
console.log(getDayName(9));

//  Write a function that prints numbers from 1 to 10 using a while loop.
// Expected Output: 1, 2, 3, ..., 10

function PrintNumbers() {
  let i = 1;
  while (i <= 10) {
    console.log(i);
    i++;
  }
}
PrintNumbers();

// . Write a function that prints numbers from 10 to 1 using a do while loop.
// Expected Output: 10, 9, 8, ..., 1

function PrintNums() {
  let i = 10;
  do {
    console.log(i);
    i--;
  } while (i > 0);
}
PrintNums();
