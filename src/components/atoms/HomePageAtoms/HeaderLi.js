"use client";
import Link from "next/link";
import Image from "next/image";

import homeIcon from "@/assets/icons/home.png";
import volumeIcon from "@/assets/icons/volume-low.svg";
import airplaneIcon from "@/assets/icons/airplane-square.svg";
import phoneIcon from "@/assets/icons/linearCall.svg";
import styles from "@/styles/atomsStyles/HeaderLi.module.css";

function HeaderLi({ pathname, isHamburgerMenu }) {
  const isActive = (path) => pathname === path;

  return (
    <div
      className={isHamburgerMenu ? styles.hamburContainer : styles.container}
    >
      <ul>
        <li>
          {isHamburgerMenu ? (
            <Image src={homeIcon} alt="headerIcon" width={20} height={20} />
          ) : null}
          <Link href="/" className={isActive("/") ? styles.active : null}>
            صفحه اصلی
          </Link>
        </li>
        <li>
          {isHamburgerMenu ? (
            <Image src={airplaneIcon} alt="headerIcon" width={20} height={20} />
          ) : null}
          <Link
            href="/services"
            className={isActive("/services") ? styles.active : null}
          >
            خدمات گردشگری
          </Link>
        </li>
        <li>
          {isHamburgerMenu ? (
            <Image src={volumeIcon} alt="headerIcon" width={20} height={20} />
          ) : null}
          <Link
            href="/about-us"
            className={isActive("/about-us") ? styles.active : null}
          >
            درباره ما
          </Link>
        </li>
        <li>
          {isHamburgerMenu ? (
            <Image src={phoneIcon} alt="headerIcon" width={20} height={20} />
          ) : null}
          <Link
            href="/contact-us"
            className={isActive("/contact-us") ? styles.active : null}
          >
            تماس با ما
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HeaderLi;
