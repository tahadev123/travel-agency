import Image from "next/image";
import { convertToPersianNumber } from "@/utils/convertToPersianNumber";

import editIcon from "@/assets/icons/edit-2.svg";
import styles from "@/styles/atomsStyles/BankAccountContent.module.css";

function BankAccountContent({ setIsShowEditForm, isShowEditForm, payment }) {
  return (
    <>
      <div className={styles.title}>
        <h4>اطلاعات حساب بانکی</h4>
        <button
          onClick={() =>
            setIsShowEditForm({ ...isShowEditForm, BankAccountForm: true })
          }
          className={styles.editBtn}
        >
          <Image src={editIcon} alt="edit-icon" />
          ویرایش اطلاعات
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles.twoValue}>
          <div>
            <p>شماره شبا</p>
            <p>شماره حساب</p>
          </div>
          <div className={styles.value}>
            <span>
              {payment?.shaba_code && payment?.shaba_code !== "string"
                ? convertToPersianNumber(payment?.shaba_code)
                : "_"}
            </span>
            <span>
              {payment?.accountIdentifier &&
              payment?.accountIdentifier !== "string"
                ? convertToPersianNumber(payment?.accountIdentifier)
                : "_"}
            </span>
          </div>
        </div>
        <div className={styles.oneValue}>
          <div>
            <p>شماره کارت</p>
          </div>
          <div className={styles.value}>
            <span>
              {payment?.debitCard_code && payment?.debitCard_code !== "string"
                ? convertToPersianNumber(payment?.debitCard_code)
                : "_"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default BankAccountContent;
