import styles from "../../styles/WhyTorinoTitle.module.css"

function WhyTorinoTitle() {
  return (
    <div className={styles.whyTorino}>
      <div className={styles.questionIcon}>
        <span>؟</span>
      </div>
      <h1>
        چرا <span>تورینو</span> ؟
      </h1>
    </div>
  );
}

export default WhyTorinoTitle;
