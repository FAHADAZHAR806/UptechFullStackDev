//  Write a function that returns all active users

const users = [
  {
    id: 1,
    name: "John",
    age: 25,
    email: "john@example.com",
    isActive: true,
    tags: ["developer", "javascript"],
  },
  {
    id: 2,
    name: "Jane",
    age: 32,
    email: "jane@example.com",
    isActive: false,
    tags: ["designer", "css"],
  },
  {
    id: 3,
    name: "Bob",
    age: 41,
    email: "bob@example.com",
    isActive: true,
    tags: ["developer", "python"],
  },
  {
    id: 4,
    name: "Mary",
    age: 28,
    email: "mary@example.com",
    isActive: true,
    tags: ["manager", "leadership"],
  },
  {
    id: 5,
    name: "Alex",
    age: 19,
    email: "alex@example.com",
    isActive: false,
    tags: ["intern", "student"],
  },
];

function getActiveUsers() {
  let filtered = users.filter((user) => {
    return user.isActive;
  });
  return filtered;
}
console.log(getActiveUsers());

//  Write a function that returns an array containing just the names of all users
function getUserNames() {
  let nameofUsers = users.map((user) => {
    return user.name.toLocaleUpperCase();
  });
  return nameofUsers;
}

console.log(getUserNames());
// Write a function that finds and returns a user by their ID
function findUserById(id) {
  let findUser = users.find((user) => {
    return user.id === id;
  });
  return findUser;
}

console.log(findUserById(4));

function areAllUsersActive() {
  return users.every((user) => {
    return user.isActive;
  });
}

console.log(areAllUsersActive());
