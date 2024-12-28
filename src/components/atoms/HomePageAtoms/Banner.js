import Image from "next/image";
import banner from "../../../assets/images/banner.png";
import styles from "../../../styles/atomsStyles/Banner.module.css";

function Banner() {
  return (
    <div className={styles.container}>
      <Image src={banner} alt="banner" />
    </div>
  );
}

export default Banner;
