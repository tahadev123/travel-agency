"use client";
import Link from "next/link";
import styled from "styled-components";

const Div = styled.div`
  display: flex;

  h3 {
    font-size: 24px;
    color: #282828;
  }

  ul {
    padding: 0;
  }

  li {
    list-style: none;
    font-size: 18px;
    line-height: 27.9px;
    color: #282828;
    margin-bottom: 12px;
  }
`;

function FooterLi() {
  return (
    <Div>
      <ul>
        <h3>تورینو</h3>
        <li>
          <Link href="/">درباره ما</Link>
        </li>
        <li>
          <Link href="/">تماس با ما</Link>
        </li>
        <li>
          <Link href="/">چرا تورینو</Link>
        </li>
        <li>
          <Link href="/">بیمه مسافرتی</Link>
        </li>
      </ul>
      <ul style={{ paddingRight: "100px" }}>
        <h3>خدمات مشتریان</h3>
        <li>
          <Link href="/">پشتیبانی آنلاین</Link>
        </li>
        <li>
          <Link href="/">راهنمایی خرید</Link>
        </li>
        <li>
          <Link href="/">راهنمای استرداد</Link>
        </li>
        <li>
          <Link href="/">پرسش و پاسخ</Link>
        </li>
      </ul>
    </Div>
  );
}

export default FooterLi;
