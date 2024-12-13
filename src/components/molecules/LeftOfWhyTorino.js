"use client";
import { useState } from "react";
import WhyTorinoNextStep from "../atoms/WhyTorinoNextStep";
import styled from "styled-components";
import WhyTorinoSlider from "../atoms/WhyTorinoSlider";

const Div = styled.div`
  width: 50%;
  position: relative;
  right: 3%;

  @media (min-width: 1870px) {
    position: relative;
    right: 12%;
    width: 45%;
  }

  @media (min-width: 2200px) {
    position: relative;
    right: 16%;
    width: 40%;
  }

  @media (min-width: 2500px) {
    position: relative;
    right: 21%;
    width: 34%;
  }
`;

function LeftOfWhyTorino() {
  const [slider, setSlider] = useState(1);

  return (
    <Div>
      <WhyTorinoSlider slider={slider} />
      <WhyTorinoNextStep slider={slider} setSlider={setSlider} />
    </Div>
  );
}

export default LeftOfWhyTorino;
