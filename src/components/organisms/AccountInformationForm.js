"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import { AccountInformationSchema } from "@/core/schema";
import { useUpdateProfile } from "@/core/services/mutations";
import { useGetUserData } from "@/core/services/queries";

import styles from "../../styles/organismsStyles/AccountInformationForm.module.css";

function AccountInformationForm({ setIsShowEditForm }) {
  const { data } = useGetUserData();
  if (!data) return;

  const { email } = data.data;

  const [emailValue, setEmailValue] = useState(email);

  const { mutate, isPending } = useUpdateProfile();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AccountInformationSchema),
  });

  const submitHandler = (userData) => {
    if (isPending) return;

    const { email } = userData

    mutate(
      { email },
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

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
        <div className={styles.formContainer}>
          <input
            {...register("email")}
            placeholder="ایمیل"
            name="email"
            value={email === emailValue ? email : emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
          {!!errors?.email && (
            <span>{errors?.email?.message}</span>
          )}
        </div>
        <div>
          <button type="submit" className={styles.submitBtn}>
            تایید
          </button>
        </div>
      </form>
    </>
  );
}

export default AccountInformationForm;
