"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const pathname = usePathname();
  const [bgColor, setBgColor] = useState("#fff");

  const isTourDetailsPage = pathname.startsWith("/tour-details");
  const isCheckoutPage = pathname.startsWith("/checkout"); 

  useEffect(() => {
    if (isTourDetailsPage || isCheckoutPage) {
      setBgColor("#f3f3f3");
    } else {
      setBgColor("#fff");
    }
  }, [pathname]);

  return (
    <ThemeContext.Provider value={{ bgColor }}>
      <div style={{ backgroundColor: bgColor }}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
