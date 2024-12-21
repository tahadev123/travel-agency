"use client";
import Image from "next/image";
import styles from "../../../styles/atomsStyles/Inputs.module.css";
import { DatePicker } from "zaman";

function DateInput({ placeholder, icon }) {
  return (
    <div className={styles.container}>
      <Image src={icon} className={styles.icon} alt="iconinput" />
      <p>{placeholder}</p>
      <DatePicker
        onChange={(e) => console.log(e.value)}
        accentColor="#28A745"
        round="x2"
        position="right"
        className={styles.datePicker}
      />
    </div>
  );
}

export default DateInput;
