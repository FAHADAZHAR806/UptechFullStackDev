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

// Write a function that returns all users who have "developer" in their tags
function getDevelopers(a) {
  return a.filter((user) => user.tags.includes("developer"));
}

let Developers = getDevelopers(users);
console.log(Developers);

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

// Write a function that returns all orders with the user's name who placed the order
const userss = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Ahmed" },
];

const orders = [
  { id: 101, product: "Laptop", userId: 1 },
  { id: 102, product: "Phone", userId: 2 },
  { id: 103, product: "Book", userId: 1 },
];
function getOrdersWithUserNames() {
  return orders.map((order) => {
    const user = userss.find((u) => u.id === order.userId);

    return {
      ...order,
      userName: user ? user.name : "Unknown",
    };
  });
}

console.log(getOrdersWithUserNames());
