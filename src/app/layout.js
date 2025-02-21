import { headers } from "next/headers";
import Layout from "@/components/templates/Layout";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";
import { ShowModalContext } from "@/context/ShowModalContext";
import { ThemeProvider } from "@/context/ThemeProvider";
import AuthForm from "@/components/templates/AuthForm";
import ModalContainer from "@/containers/ModalContainer";
import CheckInternet from "@/utils/CheckInternet";
import { Toaster } from "react-hot-toast";

import "@/styles/globals.css";

export const metadata = {
  title: "صفحه اصلی | تورینو",
  description: "سایت فروش تور های تفریحی داخلی و خارجی",
};

function RootLayout({ children }) {
  const pathname = headers().get("x-pathname");
  
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ThemeProvider>
          <div>
            <TanstackQueryProvider>
              <ShowModalContext>
                <Layout pathname={pathname}>
                  {children}
                  <AuthForm />
                  <ModalContainer />
                </Layout>
              </ShowModalContext>
            </TanstackQueryProvider>
            <Toaster />
          </div>
        </ThemeProvider>
        <CheckInternet />
      </body>
    </html>
  );
}

export default RootLayout;
