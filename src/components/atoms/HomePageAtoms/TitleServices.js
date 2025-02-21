import styles from "@/styles/atomsStyles/TitleServices.module.css";

function TitleServices({ title, description }) {
  return (
    <div className={styles.titles}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default TitleServices;
