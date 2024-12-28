import Image from "next/image";

function ImageCard({ image }) {
  return (
    <div>
      <Image src={image} width={0} height={0} sizes="100%" style={{ width: "100%", height: "160px" }}  alt="tourImage" />
    </div>
  );
}

export default ImageCard;
