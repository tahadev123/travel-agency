import MyTour from "../molecules/MyTour";

import styles from "../../styles/organismsStyles/MyTours.module.css";

function MyTours({ toursData }) {
  return (
    <>
      <div className={styles.tours}>
        {toursData.data.length === 0 ? (
          <p style={{ textAlign: "center" }}>هیج توری خریداری نشده</p>
        ) : (
          <MyTour data={toursData.data} />
        )}
      </div>
    </>
  );
}

export default MyTours;
