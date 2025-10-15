"use server";

import CarchiUser from "@/models/carchiUser";
import connectDB from "./connectDB";

export default async function editProfile(userId, phoneNumber) {
  try {
    await connectDB();
  } catch (error) {
    throw error;
  }
  const editedUser = await CarchiUser.findByIdAndUpdate(userId , {phoneNumber});
  return JSON.parse(JSON.stringify(editedUser));
}
