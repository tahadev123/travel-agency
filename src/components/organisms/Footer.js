import FooterBox from "../molecules/FooterBox";
import PrivacyPolicy from "../atoms/HomePageAtoms/PrivacyPolicy";

import styles from "@/styles/organismsStyles/Footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.footer}>
      <div className="borderTop"></div>
        <FooterBox />
        <PrivacyPolicy />
      </div>
    </>
  );
}

export default Footer;
