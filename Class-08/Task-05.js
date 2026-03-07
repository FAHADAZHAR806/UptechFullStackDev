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

// Write a function that checks if all users are active
function areAllUsersActive() {
  return users.every((user) => {
    return user.isActive;
  });
}

console.log(areAllUsersActive());

// Write a function that calculates the average age of all users
function getAverageAge() {
  let totalage = users.reduce((acc, user) => {
    return acc + user.age;
  }, 0);
  return totalage / users.length;
}
console.log(getAverageAge());

// Write a function that returns users who are active and older than a specified age

function getActiveUsersOlderThan() {
  return users.filter((user) => {
    return user.isActive && user.age > 30;
  });
}
console.log(getActiveUsersOlderThan());

// Write a function that returns all products sorted by price (low to high)

const products = [
  {
    id: 101,
    name: "Laptop",
    price: 999.99,
    category: "electronics",
    stock: 15,
  },
  {
    id: 102,
    name: "Smartphone",
    price: 699.99,
    category: "electronics",
    stock: 25,
  },
  { id: 103, name: "Book", price: 19.99, category: "books", stock: 50 },
  {
    id: 104,
    name: "Headphones",
    price: 149.99,
    category: "electronics",
    stock: 10,
  },
  { id: 105, name: "T-shirt", price: 29.99, category: "clothing", stock: 100 },
  { id: 106, name: "Shoes", price: 79.99, category: "clothing", stock: 30 },
];

function sortProductsByPrice() {
  return [...products].sort((a, b) => {
    return a.price - b.price;
  });
}

console.log(sortProductsByPrice());

// Write a function that transforms the users array into an object where the keys are the user IDs

function transformUsersToObject(users) {
  return users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});
}

const result = transformUsersToObject(users);
console.log(result);

// Write a function that counts how many products are in each category
function countProductsByCategory(products) {
  return products.reduce((acc, product) => {
    if (acc[product.category]) {
      acc[product.category] += 1;
    } else {
      acc[product.category] = 1;
    }
    return acc;
  }, {});
}

const totalCount = countProductsByCategory(products);
console.log(totalCount);

// Write a function that returns the emails of active users sorted by age (youngest first)

function getActiveUserEmailsSortedByAge(a) {
  return a
    .filter((user) => user.isActive)
    .sort((a, b) => a.age - b.age)
    .map((user) => user.email);
}

const activeUser = getActiveUserEmailsSortedByAge(users);
console.log(activeUser);
