const getPosts = (req, res) => {
  res.send("Posts File Execute successfully");
};
const getrandom = (req, res) => {
  res.send("Random Posts File Execute successfully");
};

module.exports = { getPosts, getrandom };
