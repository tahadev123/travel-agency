import LeftOfWhyTorino from "../molecules/LeftOfWhyTorino";
import RightOfWhyTorino from "../molecules/RightOfWhyTorino";
import styles from "@/styles/WhyTorino.module.css";

function WhyTorino() {
  return (
    <div className={styles.container}>
      <RightOfWhyTorino />
      <LeftOfWhyTorino />
    </div>
  );
}

export default WhyTorino;
