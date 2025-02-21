import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import { bankAccountSchema } from "@/schema/index";
import { useUpdateProfile } from "@/services/mutations";
import { useGetUserData } from "@/services/queries";

import styles from "@/styles/organismsStyles/BankAccountForm.module.css";

function BankAccountForm({ setIsShowEditForm, isShowEditForm }) {
  const { data } = useGetUserData();
  if (!data) return;

  const { mutate, isPending } = useUpdateProfile();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(bankAccountSchema),
  });

  useEffect(() => {
    if (data) {
      reset(data.data.payment);
    }
  }, [data, reset]);

  const submitHandler = (data) => {
    if (isPending) return;

    mutate(
      { payment: data },
      {
        onSuccess: (data) => {
          toast.success(data?.data?.message);
          setIsShowEditForm({ ...isShowEditForm, BankAccountForm: false });
        },
        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
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
          />
          <input
            {...register("debitCard_code")}
            placeholder="شماره کارت"
            name="debitCard_code"
          />
          {!!errors?.debitCard_code && (
            <span>{errors?.debitCard_code?.message}</span>
          )}
          <input
            {...register("accountIdentifier")}
            placeholder="شماره حساب"
            name="accountIdentifier"
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
