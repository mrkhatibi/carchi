"use client";

import AddNewBlog from "@/utils/AddNewBlog";
import toast, { Toaster } from "react-hot-toast";
import styles from "./addPost.module.css";
import Loader from "@/components/modules/Loader";
import { redirect } from "next/navigation";
import GetUserDataQuery from "@/helpers/getUserDataQuery";
function AddPost() {
  const { data: userData, isLoading: userLoading } = GetUserDataQuery();

  if (userLoading) return <Loader />;

  if (userData.role !== "ADMIN") {
    redirect("/");
  }
  const onsubmit = async (formData) => {
    const title = await formData.get("title");
    const slug = await formData.get("slug");
    const file = await formData.get("file");
    const content = await formData.get("content");

    if (!title || !slug || !content || !file) {
      return toast.error("لطفا تمام مقادیر را پر نمایید");
    }
    const response = await AddNewBlog(title, slug, content, file);
    if (response) {
      return toast.success("پست با موفقیت ثبت گردید");
    } else {
      return toast.error("مشکلی پیش آمده است ");
    }
  };
  return (
    <div className={styles.container}>
      <Toaster />
      <form className={styles.form} action={onsubmit}>
        <h3 className={styles.title}>عنوان</h3>
        <input
          className={styles.inputs}
          type="text"
          placeholder="عنوان"
          name="title"
        />
        <h3 className={styles.title}>اسلاگ</h3>
        <input
          className={styles.inputs}
          type="text"
          placeholder="اسلاگ"
          name="slug"
        />
        <h3 className={styles.title}>محتوا</h3>
        <textarea type="text" placeholder="محتوا" name="content" />

        <h3 className={styles.title}>تصویر</h3>

        <input
          className={styles.file}
          type="file"
          placeholder="اسلاگ"
          name="file"
          accept="image/*"
        />
        <button className={styles.submitbutton} type="submit">
          تایید
        </button>
      </form>
    </div>
  );
}

export default AddPost;
