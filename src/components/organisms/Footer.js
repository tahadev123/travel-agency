import ServiceBox from "../molecules/ServiceBox";
import cheapIcon from "../../assets/icons/cheap.png";
import supportIcon from "../../assets/icons/support.png";
import satisfactionIcon from "../../assets/icons/satisfaction.png";
import styles from "../../styles/Footer.module.css";
import FooterBox from "../molecules/FooterBox";
import PrivacyPolicy from "../atoms/PrivacyPolicy";

function Footer() {
  return (
    <>
      <div className="borderTop"></div>
      <div className={styles.servicesbox}>
        <ServiceBox
          title="بصرفه ترین قیمت"
          description="بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید."
          imageSrc={cheapIcon}
          imageAlt="cheapIcon"
        />
        <ServiceBox
          title="پشتیبانی"
          description="پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما."
          imageSrc={supportIcon}
          imageAlt="supportIcon"
        />
        <ServiceBox
          title="رضایت کاربران"
          description="رضایت بیش از 10هزار کاربر از تور های ما."
          imageSrc={satisfactionIcon}
          imageAlt="satisfactionIcon"
        />
      </div>
      <div className={styles.footer}>
        <FooterBox />
        <PrivacyPolicy />
      </div>
    </>
  );
}

export default Footer;
