import Image from "next/image";

import styles from "@/styles/organismsStyles/BuyByPhoneBanner.module.css";

function ImageContactBanner({ imageSrc }) {
  return (
    <div className={styles.image}>
      <Image src={imageSrc} width={308} height={225} alt="contactUsImage" />
    </div>
  );
}

export default ImageContactBanner;
