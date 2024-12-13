import Image from "next/image";

function ImageCard({ image }) {
  return (
    <div>
      <Image
        src={image}
        width={278}
        height={159}
        alt="tourImage"
      />
    </div>
  );
}

export default ImageCard;
