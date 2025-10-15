"use client";
import CalendarComponent from "@/components/modules/CalendarComponent";
import Loader from "@/components/modules/Loader";
import GetUserDataQuery from "@/helpers/getUserDataQuery";
import SendRequest from "@/utils/sendRequest";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CiSquarePlus } from "react-icons/ci";
import styles from "./newReqest.module.css"
function NewRequest() {
  const { data, isLoading } = GetUserDataQuery();
  const [time, setTime] = useState("");

  if (isLoading) return <Loader />;
  if (!data) {
      redirect("/");
    }
  const onsubmit = async (formData) => {
    const userId = data._id;
    const car = await formData.get("car");
    const hour = await formData.get("hour");
    const problem = await formData.get("problem");
    if (!userId || !car || !time || !hour || !problem) {
      return toast.error("تمامی مقادیر را پر نمایید");
    }
    const res = await SendRequest(userId, car, time, hour, problem);
    if (res) {
      toast.success("درخواست با موفقیت ثبت گردید");
    }
  };
  return (
     <div className={styles.container}>
      <div className={styles.toaster}>
        <Toaster />
      </div>

      <form className={styles.form} action={onsubmit}>
        <h3 className={styles.heading}>انتخاب خودرو</h3>

        <div className={styles.group}>
          {data.cars.length > 0 ? (
            <div className={styles.carList}>
              <div className={styles.selectRow}>
                <select name="car" className={styles.select}>
                  {data.cars.map((car, index) => (
                    <option
                      key={index}
                      value={`${car.carModel ? car.carModel: car.cantFindCar}/${car.carYear}`}
                      className={styles.option}
                    >
                      خودروی {car.carModel ? car.carModel: car.cantFindCar} مدل {car.carYear}
                    </option>
                  ))}
                </select>

                <button
                  type="button"
                  className={styles.iconButton}
                  onClick={() => redirect("/dashboard/addcar")}
                  aria-label="افزودن خودرو"
                >
                  <CiSquarePlus size={24} />
                </button>
              </div>
            </div>
          ) : (
            <div className={styles.emptyAdd}>
              <button
                type="button"
                className={styles.iconButtonLarge}
                onClick={() => redirect("/dashboard/addcar")}
                aria-label="افزودن خودرو"
              >
                <CiSquarePlus size={35} />
              </button>
            </div>
          )}
        </div>

        <h3 className={styles.heading}>تاریخ و زمان</h3>

        <div className={styles.group}>
          <div className={styles.calendarWrapper}>
            <CalendarComponent setTime={setTime} />
          </div>

          <div className={styles.timeOptions} role="radiogroup" aria-label="ساعات">
            <label className={styles.timeLabel} htmlFor="hour1">
              <input className={styles.radio} type="radio" name="hour" id="hour1" value="9-12" />
              <span className={styles.timeText}>۹ - ۱۲</span>
            </label>

            <label className={styles.timeLabel} htmlFor="hour2">
              <input className={styles.radio} type="radio" name="hour" id="hour2" value="12-15" />
              <span className={styles.timeText}>۱۲ - ۱۵</span>
            </label>

            <label className={styles.timeLabel} htmlFor="hour3">
              <input className={styles.radio} type="radio" name="hour" id="hour3" value="15-18" />
              <span className={styles.timeText}>۱۵ - ۱۸</span>
            </label>

            <label className={styles.timeLabel} htmlFor="hour4">
              <input className={styles.radio} type="radio" name="hour" id="hour4" value="18-21" />
              <span className={styles.timeText}>۱۸ - ۲۱</span>
            </label>
          </div>
        </div>

        <h3 className={styles.heading}>ایراد خودرو</h3>

        <textarea
          className={styles.textarea}
          placeholder="ایراد خودروی خود را شرح دهید"
          name="problem"
          rows={5}
        />

        <button type="submit" className={styles.submitBtn}>ارسال</button>
      </form>
    </div>
  );
}

export default NewRequest;
