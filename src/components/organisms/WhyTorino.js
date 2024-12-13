"use client"
import LeftOfWhyTorino from "../molecules/LeftOfWhyTorino";
import RightOfWhyTorino from "../molecules/RightOfWhyTorino";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  width: 100%;
  height: 676px;
`;

function WhyTorino() {
  return (
    <Div>
      <RightOfWhyTorino />
      <LeftOfWhyTorino />
    </Div>
  );
}

export default WhyTorino;
