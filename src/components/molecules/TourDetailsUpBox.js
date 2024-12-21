import ImageAndTitle from "../atoms/TourDetailsAtoms/ImageAndTitle";
import styles from "../../styles/moleculesStyles/TourDetailsUpBox.module.css"

function TourDetailsUpBox({ data }) {
  return (
    <div className={styles.upBox}>
      <ImageAndTitle data={data} />
    </div>
  );
}

export default TourDetailsUpBox;
