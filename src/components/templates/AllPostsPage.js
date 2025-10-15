import BlogCard from "../modules/blogCard";
import styles from "./AllPostsPage.module.css"
function AllPostsPage({ data }) {
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <BlogCard item={item} key={item._id} />
      ))}
    </div>
  );
}

export default AllPostsPage;
