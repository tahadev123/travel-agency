import styles from "../../styles/Cards.module.css";
import Card from "../molecules/Card";

function Cards({ data }) {
  return (
    <div className={styles.cards}>
      <h1>همه تور ها</h1>
      <Card data={data} />
    </div>
  );
}

export default Cards;
