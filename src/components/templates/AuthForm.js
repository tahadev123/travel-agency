"use client";
import { useState, useContext } from "react";
import ModalProvider from "@/partials/context/ShowModalContext";
import ModalContainer from "@/partials/containers/ModalContainer";
import SendOTPForm from "../organisms/SendOTPForm";
import CheckOTPForm from "../organisms/CheckOTPForm";

import toast from "react-hot-toast";
import { useSendOtp } from "@/core/services/mutations";
import { isValidPhoneNumber } from "@/core/utils/validation";

function AuthForm() {
  const { isShowModal, setIsShowModal } = useContext(ModalProvider);

  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const { isPending, mutate } = useSendOtp();

  const sendOtpHandler = (e) => {
    if (e?.target.tagName === "FORM") {
      e.preventDefault()
    } else {
      null
    }

    if (isPending) return;
    if (!isValidPhoneNumber(phoneNumber))
      return setError("شماره معتبر وارد کنید!");
    setError("");

    mutate(
      { mobile: phoneNumber },
      {
        onSuccess: (data) => {
          toast.success(data?.data?.message);
          toast(data?.data?.code);
          setStep(2);
        },
        onError: (error) => {
          toast(error.message);
        },
      }
    );
  };

  return (
    <div>
      {step === 1 && (
        <ModalContainer
          isShowModal={isShowModal}
          setIsShowModal={setIsShowModal}
        >
          <SendOTPForm
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            setStep={setStep}
            sendOtpHandler={sendOtpHandler}
            error={error}
          />
        </ModalContainer>
      )}
      {step === 2 && (
        <ModalContainer
          setIsShowModal={setIsShowModal}
          isShowModal={isShowModal}
        >
          <CheckOTPForm
            phoneNumber={phoneNumber}
            setStep={setStep}
            setIsShowModal={setIsShowModal}
            sendOtpHandler={sendOtpHandler}
          />
        </ModalContainer>
      )}
    </div>
  );
}

export default AuthForm;
