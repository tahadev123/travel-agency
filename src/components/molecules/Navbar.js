import HeaderLi from "../atoms/HomePageAtoms/HeaderLi";
import Logo from "../atoms/HomePageAtoms/Logo";
import RegisterAndLoginButton from "../atoms/HomePageAtoms/RegisterAndLoginButton";
import styles from "../../styles/moleculesStyles/Navbar.module.css";

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
