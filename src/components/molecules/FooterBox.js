"use client";
import FooterLi from "../atoms/HomePageAtoms/FooterLi";
import FooterLogo from "../atoms/HomePageAtoms/FooterLogo";
import FooterNamad from "../atoms/HomePageAtoms/FooterNamad";
import styled from "styled-components";

const Div = styled.div`
  .right {
    width: 50%;
    float: right;
  }

  .left {
    width: 50%;
    float: left;
    text-align: left;
    margin-top: 40px;
  }
`;

function FooterBox() {
  return (
    <Div>
      <div className="right">
        <FooterLi />
      </div>
      <div className="left">
        <FooterLogo />
        <FooterNamad />
      </div>
    </Div>
  );
}

export default FooterBox;
