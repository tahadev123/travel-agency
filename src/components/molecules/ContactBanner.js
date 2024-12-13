"use client"
import ImageContactBanner from "../atoms/ImageContactBanner";
import TitleContactBanner from "../atoms/TitleContactBanner";
import contactUsImage from "../../assets/images/contact-us-banner.png";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 73%;
  background-color: #28a745;
  border-radius: 10px;
`;

function ContactBanner() {
  return (
    <Div>
      <TitleContactBanner />
      <ImageContactBanner imageSrc={contactUsImage} />
    </Div>
  );
}

export default ContactBanner;
