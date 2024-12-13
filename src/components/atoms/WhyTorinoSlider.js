import Image from "next/image";
import styles from "../../styles/WhyTorinoSlider.module.css"
import travelImage1 from "../../assets/images/travel-image1.png";
import travelImage2 from "../../assets/images/travel-image2.png";
import travelImage3 from "../../assets/images/travel-image3.png";
import travelImage4 from "../../assets/images/travel-image4.png";

function WhyTorinoSlider({ slider }) {
  return (
    <div>
      <Image
        src={
          slider === 1
            ? travelImage1
            : slider === 2
            ? travelImage2
            : slider === 3
            ? travelImage4
            : slider === 4
            ? travelImage3
            : null
        }
        alt="travelImage"
        className={styles.travelImage1}
      />
      <Image
        src={
          slider === 1
            ? travelImage2
            : slider === 2
            ? travelImage4
            : slider === 3
            ? travelImage3
            : slider === 4
            ? travelImage1
            : null
        }
        alt="travelImage"
        className={styles.travelImage2}
      />
      <Image
        src={
          slider === 1
            ? travelImage4
            : slider === 2
            ? travelImage3
            : slider === 3
            ? travelImage1
            : slider === 4
            ? travelImage2
            : null
        }
        alt="travelImage"
        className={styles.travelImage4}
      />
      <Image
        src={
          slider === 1
            ? travelImage3
            : slider === 2
            ? travelImage1
            : slider === 3
            ? travelImage2
            : slider === 4
            ? travelImage4
            : null
        }
        alt="travelImage"
        className={styles.travelImage3}
      />
    </div>
  );
}

export default WhyTorinoSlider;
