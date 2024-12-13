"use client";
import ContactBanner from "../molecules/ContactBanner";
import ContactButton from "../molecules/ContactButton";
import styled from "styled-components";

const Div = styled.div`
    width: calc(98% + 7px);
    height: 251px;
    display: flex;
    border: 1px solid #00000040;
    border-radius: 10px;
    margin: 100px 0;
`;

function BuyByPhoneBanner() {
  return (
    <Div>
      <ContactBanner />
      <ContactButton />
    </Div>
  );
}

export default BuyByPhoneBanner;
