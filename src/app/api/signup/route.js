import CarchiUser from "@/models/carchiUser";
import { hashPassword } from "@/utils/bcrypt";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
  } catch (error) {
    return NextResponse.json({ status: 500, message: "اتصال برقرار نشد" });
  }
  const body = await req.json();
  const { email, password } = body;
  if (!email || !password) {
    return NextResponse.json({
      status: 402,
      message: "تمام مقادیر را پر کنید",
    });
  }
  const exitingUser = await CarchiUser.findOne({ email });
  if (exitingUser) {
    return NextResponse.json({
      status: 402,
      message: "حساب کاربری با این ایمیل از قبل وجود دارد",
    });
  }
  if (password.length < 6) {
    return NextResponse.json({
      status: 402,
      message: "رمز باید از 6 رقم بیشتر باشد",
    });
  }
  const hashedPassword = await hashPassword(password);
  const newUSer = await CarchiUser.create({ email, password: hashedPassword });
  return NextResponse.json({
    status: 200,
    message: "ثبت نام با موفقیت انجام شد",
    data: newUSer.email,
  });
}
