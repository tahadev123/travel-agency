import ServiceBox from "../molecules/ServiceBox";

import cheapIcon from "../../assets/icons/cheap.png";
import supportIcon from "../../assets/icons/support.png";
import satisfactionIcon from "../../assets/icons/satisfaction.png";
import styles from "../../styles/organismsStyles/ServicesBox.module.css";

function ServicesBox() {
  return (
    <>
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
    </>
  );
}

export default ServicesBox;
