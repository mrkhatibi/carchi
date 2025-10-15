"use client";

import Loader from "@/components/modules/Loader";
import GetAllPostsQuery from "@/helpers/getAllPostsQuery";
import Image from "next/image";
import { useParams } from "next/navigation";
import styles from "./blogDetail.module.css";
import { formatISODateTime } from "@/helpers/DateFormated";
import addNewComment from "@/utils/AddnewComment";
import toast, { Toaster } from "react-hot-toast";

function BlogsDetails() {
  const { blugs } = useParams();
  const id = blugs.split("-")[0];
  const { data, isLoading, refetch } = GetAllPostsQuery();

  const commentHandler = async (formData) => {
    const name = await formData.get("name");
    const comment = await formData.get("comment");
    if (!name || !comment) {
      return toast.error("مقادیر را پر کنید");
    }
    const response = await addNewComment(id, name, comment);
    if (response) {
      refetch();
      toast.success("نظر شما با موفقیت ثبت شد");
    }
  };
  if (!id) return <Loader />;
  if (isLoading) return <Loader />;
  const postData = data.find((item) => item._id === id);
  return (
   <div className={styles.container}>
  <div className={styles.card}>
    <Toaster />
    <Image
      className={styles.image}
      src={postData.image}
      alt="image"
      width={300}
      height={110}
    />
    <h3 className={styles.title}>{postData.title}</h3>
    <p className={styles.content}>{postData.content}</p>
    <hr className={styles.divider} />
    <p className={styles.postTime}>زمان پست : {formatISODateTime(postData.createdAt)}</p>
  </div>

  <div className={styles.commentSection}>
    <div className={styles.commentFormWrapper}>
      <form className={styles.commentForm} action={commentHandler}>
        <input className={styles.commentInput} type="text" placeholder="نام" name="name" />
        <textarea
          className={styles.commentTextarea}
          placeholder="نظر خود را بنویسید"
          name="comment"
        />
        <button className={styles.commentButton} type="submit">ارسال</button>
      </form>
    </div>

    {postData.comments.length === 0 ? (
      <h3 className={styles.noComments}>اولین نفری باشید که نظر خود را ثبت می‌کند.</h3>
    ) : (
      <div className={styles.commentsList}>
        <h3 className={styles.commentsTitle}>نظرات :</h3>
        {postData?.comments.map((comment, index) => (
          <div key={index} className={styles.commentItem}>
            <h4 className={styles.commentName}>نام : {comment.name}</h4>
            <p className={styles.commentText}>نظر : {comment.comment}</p>
          </div>
        ))}
      </div>
    )}
  </div>
</div>

  );
}

export default BlogsDetails;
