import Image from "next/image";

import styles from "@/styles/organismsStyles/ServicesBox.module.css"

function ImageServices({ imageSrc, imageAlt }) {
  return (
    <div className={styles.image}>
      <Image src={imageSrc} width={104} height={104} alt={imageAlt} />
    </div>
  );
}

export default ImageServices;
