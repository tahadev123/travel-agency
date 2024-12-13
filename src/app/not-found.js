import Image from "next/image";
import errorImg from "../assets/images/Error TV.png";
import Link from "next/link";
import styles from "../styles/not-found.module.css"

function NotFoundPage() {
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <h1>صفحه مورد نظر یافت نشد!</h1>
        <button>
          <Link href="/">بازگشت به صفحه اصلی</Link>
        </button>
      </div>
      <div className={styles.left}>
        <Image src={errorImg} width={555} height={555} alt="error image" />
      </div>
    </div>
  );
}

export default NotFoundPage;
