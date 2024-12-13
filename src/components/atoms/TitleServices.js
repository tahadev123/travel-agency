"use client";
import styled from "styled-components";

const Div = styled.div`
  margin-right: 15px;
  
  h3 {
    font-size: 26px;
    margin-bottom: -10px;
  }

  p {
    font-size: 16px;
  }
`;

function TitleServices({ title, description }) {
  return (
    <Div className="container">
      <h3>{title}</h3>
      <p>{description}</p>
    </Div>
  );
}

export default TitleServices;
