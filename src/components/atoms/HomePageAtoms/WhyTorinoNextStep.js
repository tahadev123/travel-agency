import Image from "next/image";
import { convertToPersianNumber } from "@/utils/convertToPersianNumber";

import arrowLeftIcon from "@/assets/icons/arrow-left.svg";
import arrowRightIcon from "@/assets/icons/arrow-right.svg";
import styles from "@/styles/WhyTorino.module.css";

function WhyTorinoNextStep({ slider, setSlider }) {
  const increaseHandler = () => {
    if (slider < 4) {
      setSlider((prev) => prev + 1);
    } else {
      setSlider(1);
    }
  };

  const decreaseHandler = () => {
    if (slider > 1) {
      setSlider((prev) => prev - 1);
    }
  };

  return (
    <div className={styles.stepBox}>
      <Image
        src={arrowRightIcon}
        alt="arrowRight"
        className={styles.arrowRight}
        onClick={increaseHandler}
      />
      <span>
        ۴ / {convertToPersianNumber(slider)}
      </span>
      <Image
        src={arrowLeftIcon}
        alt="arrowLeft"
        className={styles.arrowLeft}
        onClick={decreaseHandler}
      />
    </div>
  );
}

export default WhyTorinoNextStep;
