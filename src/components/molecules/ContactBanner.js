import ImageContactBanner from "../atoms/HomePageAtoms/ImageContactBanner";
import TitleContactBanner from "../atoms/HomePageAtoms/TitleContactBanner";

import contactUsImage from "@/assets/images/contact-us-banner.png";
import styles from "@/styles/organismsStyles/BuyByPhoneBanner.module.css";

function ContactBanner() {
  return (
    <div className={styles.banner}>
      <TitleContactBanner />
      <ImageContactBanner imageSrc={contactUsImage} />
    </div>
  );
}

export default ContactBanner;
