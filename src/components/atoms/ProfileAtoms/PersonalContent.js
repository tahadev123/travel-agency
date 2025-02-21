import Image from "next/image";
import { convertToPersianNumber } from "@/utils/convertToPersianNumber";
import { formatDate } from "@/utils/formatDate";

import editIcon from "@/assets/icons/edit-2.svg";
import styles from "@/styles/atomsStyles/PersonalContent.module.css";

function PersonalContent({ setIsShowEditForm, isShowEditForm, data }) {
  const { firstName, lastName, gender, nationalCode, birthDate } = data.data;

  return (
    <>
      <div className={styles.title}>
        <h4>اطلاعات شخصی</h4>
        <button
          onClick={() =>
            setIsShowEditForm({
              ...isShowEditForm,
              PersonalInformationForm: true,
            })
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
            <p>نام و نام خانوادگی</p>
            <p>جنسیت </p>
          </div>
          <div className={styles.value}>
            <span>
              {firstName || lastName ? `${firstName} ${lastName}` : "_"}
            </span>
            <span>{gender ? (gender === "male" ? "مرد" : "زن") : "_"}</span>
          </div>
        </div>
        <div className={styles.twoValue}>
          <div>
            <p>کدملی</p>
            <p>تاریخ تولد</p>
          </div>
          <div className={styles.value}>
            <span>
              {nationalCode ? convertToPersianNumber(nationalCode) : "_"}
            </span>
            <span>
              {birthDate
                ? `${formatDate(birthDate).year}/${
                    formatDate(birthDate).month
                  }/${formatDate(birthDate).day}`
                : "_"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalContent;
