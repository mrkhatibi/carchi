"use server"

import CarchiRequests from "@/models/carchiRequests";
import connectDB from "@/utils/connectDB";
import getUserData from "./getUserData";



export default async function getMyRequests() {
    const user =await getUserData()
    const userId = user._id
    try {
        await connectDB()
    } catch (error) {
        throw error
    }
    const MyRequests = await CarchiRequests.find({ userId})
    return JSON.parse(JSON.stringify(MyRequests))
}