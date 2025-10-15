"use server"

import carchiBlogs from "@/models/carchiBlogs"
import connectDB from "@/utils/connectDB"

export default async function getAllPosts() {
    await connectDB()
    const allPosts = await carchiBlogs.find({})
    return JSON.parse(JSON.stringify(allPosts))
}