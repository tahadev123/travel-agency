import Link from "next/link";

import styles from "@/styles/atomsStyles/HeaderLi.module.css";

function HeaderLi({ pathname }) {
  const isActive = (path) => pathname === path;

  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href="/" className={isActive("/") ? styles.active : null}>
            صفحه اصلی
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className={isActive("/services") ? styles.active : null}
          >
            خدمات گردشگری
          </Link>
        </li>
        <li>
          <Link
            href="/about-us"
            className={isActive("/about-us") ? styles.active : null}
          >
            درباره ما
          </Link>
        </li>
        <li>
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
