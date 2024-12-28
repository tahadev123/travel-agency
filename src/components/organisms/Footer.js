import styles from "../../styles/organismsStyles/Footer.module.css";
import FooterBox from "../molecules/FooterBox";
import PrivacyPolicy from "../atoms/HomePageAtoms/PrivacyPolicy";

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
