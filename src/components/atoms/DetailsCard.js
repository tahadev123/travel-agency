import { calculateTripTime, formatDate } from "@/core/utils/formatDate";
import styles from "../../styles/DetailsCard.module.css";

function DetailsCard({ startDate, endDate, fleetVehicle, options }) {
  return (
    <div className={styles.details}>
      <p>
        <span>{formatDate(startDate).monthTitle} ماه</span>-
        <span>{calculateTripTime(startDate, endDate)} روزه</span>-
        <span>
          {fleetVehicle === "Bus" ||
          fleetVehicle === "Van" ||
          fleetVehicle === "SUV"
            ? "زمینی"
            : null}
          {fleetVehicle === "Airplane" && "پرواز"}
        </span>
        -<span>{options[1]}</span>
      </p>
    </div>
  );
}

export default DetailsCard;
