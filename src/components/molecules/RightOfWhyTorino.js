"use client"
import React from "react";
import WhyTorinoTitle from "../atoms/WhyTorinoTitle";
import WhyTorinoDescription from "../atoms/WhyTorinoDescription";
import styled from "styled-components";

const Div = styled.div`
  width: 50%;
`;

function RightOfWhyTorino() {
  return (
    <Div>
      <WhyTorinoTitle />
      <WhyTorinoDescription />
    </Div>
  );
}

export default RightOfWhyTorino;
