"use client";
import { useState, useContext } from "react";
import ModalProvider from "@/partials/context/ShowModalContext";
import Image from "next/image";
import closeIcon from "../../assets/icons/close.svg";
import styles from "../../styles/organismsStyles/SendOTPForm.module.css";

function SendOTPForm({ phoneNumber, setPhoneNumber, sendOtpHandler, error }) {
  const { setIsShowModal } = useContext(ModalProvider);

  return (
    <div className={styles.container}>
      <Image
        onClick={() => setIsShowModal(false)}
        src={closeIcon}
        alt="close-icon"
      />
      <h4>ورود به تورینو</h4>
      <form onSubmit={sendOtpHandler}>
        <label>شماره موبایل خود را وارد کنید</label>
        <input
          type="text"
          placeholder="٠٩١٢٤٢٥****"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        {!!error && <p>{error}</p>}
        <button type="submit">ارسال کد تایید</button>
      </form>
    </div>
  );
}

export default SendOTPForm;
