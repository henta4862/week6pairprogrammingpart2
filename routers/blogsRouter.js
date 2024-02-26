const express = require("express");
const router = express.Router();
const { makeBlog, getBlogs } = require("../controllers/blogsController");
const requireAuth = require('../middleware/requireAuth')

router.post("/makeBlog", makeBlog);
  
router.post("/getBlogs", getBlogs);

router.use(requireAuth)
module.exports = router;