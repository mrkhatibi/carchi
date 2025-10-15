"use client";

import toast, { Toaster } from "react-hot-toast";
import styles from "../signup/signup.module.css";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import GetUserDataQuery from "@/helpers/getUserDataQuery";
import Loader from "@/components/modules/Loader";

function SignInPage() {
  
  const queryClient = useQueryClient();
   const { data: userData, isLoading: userLoading } = GetUserDataQuery();
  
    if (userLoading) return <Loader />;
  
    if (userData) {
      redirect("/");
    }
  const onsubmit = async (formData) => {
    const email = await formData.get("email");
    const password = await formData.get("password");
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res.status === 200) {
      setTimeout(() => {
        redirect("/");
      }, 1500);
      toast.success("وارد شدید");
      queryClient.invalidateQueries(["GetUserDataQuery"]);
    } else {
      toast.error(res.error);
    }
  };
  return (
    <div className={styles.signincontainer}>
      <Toaster />
      <h3 className={styles.signintitle}>ورود</h3>
      <form action={onsubmit} className={styles.signinform}>
        <input
          type="email"
          name="email"
          placeholder="ایمیل"
          className={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="رمز"
          className={styles.input}
        />
        <button type="submit" className={styles.signinbutton}>
          ورود
        </button>
        <h3 style={{ cursor: "pointer" }} onClick={() => redirect("/signup")}>
          حساب کاربری ندارید ؟ کلیک کنید
        </h3>
      </form>
    </div>
  );
}

export default SignInPage;
