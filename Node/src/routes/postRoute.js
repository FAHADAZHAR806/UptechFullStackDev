const express = require("express");
const router = express.Router();
const {
  getPosts,
  getrandom,
  getdata,
} = require("../controllers/postController");
// const { getrandom } = require("../controllers/postController");

router.get("/", getPosts);
router.get("/getrandom", getrandom);
router.get("/data", getdata);

module.exports = router;
