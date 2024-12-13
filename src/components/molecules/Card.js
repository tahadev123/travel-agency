import CheckoutBoxCard from "../atoms/CheckoutBoxCard";
import DetailsCard from "../atoms/DetailsCard";
import ImageCard from "../atoms/ImageCard";
import TitleCard from "../atoms/TitleCard";
import styles from "../../styles/Card.module.css";

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
          <CheckoutBoxCard price={tour.price} />
        </div>
      ))}
    </div>
  );
}

export default Card;
