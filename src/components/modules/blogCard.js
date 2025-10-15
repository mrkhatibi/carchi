import { SliceContent } from "@/helpers/helpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./BlogCard.module.css";

function BlogCard(item) {
  return (
    <div className={styles.card}>
      <Image
        src={item.item.image}
        alt="pic"
        width={100}
        height={60}
        className={styles.image}
      />
      <h3 className={styles.title}>{item.item.title}</h3>
      <p className={styles.text}>{SliceContent(item.item.content)}</p>
      <Link href={`/blogs/${item.item._id}-${item.item.slug}`}>
        <button className={styles.button}>بیشتر</button>
      </Link>
    </div>
  );
}

export default BlogCard;
