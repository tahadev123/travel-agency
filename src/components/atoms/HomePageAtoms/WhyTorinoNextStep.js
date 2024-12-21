"use client"
import Image from "next/image";
import React from "react";
import arrowLeftIcon from "../../../assets/icons/arrow-left.svg";
import arrowRightIcon from "../../../assets/icons/arrow-right.svg";
import styled from "styled-components";
import { convertToPersianNumber } from "@/core/utils/convertToPersianNumber";

const Div = styled.div`
  width: 389px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20%;

  .arrowRight {
    margin-left: 25px;
  }

  .arrowLeft {
    margin-right: 25px;
  }
`;

function WhyTorinoNextStep({ slider, setSlider }) {
  const increaseHandler = () => {
    if (slider < 4) {
      setSlider((prev) => prev + 1);
    } else {
      setSlider(1);
    }
  };

  const decreaseHandler = () => {
    if (slider > 1) {
      setSlider((prev) => prev - 1);
    }
  };

  return (
    <Div>
      <Image
        src={arrowRightIcon}
        alt="arrowRight"
        className="arrowRight"
        onClick={increaseHandler}
      />
      <span style={{ fontSize: "24px" }}>
        ۴ / {convertToPersianNumber(slider)}
      </span>
      <Image
        src={arrowLeftIcon}
        alt="arrowLeft"
        className="arrowLeft"
        onClick={decreaseHandler}
      />
    </Div>
  );
}

export default WhyTorinoNextStep;
