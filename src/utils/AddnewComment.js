"use server";

import carchiBlogs from "@/models/carchiBlogs";
import connectDB from "./connectDB";

export default async function addNewComment(id, name, comment) {
  await connectDB();
  const newComment = await carchiBlogs.findById(id)
  await newComment.comments.push({name, comment})
  await newComment.save()
  return JSON.parse(JSON.stringify(newComment));
}
