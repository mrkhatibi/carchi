"use client";

import axios from "axios";
import { redirect } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import styles from "./signup.module.css"
import GetUserDataQuery from "@/helpers/getUserDataQuery";
import Loader from "@/components/modules/Loader";
function SignUp() {
   const { data: userData, isLoading: userLoading } = GetUserDataQuery();
    
      if (userLoading) return <Loader />;
    
      if (userData) {
        redirect("/");
      }
  const onsubmit = async (formData) => {
    const email = await formData.get("email");
    const password = await formData.get("password");
    const res = await axios.post("/api/signup", {
      email,
      password,
    });
    console.log(res);
    if (res.data.status === 200) {
      setTimeout(() => {
        redirect("/signin");
      }, 2000);
      toast.success(res.data.message);
    } else {
      return toast.error(res.data.message);
    }
  };
  return (
     <div className={styles.container}>
      <Toaster />
      <h3 className={styles.title}>ثبت نام</h3>
      <form action={onsubmit} className={styles.form}>
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
        <button type="submit" className={styles.button}>
          ثبت نام
        </button>
        <h3 style={{cursor:"pointer"}} onClick={()=>redirect("/signin")}>حساب کاربری دارید ؟ کلیک کنید</h3>
      </form>
    </div>
  );
}

export default SignUp;
