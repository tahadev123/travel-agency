import { convertToPersianNumber } from "@/utils/convertToPersianNumber";

import styles from "@/styles/atomsStyles/DownTours.module.css";

function DownTours({ price }) {
  return (
    <>
      <div className={styles.down}>
        <p className={styles.numberOfTour}>
          شماره تور
          <span>{convertToPersianNumber("102095404")}</span>
        </p>
        <p className={styles.price}>
          مبلغ پرداخت شده
          <p>
            {`${new Intl.NumberFormat("fa-IR").format(price)}٬۰۰۰`}
            <span>تومان</span>
          </p>
        </p>
      </div>
    </>
  );
}

export default DownTours;
