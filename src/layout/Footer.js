import Link from "next/link";
import styles from "./layout.module.css";
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerbar}>
        <Link href={"/"}>
          <h3>خانه</h3>
        </Link>

        <Link href={"/blogs"}>
          <h3>وبلاگ</h3>
        </Link>
      </div>
      <h3>Developed By MrKhatibi</h3>
    </div>
  );
}

export default Footer;
