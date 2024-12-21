"use client";
import { useState, useEffect } from "react";
import OtpInput from "react18-input-otp";
import { useCheckOtp } from "@/core/services/mutations";
import { setCookie } from "@/core/utils/cookie";
import { convertToPersianNumber } from "@/core/utils/convertToPersianNumber";

import backIcon from "../../assets/icons/Line arrow-left.svg";
import Image from "next/image";
import styles from "../../styles/organismsStyles/CheckOTPForm.module.css";
import toast from "react-hot-toast";

function CheckOTPForm({
  phoneNumber,
  setStep,
  setIsShowModal,
  sendOtpHandler,
}) {
  const [code, setCode] = useState("");
  const [remainingTime, setRemainingTime] = useState(1.5 * 60);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (remainingTime <= 0) {
      setIsFinished(true);
      return;
    }

    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [remainingTime]);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  const { isPending, mutate } = useCheckOtp();

  const checkOtpHandler = (event) => {
    event.preventDefault();

    if (isPending) return;

    mutate(
      { mobile: phoneNumber, code },
      {
        onSuccess: (data) => {
          setCookie("accessToken", data?.data?.accessToken, 30);
          setCookie("refreshToken", data?.data?.refreshToken, 365);
          setIsShowModal(false);
          setStep(1);
          toast.success("ثبت نام با موفقیت انجام شد")
        },
        onError: (error) => {
          toast.error(error.message)
        },
      }
    );
  };

  const changeHandler = (otp) => {
    setCode(otp);
  };

  return (
    <div className={styles.container}>
      <Image onClick={() => setStep(1)} src={backIcon} alt="close-icon" />
      <h4>کد تایید را وارد کنید.</h4>
      <form onSubmit={checkOtpHandler}>
        <label>
          کد تایید به شماره {convertToPersianNumber(phoneNumber)} ارسال شد
        </label>
        <div style={{ direction: "ltr" }} className={styles.codeBox}>
          <OtpInput
            value={code}
            onChange={changeHandler}
            numInputs={6}
            inputStyle={{
              border: "1px solid silver",
              borderRadius: "5px",
              width: "49px",
              height: "45px",
              marginRight: "5px",
            }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}>
          {isFinished ? (
            <p
              style={{ color: "#28A745", cursor: "pointer" }}
              onClick={() => {
                sendOtpHandler();
                setIsFinished(false);
                setRemainingTime(1.5 * 60);
              }}
            >
              ارسال مجدد کد
            </p>
          ) : (
            <p>
              {`${convertToPersianNumber(minutes)}:${convertToPersianNumber(
                seconds.toString().padEnd(2, "0")
              )}`}{" "}
              تا ارسال مجدد کد
            </p>
          )}
        </div>
        <button type="submit">ورود به تورینو</button>
      </form>
    </div>
  );
}

export default CheckOTPForm;
