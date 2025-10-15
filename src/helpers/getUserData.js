"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CarchiUser from "@/models/carchiUser";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";

export default async function getUserData() {
  await connectDB();
  const session = await getServerSession();
  if (!session) return null;
  const email = session.user.email;
  console.log(session);
  const user = await CarchiUser.findOne({ email });

  return JSON.parse(JSON.stringify(user));
}
