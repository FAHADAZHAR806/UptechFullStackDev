let users = [
  {
    name: "Muhammad Ali",
    email: "ali23@gmail.com",
    phone: "+92341525432",
  },
  {
    name: "Abdul Wahab",
    email: "Wahad34@gmail.com",
    phone: "+923105260754",
  },
  {
    name: "Saim Raza",
    email: "saim@23gmail.com",
    phone: "+9232067844",
  },
];

// Insert data into table
users.forEach((user, rowIndex) => {
  document.getElementById(`cell-${rowIndex}-0`).innerText = user.name;
  document.getElementById(`cell-${rowIndex}-1`).innerText = user.email;
  document.getElementById(`cell-${rowIndex}-2`).innerText = user.phone;
});

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newnum = num
  .map((val) => {
    return val * 2;
  })
  .filter((val) => {
    return val > 10;
  })
  .reduce((acc, val) => {
    return acc + val;
  }, 34);
console.log(newnum);
console.log("hi");
