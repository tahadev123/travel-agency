import Image from "next/image";
import { convertToPersianNumber } from "@/core/utils/convertToPersianNumber";

import editIcon from "../../../assets/icons/edit-2.svg";
import styles from "../../../styles/atomsStyles/AccountContent.module.css";
import AccountInformationForm from "@/components/organisms/AccountInformationForm";

function AccountContent({ isShowEditForm, setIsShowEditForm, mobile, email }) {
  return (
    <>
      <h4>اطلاعات حساب کاربری</h4>
      <div className={styles.information}>
        <div>
          <p style={{ width: "230px" }}>
            شماره موبایل
            <span>{convertToPersianNumber(mobile)}</span>
          </p>
        </div>
        {isShowEditForm ? (
          <AccountInformationForm setIsShowEditForm={setIsShowEditForm} />
        ) : (
          <div className={styles.emailAndEdit}>
            <p>
              ایمیل <span>{email ? email : "_"}</span>
            </p>
            <button
              onClick={() => setIsShowEditForm(true)}
              className={styles.editBtn}
            >
              <Image src={editIcon} alt="edit-icon" />
              افزودن
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default AccountContent;
