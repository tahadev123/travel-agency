"use client";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DatePicker } from "zaman";
import toast from "react-hot-toast";

import { PersonalInformationSchema } from "@/schema/index";
import { useUpdateProfile } from "@/services/mutations";
import { useGetUserData } from "@/services/queries";

import styles from "@/styles/organismsStyles/BankAccountForm.module.css";

function PersonalInformationForm({ setIsShowEditForm, isShowEditForm }) {
  const {
    data: { data },
  } = useGetUserData();
  if (!data) return;

  const { mutate, isPending } = useUpdateProfile();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(PersonalInformationSchema),
  });

  useEffect(() => {
    if (data) {
      reset({
        firstName: data.firstName,
        lastName: data.lastName,
        nationalCode: data.nationalCode,
        gender: data.gender,
      });
    }
  }, [data, reset]);

  const submitHandler = (userData) => {
    if (isPending) return;

    const { firstName, lastName, gender, nationalCode, birthDate } = userData;

    mutate(
      { firstName, lastName, gender, nationalCode, birthDate },
      {
        onSuccess: (data) => {
          toast.success(data?.data?.message);
          setIsShowEditForm({
            ...isShowEditForm,
            PersonalInformationForm: false,
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
      <h4>اطلاعات شخصی</h4>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className={styles.formContainer}>
          <input {...register("firstName")} placeholder="نام" />
          {!!errors?.firstName && <span>{errors?.firstName?.message}</span>}
          <input {...register("lastName")} placeholder="نام خانوادگی" />
          {!!errors?.lastName && <span>{errors?.lastName?.message}</span>}
          <input {...register("nationalCode")} placeholder="کد ملی" />
          {!!errors?.nationalCode && (
            <span>{errors?.nationalCode?.message}</span>
          )}
          <Controller
            control={control}
            name="birthDate"
            render={({ field: { onChange } }) => (
              <div>
                <DatePicker
                  onChange={(e) => onChange(e.value.toISOString())}
                  defaultValue={data.birthDate}
                  accentColor="#28A745"
                  round="x2"
                />
              </div>
            )}
          />
          <select {...register("gender")}>
            <option value="">جنسیت</option>
            <option value="male">مرد</option>
            <option value="female">زن</option>
          </select>
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

export default PersonalInformationForm;
