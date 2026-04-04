const data = {
  name: "fahad",
  age: 25,
  isStudent: true,
};
const getPosts = (req, res) => {
  res.send("Posts File Execute successfully");
};
const getrandom = (req, res) => {
  res.send("Random Posts File Execute successfully");
};
const getdata = (req, res) => {
  res.json(data);
};

module.exports = { getPosts, getrandom, getdata };
