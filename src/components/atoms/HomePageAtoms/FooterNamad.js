"use client";
import Image from "next/image";
import namad1 from "../../../assets/images/aira.png";
import namad2 from "../../../assets/images/ecunion.png";
import namad3 from "../../../assets/images/passenger-rights.png";
import namad4 from "../../../assets/images/samandehi.png";
import namad5 from "../../../assets/images/state-airline.png";
import styled from "styled-components";

const Div = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row-reverse;

  img {
    padding-right: 30px;
  }
`;

function FooterNamad() {
  return (
    <Div>
      <Image src={namad1} width={78} height={74} alt="namad1" />
      <Image src={namad2} width={78} height={74} alt="namad2" />
      <Image src={namad3} width={78} height={74} alt="namad3" />
      <Image src={namad4} width={78} height={74} alt="namad4" />
      <Image src={namad5} width={78} height={74} alt="namad5" />
    </Div>
  );
}

export default FooterNamad;
