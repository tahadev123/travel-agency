"use client";
import Image from "next/image";
import callIcon from "../../assets/icons/call.svg";
import styled from "styled-components";

const Div = styled.div`
  h2 {
    font-size: 28px;
    text-align: center;
  }

  h2 img {
    position: relative;
    top: 6px;
    margin-right: 9px;
  }

  button {
    width: 175px;
    height: 41px;
    background-color: #10411b;
    border: none;
    color: #fff;
    border-radius: 9px;
    font-family: "yekan-bakh";
    font-size: 16px;
    cursor: pointer;
  }
`;

function ContactUsButton() {
  return (
    <Div>
      <h2>
        <span>١٨٤٠</span>-<span>٠٢١</span>
        <Image src={callIcon} width={24} height={24} alt="callIcon" />
      </h2>
      <button>اطلاعات بیشتر</button>
    </Div>
  );
}

export default ContactUsButton;
