import ImageAndTitle from "../atoms/TourDetailsAtoms/ImageAndTitle";
import styles from "@/styles/moleculesStyles/TourDetailsUpBox.module.css"

function TourDetailsUpBox({ data, id }) {
  return (
    <div className={styles.upBox}>
      <ImageAndTitle data={data} id={id} />
    </div>
  );
}

export default TourDetailsUpBox;
