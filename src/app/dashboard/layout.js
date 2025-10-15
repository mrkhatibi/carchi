"use client";
import Loader from "@/components/modules/Loader";
import GetUserDataQuery from "@/helpers/getUserDataQuery";
import { GrUserAdmin } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import styles from "./dashboard.module.css";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { Toaster } from "react-hot-toast";

function Layout({ children }) {
  const { data, isLoading } = GetUserDataQuery();

  const signoutHandler = () => {
    signOut();
    redirect("/");
  };
  if (isLoading) return <Loader />;
  if (!data) {
    redirect("/");
  }
  return (
    <div className={styles.container}>
      <Toaster />
      <div className={styles.rside}>
        <div className={styles.account}>
          {data.role === "ADMIN" ? (
            <Link href={"/dashboard"}>
            <GrUserAdmin size={40} />
            </Link>
          ) : (
            <Link href={"/dashboard"}>
            <FaRegUser size={40} />
            </Link>
          )}
          <h3>{data.email}</h3>
        </div>
        {data.role === "ADMIN" ? (
          <div className={styles.dashboard}>
            <Link href={"/dashboard/admin/blog"}>
              <h3>  وبلاگ  </h3>
            </Link>
            <Link href={"/dashboard/admin/checkrequests"}>
              <h3>درخواست های در انتظار بررسی</h3>
            </Link>
            <Link href={"/dashboard/admin/approvedrequests"}>
              <h3>درخواست های تایید شده</h3>
            </Link>
            <Link href={"/dashboard/admin/rejectedrequests"}>
            <h3>درخواست های رد شده</h3>
            </Link>
            <Link href={"/dashboard/admin/completedrequests"}>
            <h3>درخواست های انجام شده </h3>
            </Link>

            <h3 onClick={() => signoutHandler()}>خروج از حساب </h3>
          </div>
        ) : (
          <div className={styles.dashboard}>
            <Link href={"/dashboard/editprofile"}>
              <h3>ویرایش اطلاعات</h3>
            </Link>
            <Link href={"/dashboard/addcar"}>
              <h3>افزودن خودرو</h3>
            </Link>
            <Link href={"/dashboard/newrequest"}>
              <h3>ثبت درخواست نوبت</h3>
            </Link>
            <Link href={"/dashboard/myrequests"}>
              <h3>درخواست های ارسال شده</h3>
            </Link>
            <h3 onClick={() => signoutHandler()}>خروج از حساب </h3>
          </div>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
