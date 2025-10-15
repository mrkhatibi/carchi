"use client";

import { toPersianDateTime } from "@/helpers/toPersianDate";
import styles from "./RequestItem.module.css";
import GetUserDataQuery from "@/helpers/getUserDataQuery";
import Loader from "./Loader";
import { useState } from "react";
import CheckRequests from "@/utils/checkRequests";
import toast, { Toaster } from "react-hot-toast";

function RequestCard({ item, refetch }) {
  const { data, isLoading } = GetUserDataQuery();
  const [editRequest, setEditRequest] = useState(false);
  if (isLoading) return <Loader />;

  const onsubmit = async (formData) => {
    const itemId = item._id;
    const message = await formData.get("message");
    const status = await formData.get("status");
    const res = await CheckRequests(itemId, status, message);
    if (res) {
      toast.success("ثبت شد");
      refetch();
    }
  };
  return (
    <div className={styles.container}>
      <h3 className={styles.carTitle}>
        خودروی {item.car.split("/")[0]} مدل {item.car.split("/")[1]}
      </h3>

      <h4 className={styles.time}>
        تاریخ درخواستی : {item.time} ساعت : {item.hour}
      </h4>

      <h4 className={styles.problem}>توضیحات/مشکل : {item.problem}</h4>

      <p className={styles.createdAt}>
        زمان ثبت درخواست : {toPersianDateTime(item.createdAt)}
      </p>

      <h4 className={styles.status}>
        وضعیت درخواست :
        {item.isOk === "Completed" && (
          <span className={styles.Completed}>انجام شده </span>
        )}
        {item.isOk === "Unreviewed" && (
          <span className={styles.unreviewed}>بررسی نشده</span>
        )}
        {item.isOk === "Approved" && (
          <span className={styles.approved}>تایید شده</span>
        )}
        {item.isOk === "rejected" && (
          <span className={styles.rejected}>رد شده</span>
        )}
      </h4>

      {item.adminMessage && (
        <h3 className={styles.adminMessage}>
          پیغام ادمین : {item.adminMessage}
        </h3>
      )}
      {data.role === "ADMIN" && (
        <h3
          className={styles.carTitle}
          onClick={() => setEditRequest(!editRequest)}
        >
          تغییر وضعیت درخواست
        </h3>
      )}

      {data.role === "ADMIN" && editRequest && (
        <form action={onsubmit} className={styles.form}>
          <select id="status" name="status" className={styles.select}>
            {item.isOk === "Approved" && (
              <option id="status" value="Completed">
                اتمام کار
              </option>
            )}
            <option id="status" value="Approved">
              تایید
            </option>
            <option id="status" value="rejected">
              رد
            </option>
            <option id="status" value="Unreviewed">
              بررسی نشده
            </option>
          </select>

          <textarea
            type="text"
            placeholder="پیغام برای کاربر"
            name="message"
            className={styles.textarea}
          />

          <button type="submit" className={styles.submitButton}>
            ذخیره
          </button>
        </form>
      )}
    </div>
  );
}

export default RequestCard;
