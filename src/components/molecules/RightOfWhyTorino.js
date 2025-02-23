import WhyTorinoTitle from "../atoms/HomePageAtoms/WhyTorinoTitle";
import WhyTorinoDescription from "../atoms/HomePageAtoms/WhyTorinoDescription";

import styles from "@/styles/WhyTorino.module.css"

function RightOfWhyTorino() {
  return (
    <div className={styles.rightOfBox}>
      <WhyTorinoTitle />
      <WhyTorinoDescription />
    </div>
  );
}

export default RightOfWhyTorino;
