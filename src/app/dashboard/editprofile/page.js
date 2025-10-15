"use client";

import Loader from "@/components/modules/Loader";
import GetUserDataQuery from "@/helpers/getUserDataQuery";
import editProfile from "@/utils/EditProfile";
import { useState } from "react";
import styles from "./Account.module.css";
import { redirect } from "next/navigation";

function EditProfile() {
  const [edit, setEdit] = useState(false);
  const { data, isLoading, refetch } = GetUserDataQuery();
  if (isLoading) return <Loader />;
if (!data) {
    redirect("/");
  }
  const submitHandler = async (formData) => {
    const userId = data._id;
    const phoneNumber = await formData.get("phoneNumber");
    await editProfile(userId, phoneNumber);
    refetch();
    setEdit(false);
  };
  return (
    <div className={styles.container}>
      {!edit ? (
        <div className={styles.profileBox}>
          <h2 className={styles.title}>حساب کاربری</h2>
          <h3 className={styles.info}>ایمیل : {data.email}</h3>
          <h3 className={styles.info}>
            شماره تماس : {data.phoneNumber ? data.phoneNumber : "وارد نشده"}
          </h3>
          <button className={styles.editButton} onClick={() => setEdit(!edit)}>
            ویرایش
          </button>
        </div>
      ) : (
        <div className={styles.editBox}>
          <form action={submitHandler} className={styles.form}>
            <h3 className={styles.info}>
              شماره تلفن :
              <input
                type="number"
                placeholder="شماره تلفن"
                name="phoneNumber"
                className={styles.input}
              />
            </h3>

            <div className={styles.btnGroup}>
              <button
                type="button"
                onClick={() => setEdit(!edit)}
                className={styles.cancelButton}
              >
                لغو ویرایش
              </button>
              <button type="submit" className={styles.saveButton}>
                ذخیره
              </button>
            </div>
          </form>
        </div>
      )}

      <div className={styles.carsSection}>
        <h3 className={styles.sectionTitle}>خودرو های من</h3>
        {data.cars.map((car, index) => (
          <div key={index} className={styles.carCard}>
            <h3 className={styles.carInfo}>
              برند : {car.carBrand ? car.carBrand : "انتخاب نشده"}
            </h3>
            <h3 className={styles.carInfo}>
              خودرو : {car.carModel ? car.carModel : car.cantFindCar}
            </h3>
            <h3 className={styles.carInfo}>مدل : {car.carYear}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EditProfile;
