import Image from "next/image";
import { DatePicker } from "zaman";

import userIcon from "@/assets/icons/profile3.svg";
import calendarIcon from "@/assets/icons/calendar.svg";
import styles from "@/styles/atomsStyles/CheckoutFormContent.module.css"

function CheckoutFormContent({ form, setForm }) {
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <div className={styles.checkoutFormTitle}>
        <Image src={userIcon} width={24} height={24} alt="userIcon" />
        <h2>مشخصات مسافر</h2>
      </div>
      <div className={styles.inputs}>
        <input
          className={styles.nameInput}
          type="text"
          name="fullName"
          placeholder="نام و نام خانوادگی"
          onChange={changeHandler}
        />
        <input
          className={styles.codeMeliInput}
          type="text"
          name="nationalCode"
          placeholder="کدملی"
          onChange={changeHandler}
        />
        <div className={styles.dateInput}>
          <Image
            src={calendarIcon}
            width={16}
            height={16}
            alt="calendar-icon"
          />
          <p>تاریخ تولد</p>
          <DatePicker
            onChange={(e) =>
              setForm({
                ...form,
                birthDate: e.value.toISOString().substring(0, 10),
              })
            }
            accentColor="#28A745"
            round="x2"
          />
        </div>
        <div className={styles.genderInput}>
          <select name="gender" onChange={changeHandler}>
            <option>جنسیت</option>
            <option value="male">مرد</option>
            <option value="female">زن</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default CheckoutFormContent;
