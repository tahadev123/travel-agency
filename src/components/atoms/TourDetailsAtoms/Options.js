import Image from "next/image";
import { formatDate } from "@/utils/formatDate";
import { convertToPersianNumber } from "@/utils/convertToPersianNumber";

import busIcon from "@/assets/icons/bus.svg";
import calendar2Icon from "@/assets/icons/calendar-2.svg";
import calendar3Icon from "@/assets/icons/calendar-3.svg";
import securityIcon from "@/assets/icons/security.svg";
import routingIcon from "@/assets/icons/routing-2.svg";
import user2Icon from "@/assets/icons/profile-2user.svg";
import styles from "@/styles/atomsStyles/Options.module.css";

function Options({ data }) {
  return (
    <>
      <div className={styles.descriptions}>
        <div className={styles.description1}>
          <span>
            <Image src={routingIcon} alt="routingIcon" />
            مبدا
          </span>
          <p>{data.origin?.name}</p>
        </div>
        <div className={styles.description2}>
          <span>
            <Image src={calendar2Icon} alt="calendar2Icon" />
            تاریخ رفت
          </span>
          <p>
            {data.startDate
              ? `
                  ${formatDate(data.startDate).day} 
                  ${formatDate(data.startDate).monthTitle} 
                  ${formatDate(data.startDate).year}
                `
              : null}
          </p>
        </div>
        <div className={styles.description3}>
          <span>
            <Image src={calendar3Icon} alt="calendar3Icon" />
            تاریخ برگشت
          </span>
          <p>
            {data.endDate
              ? `
                  ${formatDate(data.endDate).day} 
                  ${formatDate(data.endDate).monthTitle} 
                  ${formatDate(data.endDate).year}
                `
              : null}
          </p>
        </div>
        <div className={styles.description4}>
          <span>
            <Image src={busIcon} alt="busIcon" />
            حمل و نقل
          </span>
          <p>
            {data.fleetVehicle === "Bus" ||
            data.fleetVehicle === "Van" ||
            data.fleetVehicle === "SUV"
              ? "زمینی"
              : null}
            {data.fleetVehicle === "Airplane" && "پرواز"}
          </p>
        </div>
        <div className={styles.description5}>
          <span>
            <Image src={user2Icon} alt="user2Icon" />
            ظرفیت
          </span>
          <p>{`حداکثر ${convertToPersianNumber(data.availableSeats)} نفر`}</p>
        </div>
        <div className={styles.description6}>
          <span>
            <Image src={securityIcon} alt="securityIcon" />
            بیمه
          </span>
          <p>{data.insurance ? "دارد" : "ندارد"}</p>
        </div>
      </div>
    </>
  );
}

export default Options;
