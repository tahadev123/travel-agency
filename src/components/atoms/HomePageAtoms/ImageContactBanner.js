"use client"
import Image from "next/image";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: flex-end;

  img {
    margin-left: 45px;
  }
`;

function ImageContactBanner({ imageSrc }) {
  return (
    <Div>
      <Image src={imageSrc} width={308} height={225} alt="contactUsImage" />
    </Div>
  );
}

export default ImageContactBanner;
