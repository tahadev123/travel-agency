"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useGetUserData } from "@/services/queries";
import { Oval } from "react-loader-spinner";

import styles from "@/styles/AuthProvider.module.css";

function AuthProvider({ children }) {
  const router = useRouter();
  const { isPending, data } = useGetUserData();

  useEffect(() => {
    if (!isPending && !data?.data) router.push("/");
  }, [isPending]);

  if (isPending)
    return (
      <div className={styles.container}>
        <Oval
          color="#28a745"
          secondaryColor="#8beaa1"
          strokeWidth={2}
        />
      </div>
    );

  return children;
}

export default AuthProvider;
