import Options from "../atoms/TourDetailsAtoms/Options";
import styles from "@/styles/moleculesStyles/TourDetailsDownBox.module.css";

function TourDetailsDownBox({ data }) {
  return (
    <div className={styles.downBox}>
      <Options data={data} />
    </div>
  );
}

export default TourDetailsDownBox;
