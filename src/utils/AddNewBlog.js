"use server";
import { v2 as cloudinary } from "cloudinary";
import connectDB from "./connectDB";
import carchiBlogs from "@/models/carchiBlogs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function AddNewBlog(title, slug, content, file) {
  await connectDB();
  const buffer = Buffer.from(await file.arrayBuffer());
  const uploaded = await new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "carchi" },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    stream.end(buffer);
  });
  const newBlog = await carchiBlogs.create({
    title,
    slug,
    content,
    image: uploaded.secure_url,
  });
  return JSON.parse(JSON.stringify(newBlog));
}
