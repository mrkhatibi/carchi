"use client";

import GetUserDataQuery from "@/helpers/getUserDataQuery";
import styles from "./layout.module.css";
import Loader from "@/components/modules/Loader";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
function Header() {
  const { data, isLoading } = GetUserDataQuery();

  if (isLoading) return <Loader />;
  console.log(data)
  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
        <Link href={"/"}>
          <h3>خانه</h3>
        </Link>
        {data && data.role !=="ADMIN" &&(
          <Link href={"/"}>
            <h3>دریافت نوبت</h3>
          </Link>
        )}

        <Link href={"/blogs"}>
          <h3>وبلاگ</h3>
        </Link>
      </div>
      {data ? (
        <button onClick={() => redirect("/dashboard")}>داشبورد</button>
      ) : (
        <button onClick={() => redirect("/signup")}>ورود | ثبت نام</button>
      )}
    </div>
  );
}

export default Header;
