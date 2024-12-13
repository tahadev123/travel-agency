"use client";
import styled from "styled-components";

const Div = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right: 45px;

  h1 {
    font-size: 48px;
    color: #fff;
    font-family: yekan-bakh-fat;
    margin: 0;
  }

  span {
    color: #10411b;
  }

  p {
    font-size: 32px;
    margin: 7px 0 0 0;
    color: #fff;
  }
`;

function TitleContactBanner() {
  return (
    <Div>
      <h1>
        خرید تلفی از <span>تورینو</span>
      </h1>
      <p>به هرکجا که میخواهید!</p>
    </Div>
  );
}

export default TitleContactBanner;
