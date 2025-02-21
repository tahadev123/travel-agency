import Link from "next/link";
import styles from "@/styles/Footer.module.css";

function FooterLi() {
  return (
    <div className={styles.lis}>
      <ul>
        <h3>تورینو</h3>
        <li>
          <Link href="/">درباره ما</Link>
        </li>
        <li>
          <Link href="/">تماس با ما</Link>
        </li>
        <li>
          <Link href="/">چرا تورینو</Link>
        </li>
        <li>
          <Link href="/">بیمه مسافرتی</Link>
        </li>
      </ul>
      <ul style={{ paddingRight: "100px" }}>
        <h3>خدمات مشتریان</h3>
        <li>
          <Link href="/">پشتیبانی آنلاین</Link>
        </li>
        <li>
          <Link href="/">راهنمایی خرید</Link>
        </li>
        <li>
          <Link href="/">راهنمای استرداد</Link>
        </li>
        <li>
          <Link href="/">پرسش و پاسخ</Link>
        </li>
      </ul>
    </div>
  );
}

export default FooterLi;
