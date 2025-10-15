"use server";

import CarchiRequests from "@/models/carchiRequests";
import connectDB from "./connectDB";

export default async function SendRequest(userId, car, time, hour, problem) {
  try {
    await connectDB();
  } catch (error) {
    throw error
  }
  const newRequest = await CarchiRequests.create({
    userId,
    car,
    time,
    hour,
    problem,
  });
  return JSON.parse(JSON.stringify(newRequest));
}
