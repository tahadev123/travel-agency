import Image from "next/image";
import LogoImage from "@/assets/images/Torino.png";

import styles from "@/styles/Footer.module.css"

function FooterLogo() {
  return (
    <div className={styles.logo}>
      <Image src={LogoImage} width={146} height={44} alt="logo" />
      <p>تلفن پشتیبانی: <span>٠٢١٨٥٧٤</span></p>
    </div>
  );
}

export default FooterLogo;
