import Image from "next/image";
import { checkTravelDate, formatDate } from "@/utils/formatDate";

import SunFogIcon from "@/assets/icons/sun-fog-linear.svg";
import BusIcon from "@/assets/icons/bus2.svg";
import AirPlaneIcon from "@/assets/icons/airplane.svg";
import styles from "@/styles/atomsStyles/UpTours.module.css";

function UpTours({ tourData }) {
  const { title, origin, destination, startDate, fleetVehicle, endDate } =
    tourData;

  return (
    <>
      <div className={styles.up}>
        <div>
          <p className={styles.title}>
            <Image src={SunFogIcon} alt="sun-fog-icon" />
            {title}
          </p>
          <p className={styles.startDateAndDestination}>
            {`${origin.name} به ${destination.name}`}
            <span>●</span>
            <span>
              {`
                ${formatDate(startDate).dayWeek} 
                ${formatDate(startDate).day} 
                ${formatDate(startDate).monthTitle} 
                ${formatDate(startDate).year}
              `}
            </span>
          </p>
        </div>
        <div>
          <p className={styles.title}>
            <Image
              src={
                fleetVehicle === "Bus" ||
                fleetVehicle === "Van" ||
                fleetVehicle === "SUV"
                  ? BusIcon
                  : AirPlaneIcon
              }
              alt={`${fleetVehicle}-Icon`}
            />
            <span>
              {`سفر با ${
                fleetVehicle === "Bus" ||
                fleetVehicle === "Van" ||
                fleetVehicle === "SUV"
                  ? "اتوبوس"
                  : "هواپیما"
              }`}
            </span>
          </p>
          <p className={styles.endDate}>
            تاریخ برگشت
            <span>●</span>
            <span>
              {`${formatDate(endDate).dayWeek} 
                        ${formatDate(endDate).day} 
                        ${formatDate(endDate).monthTitle} 
                        ${formatDate(endDate).year}
                      `}
            </span>
          </p>
        </div>
        {checkTravelDate(startDate) ? (
          <p className={styles.finished}>به اتمام رسیده</p>
        ) : (
          <p className={styles.inProgress}>در حال برگزاری</p>
        )}
      </div>
    </>
  );
}

export default UpTours;
