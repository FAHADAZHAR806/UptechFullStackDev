const express = require("express");
const app = express();
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const { error } = require("console");
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/api/users", (req, res) => {
  res.json(users);
});
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => {
    return user.id === id;
  });
  res.json(user);
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.post("/api/users", (req, res) => {
  const body = req.body;
  console.log("Body", body);
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "success", id: users.length + 1 });
  });
});

app.put("/api/users/:id", (req, res) => {
  res.json({ status: "pending" });
});
app.delete("/api/users/:id", (req, res) => {
  res.json({ status: "pending" });
});

//////////////////////////////////////////////////////////////
// require("dotenv").config();
// const express = require("express");
// const app = express();
// // const port = 3000;

// // Routes import
// const userRoutes = require("./src/routes/userRoute");
// const postRoutes = require("./src/routes/postRoute");

// // Base route
// app.get("/", (req, res) => {
//   res.send("Execute successfully");
// });

// // Use routes
// app.use("/users", userRoutes);
// app.use("/posts", postRoutes);

// app.listen(process.env.PORT, () => {
//   console.log(`Server running at http://localhost:${process.env.PORT}`);
// });
