"use client";
import Link from "next/link";
import Image from "next/image";
import AuthProvider from "@/partials/providers/AuthProvider";

import profileIcon from "../../assets/icons/profile3.svg";
import profileActiveIcon from "../../assets/icons/profile-active.svg";
import SunFogIcon from "../../assets/icons/sun-fog.svg";
import SunFogActiveIcon from "../../assets/icons/sun-fog-active.svg";
import ConvertCardIcon from "../../assets/icons/convert-card.svg";
import ConvertCardActiveIcon from "../../assets/icons/convert-card-active.svg";
import styles from "../../styles/ProfileLayout.module.css";
import { usePathname } from "next/navigation";

function layout({ children }) {
  const pathname = usePathname();

  return (
    <AuthProvider>
      <div className="page-content">
        <div className={styles.container}>
          <ul className={styles.layout}>
            <li
              style={{ borderRadius: "10px 10px 0 0" }}
              className={pathname === "/profile" ? styles.active : null}
            >
              <Image
                src={pathname === "/profile" ? profileActiveIcon : profileIcon}
                alt="sun-fog"
              />
              <Link href="/profile">پروفایل</Link>
            </li>
            <li
              style={{ borderRadius: "0" }}
              className={
                pathname === "/profile/my-tours" ? styles.active : null
              }
            >
              <Image
                src={
                  pathname === "/profile/my-tours"
                    ? SunFogActiveIcon
                    : SunFogIcon
                }
                alt="sun-fog"
              />
              <Link href="/profile/my-tours">تور های من</Link>
            </li>
            <li
              style={{ borderRadius: "0 0 10px 10px" }}
              className={
                pathname === "/profile/my-transactions" ? styles.active : null
              }
            >
              <Image
                src={
                  pathname === "/profile/my-transactions"
                    ? ConvertCardActiveIcon
                    : ConvertCardIcon
                }
                alt="sun-fog"
              />
              <Link href="/profile/my-transactions">تراکنش ها</Link>
            </li>
          </ul>
          <main className={styles.content}>{children}</main>
        </div>
      </div>
    </AuthProvider>
  );
}

export default layout;
