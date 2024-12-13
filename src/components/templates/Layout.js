import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div style={{ minHeight: "780px" }}>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
