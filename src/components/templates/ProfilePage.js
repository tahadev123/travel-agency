"use client";
import { useState } from "react";
import { useGetUserData } from "@/services/queries";
import ProfileBoxs from "../organisms/ProfileBoxs";

function ProfilePage() {
  const { data } = useGetUserData();
  const [isShowEditForm, setIsShowEditForm] = useState({
    AccountInformationForm: false,
    PersonalInformationForm: false,
    BankAccountForm: false,
  });

  if (!data) return;

  return (
    <ProfileBoxs
      data={data}
      isShowEditForm={isShowEditForm}
      setIsShowEditForm={setIsShowEditForm}
      payment={data.data.payment}
    />
  );
}

export default ProfilePage;
