"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import { AccountInformationSchema } from "@/schema/index";
import { useUpdateProfile } from "@/services/mutations";
import { useGetUserData } from "@/services/queries";

import styles from "@/styles/organismsStyles/AccountInformationForm.module.css";

function AccountInformationForm({ setIsShowEditForm, isShowEditForm }) {
  const { data } = useGetUserData();
  if (!data) return;

  const { mutate, isPending } = useUpdateProfile();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(AccountInformationSchema),
  });

  useEffect(() => {
    if (data?.data?.email) {
      reset({ email: data.data.email });
    }
  }, [data, reset]);

  const submitHandler = (userData) => {
    if (isPending) return;

    const { email } = userData;

    mutate(
      { email },
      {
        onSuccess: (data) => {
          toast.success(data?.data?.message);
          setIsShowEditForm({
            ...isShowEditForm,
            AccountInformationForm: false,
          });
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
          <input {...register("email")} placeholder="ایمیل" />
          {!!errors?.email && <span>{errors?.email?.message}</span>}
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
