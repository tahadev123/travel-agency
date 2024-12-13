import ImageServices from "../atoms/ImageServices";
import TitleServices from "../atoms/TitleServices";

function ServiceBox({ title, description, imageSrc, imageAlt }) {
  return (
    <div style={{ display: "flex", alignItems: "center", width: "304px" }}>
      <ImageServices imageSrc={imageSrc} imageAlt={imageAlt} />
      <TitleServices title={title} description={description} />
    </div>
  );
}

export default ServiceBox;