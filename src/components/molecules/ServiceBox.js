import ImageServices from "../atoms/HomePageAtoms/ImageServices";
import TitleServices from "../atoms/HomePageAtoms/TitleServices";

import styles from "@/styles/organismsStyles/ServicesBox.module.css"

function ServiceBox({ title, description, imageSrc, imageAlt }) {
  return (
    <div className={styles.box}>
      <ImageServices imageSrc={imageSrc} imageAlt={imageAlt} />
      <TitleServices title={title} description={description} />
    </div>
  );
}

export default ServiceBox;
