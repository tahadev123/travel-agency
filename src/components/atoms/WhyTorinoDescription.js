"use client"
import styled from "styled-components";

const Div = styled.div`
  span {
    font-size: 24px;
  }

  p {
    text-align: justify;
    font-size: 20px;
    width: 500px;
    word-spacing: 2px;
    line-height: 44px;
  }
`;

function WhyTorinoDescription() {
  return (
    <Div>
      <span>تور طبیعت گردی و تاریخی</span>
      <p>
        اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل طبیعت
        چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
        طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و آثار
        تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و تاریخی را
        خریداری کنید.
      </p>
    </Div>
  );
}

export default WhyTorinoDescription;
