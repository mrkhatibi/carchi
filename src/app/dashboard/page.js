"use client";

import Loader from "@/components/modules/Loader";
import GetAllRequestsQuery from "@/helpers/getAllRequestsQuery";
import GetAllUsersQuery from "@/helpers/getAllUsersQuery";
import GetUserDataQuery from "@/helpers/getUserDataQuery";
import styles from "./page.module.css";
import { redirect } from "next/navigation";
function Dashboard() {
  const { data, isLoading } = GetUserDataQuery();
  const { data: allUsersData, isLoading: allUsersLoading } = GetAllUsersQuery();
  const { data: allRequests, isLoading: allRequestsLoading } =
    GetAllRequestsQuery();

  if (isLoading) return <Loader />;
  if (!data) {
      redirect("/");
    }
  if (allUsersLoading) return <Loader />;
  if (allRequestsLoading) return <Loader />;
  const UnreviewedRequests = allRequests.filter(
    (item) => item.isOk === "Unreviewed"
  );

  return (
    <div>
      {data.role === "ADMIN" ? (
        <div className={styles.admin}>
          <h3>خوش آمدید</h3>
          {UnreviewedRequests.length === 0 ? (
            <h4>شما درخواست بررسی نشده ای ندارید</h4>
          ) : (
            <h4>{UnreviewedRequests.length} درخواست بررسی نشده دارید</h4>
          )}
          <h4>
            تا این لحظه {allUsersData.length}کاربر در سایت ثبت نام کرده اند .{" "}
          </h4>
        </div>
      ) : (
        <div className={styles.user}>
          <h3>خوش آمدید</h3>
          <p>
            برای ثبت درخواست میتوانید از دکمه «ثبت درخواست نوبت» استفاده نمایید
          </p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
