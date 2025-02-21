import TourDetailsDownBox from "../molecules/TourDetailsDownBox";
import TourDetailsUpBox from "../molecules/TourDetailsUpBox";

import styles from "@/styles/organismsStyles/TourDetailsBox.module.css"

function TourDetailsBox({ data, id }) {
  return <div className={styles.box}>
    <TourDetailsUpBox data={data} id={id} />
    <TourDetailsDownBox data={data} />
  </div>;
}

export default TourDetailsBox;
