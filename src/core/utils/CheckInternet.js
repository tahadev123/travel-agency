"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CheckInternet() {
  const router = useRouter();

  useEffect(() => {
    const handleOffline = () => {
      router.push("/server-error");
    };

    if (!navigator.onLine) {
      handleOffline();
    }

    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("offline", handleOffline);
    };
  }, [router]);

  return null;
}
