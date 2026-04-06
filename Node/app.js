const express = require("express");
const app = express();
const port = 3000;
let user = [
  {
    id: 1,
    name: "Fahad",
  },
];
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Execute successfully");
});
app.get("/users", (req, res) => {
  res.send("User File Execute successfully");
});
app.get("/posts", (req, res) => {
  res.send("posts File Execute successfully");
});
app.post("/users", (req, res) => {
  const newuser = {
    id: user.length + 1,
    name: req.body.name,
  };
  user.push(newuser);
  res.send(newuser);
});
app.delete("/users/:id", (res, req) => {
  user = user.filter((u) => u.id != req.params.id);
  res.send("user deleted");
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
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
