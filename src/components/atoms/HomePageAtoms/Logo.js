"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import HeaderLi from "./HeaderLi";
import LogoImage from "@/assets/images/Torino.png";

import HamburMenuIcon from "@/assets/icons/HamburMenu.svg";
import closeIcon from "@/assets/icons/close.svg";
import styles from "@/styles/atomsStyles/Logo.module.css";

function Logo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Image
        className={styles.logo}
        src={LogoImage}
        width={146}
        height={44}
        alt="Logo"
      />
      <Image
        className={styles.hamburMenu}
        onClick={() => setIsOpen(true)}
        src={HamburMenuIcon}
        alt="hambur-menu"
      />
      {isOpen ? <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} /> : null}
    </div>
  );
}

export default Logo;

function HamburgerMenu({ isOpen, setIsOpen }) {
  return (
    <div className={styles.hamburgerMenuBox}>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 120 }}
        className={styles.box}
      >
        <button onClick={() => setIsOpen(false)}>
          <Image src={closeIcon} alt="closeIcon" width={40} height={40} />
        </button>
        <nav>
          <HeaderLi isHamburgerMenu={true} />
        </nav>
      </motion.div>
    </div>
  );
}
