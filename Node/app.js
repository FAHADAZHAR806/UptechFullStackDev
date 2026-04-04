// const express = require("express");
// const app = express();
// const port = 3000;
// app.get("/", (req, res) => {
//   res.send("Execute successfully");
// });
// app.get("/users", (req, res) => {
//   res.send("User File Execute successfully");
// });
// app.get("/posts", (req, res) => {
//   res.send("posts File Execute successfully");
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
require("dotenv").config();
const express = require("express");
const app = express();
// const port = 3000;

// Routes import
const userRoutes = require("./src/routes/userRoute");
const postRoutes = require("./src/routes/postRoute");

// Base route
app.get("/", (req, res) => {
  res.send("Execute successfully");
});

// Use routes
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
