import Image from "next/image";
import AccountInformationForm from "@/components/organisms/AccountInformationForm";
import { convertToPersianNumber } from "@/utils/convertToPersianNumber";

import editIcon from "@/assets/icons/edit-2.svg";
import styles from "@/styles/atomsStyles/AccountContent.module.css";

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
        {isShowEditForm.AccountInformationForm ? (
          <AccountInformationForm
            setIsShowEditForm={setIsShowEditForm}
            isShowEditForm={isShowEditForm}
          />
        ) : (
          <div className={styles.emailAndEdit}>
            <p>
              ایمیل <span>{email ? email : "_"}</span>
            </p>
            <button
              onClick={() =>
                setIsShowEditForm({
                  ...isShowEditForm,
                  AccountInformationForm: true,
                })
              }
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
