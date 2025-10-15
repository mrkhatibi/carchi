import styles from "./layout.module.css"
function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.footerbar}>
            <h3>خانه</h3>
            <h3>دریافت نوبت</h3>
            <h3>وبلاگ</h3>
        </div>
        <h3>Developed By MrKhatibi</h3>
    </div>
  )
}

export default Footer