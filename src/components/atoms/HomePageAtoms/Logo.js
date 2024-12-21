import Image from "next/image";
import LogoImage from "../../../assets/images/Torino.png";

function Logo() {
  return (
    <div>
      <Image src={LogoImage} width={146} height={44} alt="Logo" />
    </div>
  );
}

export default Logo;
