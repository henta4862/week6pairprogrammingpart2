const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
  
const Schema = mongoose.Schema;
  
const blogsSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  publishedDate: { type: Date, required: true },
  published: { type: Boolean, default: false },
    
});
blogsSchema.makeblog = async function (title, content, publishedDate, published) {
  if (!title || !content || !publishedDate) {
    throw Error("All fields must be filled");
  }

  const exists = await this.findOne({ title });

  if (exists) {
    throw Error("Title already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const blog = await this.create({ title, content, publishedDate, published });

  return blog;
}
blogsSchema.getblogs = async function(title) {
  if (!title) {
    throw Error("All fields must be filled");
  }
  const exists = await this.findOne({ title });
  if (exists) {
    return this.findOne({ title });
  }
  return null;

}
module.exports = mongoose.model("Blog", blogsSchema);