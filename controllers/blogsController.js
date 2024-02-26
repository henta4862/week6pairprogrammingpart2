const Blog = require("../models/blogsModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
  };
    
  const makeBlog = async (req, res) => {
    const { title, content, publishedDate, published } = req.body;
    try {
        const blog = await Blog.makeblog(title, content, publishedDate, published);
        const token = createToken(blog._id);
        res.status(200).json({ title, token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const getblogs = async (req, res) => {
    const { title } = req.body;
    try {
        const blog = await Blog.getblog
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = { makeBlog, getBlogs };