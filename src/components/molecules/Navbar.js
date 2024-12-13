import HeaderLi from "../atoms/HeaderLi";
import Logo from "../atoms/Logo";
import RegisterAndLoginButton from "../atoms/RegisterAndLoginButton";
import styles from "../../styles/Navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <Logo />
          <HeaderLi />
        </div>
        <RegisterAndLoginButton />
      </div>
      <div className="borderTop"></div>
    </>
  );
}

export default Navbar;
