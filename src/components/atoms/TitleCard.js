import styles from "../../styles/TitleCard.module.css";

function TitleCard({ title }) {
  return (
    <div className={styles.title}>
      <p>{title}</p>
    </div>
  );
}

export default TitleCard;
