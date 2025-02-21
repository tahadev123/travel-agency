import Card from "../molecules/Card";
import styles from "@/styles/organismsStyles/Cards.module.css";

function Cards({ data }) {
  return (
    <div className={styles.cards}>
      {data.length > 0 ? (
        <>
          <h1>همه تور ها</h1>
          <Card data={data} />
        </>
      ) : (
        <h3>هیچ توری با این مشخصات وجود ندارد</h3>
      )}
    </div>
  );
}

export default Cards;
