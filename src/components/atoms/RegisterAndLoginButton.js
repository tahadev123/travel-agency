"use client"
import { useContext } from "react";
import ModalProvider from "@/partials/context/ShowModalContext";
import Image from "next/image";
import userIcon from "../../assets/icons/frame.svg";
import styles from "../../styles/RegisterAndLoginButton.module.css";

function RegisterAndLoginButton() {
  const { setIsShowModal } = useContext(ModalProvider)  

  return (
    <div className={styles.container}>
      <button onClick={() => setIsShowModal(true)}>
        <Image src={userIcon} width={24} height={24} alt="user" /> ورود | ثبت
        نام
      </button>
    </div>
  );
}

export default RegisterAndLoginButton;
