import DownTours from "../atoms/ProfileAtoms/DownTours";
import UpTours from "../atoms/ProfileAtoms/UpTours";

import styles from "../../styles/moleculesStyles/MyTour.module.css";

function MyTour({ data }) {
  return (
    <>
      {data.map((tour) => (
        <div key={tour.id} className={styles.tour}>
          <UpTours tourData={tour} />
          <DownTours price={tour.price} />
        </div>
      ))}
    </>
  );
}

export default MyTour;
