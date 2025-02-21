import ContactBanner from "../molecules/ContactBanner";
import ContactButton from "../molecules/ContactButton";
import styles from "@/styles/organismsStyles/BuyByPhoneBanner.module.css";

function BuyByPhoneBanner() {
  return (
    <div className={styles.content}>
      <ContactBanner />
      <ContactButton />
    </div>
  );
}

export default BuyByPhoneBanner;
