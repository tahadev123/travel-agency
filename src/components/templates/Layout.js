import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div style={{ minHeight: "500px" }}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
