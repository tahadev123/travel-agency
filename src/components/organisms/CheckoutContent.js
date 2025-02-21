"use client"
import { useState } from "react";
import CheckoutBox from "../molecules/CheckoutBox";
import CheckoutForm from "../molecules/CheckoutForm";

import styles from "@/styles/organismsStyles/CheckoutContent.module.css";

function CheckoutContent({ data }) {
  const [form, setForm] = useState({
    fullName: "",
    nationalCode: "",
    birthDate: "",
    gender: "",
  });

  return (
    <>
      <div className={styles.checkout}>
        <CheckoutForm form={form} setForm={setForm} />
        <CheckoutBox data={data} form={form} />
      </div>
    </>
  );
}

export default CheckoutContent;
