"use client";
import SelectCarBrand from "@/components/modules/SelectCarBrand";
import SelectCarModel from "@/components/modules/SelectCarModel";
import SelectCarYear from "@/components/modules/SelectCarYear";
import GetUserDataQuery from "@/helpers/getUserDataQuery";
import AddNewCar from "@/utils/AddNewCar";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./addCar.module.css";
import Loader from "@/components/modules/Loader";
import { redirect } from "next/navigation";
function AddCar() {
  const { data, isLoading } = GetUserDataQuery();
  const [carBrand, setCarBrand] = useState(null);
  const [carModel, setCarModel] = useState(null);
  const [carYear, setCarYear] = useState(null);
  const [cantFindMyCar, setCantFindMyCar] = useState(false);
  if (isLoading) return <Loader />;
  if (!data) {
    redirect("/");
  }
  const onsubmit = async (formData) => {
    const userId = data._id;
    const cantFindCar = await formData.get("cantFindCar");
    if (!carBrand && !carModel && !cantFindCar) {
      return toast.error("مدل خودروی خود را وارد نکرده اید");
    } else if (!carYear) {
      return toast.error("تمام اطلاعات مورد نیاز خودروی خود را وارد کنید ");
    }
    const res = await AddNewCar(
      userId,
      carBrand,
      carModel,
      cantFindCar,
      carYear
    );
    if (res) {
      toast.success("خودروی شما با موفقیت اضافه شد");
    }
    setCarBrand(null);
    setCarModel(null);
    setCarYear(null);
  };
  return (
    <div className={styles.container}>
      <Toaster />
      <form action={onsubmit}>
        <h3>برند خودرو</h3>
        <SelectCarBrand carBrand={carBrand} setCarBrand={setCarBrand} />
        <h3>مدل خودرو</h3>
        <SelectCarModel
          carModel={carModel}
          setCarModel={setCarModel}
          carBrand={carBrand}
        />
        <h4 onClick={() => setCantFindMyCar(!cantFindMyCar)}>
          خودروی خود را درون لیست پیدا نکرده اید ؟ کلیک کنید
        </h4>
        {cantFindMyCar && (
          <input type="text" placeholder="اسم خودرو" name="cantFindCar" />
        )}
        <h3>سال ساخت خودرو</h3>
        <SelectCarYear carYear={carYear} setCarYear={setCarYear} />

        <button type="submit">اضافه کردن</button>
      </form>
    </div>
  );
}

export default AddCar;
