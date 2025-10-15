import CarchiUser from "@/models/carchiUser";
import { isValid } from "@/utils/bcrypt";
import connectDB from "@/utils/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await connectDB();
        } catch (error) {
          throw new Error("اتصال برقرار نشد");
        }
        const exist = await CarchiUser.findOne({ email });
        if (!exist) {
          throw new Error("ایمیل وجود ندارد");
        }
        const isvalid = await isValid(password, exist.password);
        if (!isvalid) {
          throw new Error("رمز اشتباه است");
        }
        return { email: exist.email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
