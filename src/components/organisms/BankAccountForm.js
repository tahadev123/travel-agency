"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import { bankAccountSchema } from "@/core/schema";
import { useUpdateProfile } from "@/core/services/mutations";
import { useGetUserData } from "@/core/services/queries";

import styles from "../../styles/organismsStyles/BankAccountForm.module.css";

function BankAccountForm({ setIsShowEditForm }) {
  const { data } = useGetUserData();
  if (!data) return;

  const { payment } = data.data;

  const [value, setValue] = useState({
    shaba_code: payment.shaba_code,
    debitCard_code: payment.debitCard_code,
    accountIdentifier: payment.accountIdentifier,
  });

  const { mutate, isPending } = useUpdateProfile();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bankAccountSchema),
  });

  const submitHandler = (data) => {
    if (isPending) return;

    mutate(
      { payment: data },
      {
        onSuccess: (data) => {
          toast.success(data?.data?.message);
          setIsShowEditForm(false);
        },
        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
  };

  const changeHandler = (e) => {
    const name = e.target.name;
    const eventValue = e.target.value;

    setValue({ ...value, [name]: eventValue });
  };

  return (
    <>
      <h4>اطلاعات حساب بانکی</h4>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className={styles.formContainer}>
          <input
            {...register("shaba_code")}
            placeholder="شماره شبا"
            name="shaba_code"
            value={
              value.shaba_code === payment.shaba_code
                ? payment.shaba_code === "string"
                  ? ""
                  : payment.shaba_code
                : value.shaba_code
            }
            onChange={changeHandler}
          />
          <input
            {...register("debitCard_code")}
            placeholder="شماره کارت"
            name="debitCard_code"
            value={
              value.debitCard_code === payment.debitCard_code
                ? payment.debitCard_code === "string"
                  ? ""
                  : payment.debitCard_code
                : value.debitCard_code
            }
            onChange={changeHandler}
          />
          {!!errors?.debitCard_code && (
            <span>{errors?.debitCard_code?.message}</span>
          )}
          <input
            {...register("accountIdentifier")}
            placeholder="شماره حساب"
            name="accountIdentifier"
            value={
              value.accountIdentifier === payment.accountIdentifier
                ? payment.accountIdentifier === "string"
                  ? ""
                  : payment.accountIdentifier
                : value.accountIdentifier
            }
            onChange={changeHandler}
          />
          {!!errors?.accountIdentifier && (
            <span>{errors?.accountIdentifier?.message}</span>
          )}
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.submitBtn}>
            تایید
          </button>
          <button
            className={styles.cancelBtn}
            onClick={() => setIsShowEditForm(false)}
          >
            انصراف
          </button>
        </div>
      </form>
    </>
  );
}

export default BankAccountForm;
