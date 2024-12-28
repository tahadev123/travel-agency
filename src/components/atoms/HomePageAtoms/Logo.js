"use client"
import Image from "next/image";
import LogoImage from "../../../assets/images/Torino.png";

import HamburMenuIcon from "../../../assets/icons/HamburMenu.svg"
import styles from "../../../styles/atomsStyles/Logo.module.css"

function Logo() {
  return (
    <div className={styles.container}>
      <Image className={styles.logo} src={LogoImage} width={146} height={44} alt="Logo" />
      <Image className={styles.hamburMenu} src={HamburMenuIcon} alt="hambur-menu" />
    </div>
  );
}

export default Logo;
