"use client"

import Loader from "@/components/modules/Loader"
import AllPostsPage from "@/components/templates/AllPostsPage"
import GetUserDataQuery from "@/helpers/getUserDataQuery";
import { redirect } from "next/navigation";

function posts() {
   const { data: userData, isLoading: userLoading } = GetUserDataQuery();

  if (userLoading) return <Loader />;

  if (userData.role !== "ADMIN") {
    redirect("/");
  }
  return (
    <div>
      <AllPostsPage data={data} />
    </div>
  )
}

export default posts