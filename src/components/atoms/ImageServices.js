import Image from "next/image";

function ImageServices({ imageSrc, imageAlt }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <Image src={imageSrc} width={104} height={104} alt={imageAlt} />
    </div>
  );
}

export default ImageServices;
