"use client"
import ContactUsButton from "../atoms/ContactUsButton";
import styled from "styled-components";

const Div = styled.div`
  width: 27%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function ContactButton() {
  return (
    <Div>
      <ContactUsButton />
    </Div>
  );
}

export default ContactButton;
