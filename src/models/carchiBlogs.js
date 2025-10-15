import {Schema, model, models } from "mongoose";

const carchiBlogsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  slug: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  comments: {
    type: [{}],
  },
  likes: {
    type: { Number },
  },
} , {timestamps : true});

const carchiBlogs = models.carchiBlogs || model("carchiBlogs", carchiBlogsSchema);
export default carchiBlogs;
