import styles from "../../styles/organismsStyles/Footer.module.css";
import FooterBox from "../molecules/FooterBox";
import PrivacyPolicy from "../atoms/HomePageAtoms/PrivacyPolicy";

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <FooterBox />
        <PrivacyPolicy />
      </div>
    </>
  );
}

export default Footer;
