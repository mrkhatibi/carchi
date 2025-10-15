"use server";

import CarchiRequests from "@/models/carchiRequests";
import connectDB from "@/utils/connectDB";

export default async function getAllRequests() {
  try {
    await connectDB();
  } catch (error) {
    throw error;
  }
  const allRequests = await CarchiRequests.find({});
  return JSON.parse(JSON.stringify(allRequests));
}
