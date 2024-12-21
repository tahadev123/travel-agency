import Card from "../molecules/Card";
import styles from "../../styles/organismsStyles/Cards.module.css";

function Cards({ data }) {
  return (
    <div className={styles.cards}>
      <h1>همه تور ها</h1>
      <Card data={data} />
    </div>
  );
}

export default Cards;
