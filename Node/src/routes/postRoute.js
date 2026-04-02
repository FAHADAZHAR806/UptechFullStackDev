const express = require("express");
const router = express.Router();
const { getPosts, getrandom } = require("../controllers/postController");
// const { getrandom } = require("../controllers/postController");

router.get("/", getPosts);
router.get("/getrandom", getrandom);

module.exports = router;
