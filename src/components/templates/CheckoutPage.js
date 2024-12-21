"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import CheckoutContent from "../organisms/CheckoutContent";

function Checkout() {
  const query = usePathname();
  const id = query.split("/")[2];

  const [data, setData] = useState({});
  const [form, setForm] = useState({
    fullName: "",
    nationalCode: "",
    birthDate: "",
    gender: "",
  });

  useEffect(() => {
    document.body.style.backgroundColor = "#f3f3f3";

    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:6500/tour/${id}`);
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    return () => {
      document.body.style.backgroundColor = "#fff";
    };
  }, [id]);

  return (
    <div className="page-content">
      <CheckoutContent form={form} setForm={setForm} data={data} />
    </div>
  );
}

export default Checkout;
