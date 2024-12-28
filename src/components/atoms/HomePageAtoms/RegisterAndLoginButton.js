"use client";
import Image from "next/image";
import toast from "react-hot-toast";
import { useContext, useState, useRef, useEffect } from "react";
import ProfileBox from "@/components/organisms/ProfileBox";
import { useGetUserData } from "@/core/services/queries";
import { setCookie } from "@/core/utils/cookie";
import { convertToPersianNumber } from "@/core/utils/convertToPersianNumber";
import ModalProvider from "@/partials/context/ShowModalContext";

import loginIcon from "../../../assets/icons/login.svg";
import userIcon from "../../../assets/icons/frame.svg";
import arrowDownIcon from "../../../assets/icons/arrow-down.svg";
import styles from "../../../styles/atomsStyles/RegisterAndLoginButton.module.css";

function RegisterAndLoginButton() {
  const { setIsShowModal } = useContext(ModalProvider);

  const [isShowProfileBox, setIsShowProfileBox] = useState(false);
  const divRef = useRef(null);

  const { data, error } = useGetUserData();

  if (error?.message === "Invalid token") {
    toast.error("لطفا دوباره لاگین کنید");
    setCookie("accessToken", "", 0);
    setCookie("refreshToken", "", 0);
  }

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setIsShowProfileBox(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container}>
      {data ? (
        <>
          <div
            className={styles.registered}
            onClick={() => setIsShowProfileBox(true)}
            ref={divRef}
          >
            <Image src={userIcon} width={24} height={24} alt="user" />
            <p>{convertToPersianNumber(data.data.mobile)}</p>
            <Image
              src={arrowDownIcon}
              width={24}
              height={24}
              alt="arrow-down"
            />
          </div>
          {isShowProfileBox ? <ProfileBox data={data} /> : null}
        </>
      ) : (
        <>
          <button
            onClick={() => setIsShowModal(true)}
            className={styles.loginBtn1}
          >
            <Image
              src={userIcon}
              width={24}
              height={24}
              alt="user"
              style={{ marginLeft: "10px" }}
            />{" "}
            ورود | ثبت نام
          </button>
          <button
            className={styles.loginBtn2}
            onClick={() => setIsShowModal(true)}
          >
            <Image src={loginIcon} alt="login-icon" />
          </button>
        </>
      )}
    </div>
  );
}

export default RegisterAndLoginButton;
