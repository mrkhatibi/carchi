"use server";

import CarchiUser from "@/models/carchiUser";
import connectDB from "@/utils/connectDB";

export default async function getAllUsers() {
  try {
    await connectDB();
  } catch (error) {
    throw error;
  }
  const allUsers = await CarchiUser.find({});
  return JSON.parse(JSON.stringify(allUsers));
}
