import FooterLi from "../atoms/HomePageAtoms/FooterLi";
import FooterLogo from "../atoms/HomePageAtoms/FooterLogo";
import FooterNamad from "../atoms/HomePageAtoms/FooterNamad";
import styles from "@/styles/Footer.module.css";

function FooterBox() {
  return (
    <div>
      <div className={styles.right}>
        <FooterLi />
      </div>
      <div className={styles.left}>
        <FooterLogo />
        <FooterNamad />
      </div>
    </div>
  );
}

export default FooterBox;
