"use server";
import Image from "next/image";
import styles from "@/styles/ServerError.module.css";
import errorImg from "@/assets/images/Error Lamp Robot.png";

function page() {
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <h1>اتصال با سرور برقرار نیست!</h1>
        <h3>لطفا بعدا دوباره امتحان کنید.</h3>
      </div>
      <div className={styles.left}>
        <Image src={errorImg} width={555} height={555} alt="error image" />
      </div>
    </div>
  );
}

export default page;
