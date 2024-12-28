"use client";
import Image from "next/image";
import { DatePicker } from "zaman";

import styles from "../../../styles/atomsStyles/Inputs.module.css";

function DateInput({ placeholder, icon }) {
  return (
    <div className={styles.containerDate}>
      <Image src={icon} className={styles.icon} alt="iconinput" />
      <p>{placeholder}</p>
      <DatePicker
        onChange={(e) => console.log(e.value)}
        accentColor="#28A745"
        round="x2"
        position="right"
        range
        className={styles.datePicker}
      />
    </div>
  );
}

export default DateInput;
