"use client"
import Link from "next/link"
import styles from "./blog.module.css"
import Loader from "@/components/modules/Loader";
import { redirect } from "next/navigation";
import GetUserDataQuery from "@/helpers/getUserDataQuery";
function Blog() {
   const { data: userData, isLoading: userLoading } = GetUserDataQuery();

  if (userLoading) return <Loader />;

  if (userData.role !== "ADMIN") {
    redirect("/");
  }
  return (
    <div className={styles.container}>
        <Link href={"/dashboard/admin/blog/addpost"}>
        <h3>افزودن پست</h3>
        </Link>
        <Link href={"/dashboard/admin/blog/postmanegment"}>
        <h3>مدیریت پست ها</h3>
        </Link>
    </div>
  )
}

export default Blog