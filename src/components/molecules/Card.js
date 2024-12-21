import CheckoutBoxCard from "../atoms/HomePageAtoms/CheckoutBoxCard";
import DetailsCard from "../atoms/HomePageAtoms/DetailsCard";
import ImageCard from "../atoms/HomePageAtoms/ImageCard";
import TitleCard from "../atoms/HomePageAtoms/TitleCard";

import styles from "../../styles/moleculesStyles/Card.module.css";

function Card({ data }) {
  return (
    <div className={styles.container}>
      {data?.map((tour) => (
        <div className={styles.card} key={tour.id}>
          <ImageCard image={tour.image} />
          <TitleCard title={tour.title} />
          <DetailsCard
            startDate={tour.startDate}
            endDate={tour.endDate}
            fleetVehicle={tour.fleetVehicle}
            options={tour.options}
          />
          <CheckoutBoxCard price={tour.price} id={tour.id} />
        </div>
      ))}
    </div>
  );
}

export default Card;
