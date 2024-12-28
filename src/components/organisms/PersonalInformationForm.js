"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DatePicker } from "zaman";
import toast from "react-hot-toast";

import { PersonalInformationSchema } from "@/core/schema";
import { useUpdateProfile } from "@/core/services/mutations";
import { useGetUserData } from "@/core/services/queries";

import styles from "../../styles/organismsStyles/BankAccountForm.module.css";

function PersonalInformationForm({ setIsShowEditForm }) {
  const { data } = useGetUserData();
  if (!data) return;

  const { firstName, lastName, nationalCode, gender, birthDate } = data.data;

  const [value, setValue] = useState({
    firstName,
    lastName,
    nationalCode,
    gender,
    birthDate,
  });

  const { mutate, isPending } = useUpdateProfile();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PersonalInformationSchema),
  });

  const submitHandler = (userData) => {
    if (isPending) return;
    
    const { firstName, lastName, gender, nationalCode } = userData;
    const birthDate = value.birthDate

    mutate(
      { firstName, lastName, gender, birthDate, nationalCode },
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
    const evantValue = e.target.value;

    setValue({ ...value, [name]: evantValue });
  };

  return (
    <>
      <h4>اطلاعات شخصی</h4>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className={styles.formContainer}>
          <input
            {...register("firstName")}
            placeholder="نام"
            name="firstName"
            value={value.firstName === firstName ? firstName : value.firstName}
            onChange={changeHandler}
          />
          {!!errors?.firstName && <span>{errors?.firstName?.message}</span>}
          <input
            {...register("lastName")}
            placeholder="نام خانوادگی"
            name="lastName"
            value={value.lastName === lastName ? lastName : value.lastName}
            onChange={changeHandler}
          />
          {!!errors?.lastName && <span>{errors?.lastName?.message}</span>}
          <input
            {...register("nationalCode")}
            placeholder="کد ملی"
            name="nationalCode"
            value={
              value.nationalCode === nationalCode
                ? nationalCode
                : value.nationalCode
            }
            onChange={changeHandler}
          />
          {!!errors?.nationalCode && (
            <span>{errors?.nationalCode?.message}</span>
          )}
          <div>
            <DatePicker
              onChange={(e) =>
                setValue({
                  ...value,
                  birthDate: e.value.toISOString().substring(0, 10),
                })
              }
              accentColor="#28A745"
              round="x2"
              defaultValue={value.birthDate}
            />
          </div>
          <select
            {...register("gender")}
            name="gender"
            onChange={changeHandler}
            defaultValue={value.gender}
          >
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
