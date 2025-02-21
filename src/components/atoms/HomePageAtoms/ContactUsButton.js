import Image from "next/image";
import callIcon from "@/assets/icons/call.svg";
import styles from "@/styles/organismsStyles/BuyByPhoneBanner.module.css";

function ContactUsButton() {
  return (
    <div className={styles.button}>
      <h2>
        <span>١٨٤٠</span>-<span>٠٢١</span>
        <Image src={callIcon} width={24} height={24} alt="callIcon" />
      </h2>
      <button>اطلاعات بیشتر</button>
    </div>
  );
}

export default ContactUsButton;
