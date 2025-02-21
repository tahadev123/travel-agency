import Image from "next/image";
import { DatePicker } from "zaman";
import { DateToIso } from "@/utils/helpers";

import styles from "@/styles/atomsStyles/Inputs.module.css";

function DateInput({ placeholder, icon, information, setInformation }) {
  return (
    <div className={styles.containerDate}>
      <Image src={icon} className={styles.icon} alt="iconinput" />
      <p>{placeholder}</p>
      <DatePicker
        onChange={(e) =>
          setInformation({
            ...information,
            date: {
              startDate: DateToIso(e.from),
              endDate: DateToIso(e.to),
            },
          })
        }
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
