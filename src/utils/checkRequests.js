"use server";

import CarchiRequests from "@/models/carchiRequests";
import connectDB from "./connectDB";

export default async function CheckRequests(itemId, status, message) {
  try {
    await connectDB();
  } catch (error) {
    throw error;
  }
  const checked = await CarchiRequests.findByIdAndUpdate(
    itemId,
    {
      isOk: status,
      adminMessage: message,
    },
    { new: true }
  );
  return JSON.parse(JSON.stringify(checked));
}
