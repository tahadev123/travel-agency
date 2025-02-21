import ContactUsButton from "../atoms/HomePageAtoms/ContactUsButton";

import styles from "@/styles/organismsStyles/BuyByPhoneBanner.module.css";

function ContactButton() {
  return (
    <div className={styles.contentButton}>
      <ContactUsButton />
    </div>
  );
}

export default ContactButton;
