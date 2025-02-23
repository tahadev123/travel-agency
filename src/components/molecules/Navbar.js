import Link from "next/link";
import HeaderLi from "../atoms/HomePageAtoms/HeaderLi";
import Logo from "../atoms/HomePageAtoms/Logo";
import RegisterAndLoginButton from "../atoms/HomePageAtoms/RegisterAndLoginButton";
import styles from "@/styles/moleculesStyles/Navbar.module.css";

function Navbar({ pathname }) {
  return (
    <>
      <div className={styles.container}>
        <div>
          <Logo />
          <HeaderLi pathname={pathname} />
        </div>
        <RegisterAndLoginButton />
      </div>
      <div className="borderTop"></div>
    </>
  );
}

export default Navbar;
