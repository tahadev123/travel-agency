import AccountContent from "../atoms/ProfileAtoms/AccountContent";
import styles from "../../styles/moleculesStyles/AccountInformation.module.css";

function AccountInformation({
  isShowEditForm,
  setIsShowEditForm,
  mobile,
  email,
}) {
  return (
    <>
      <div className={styles.accountInformation}>
        <AccountContent
          isShowEditForm={isShowEditForm}
          setIsShowEditForm={setIsShowEditForm}
          mobile={mobile}
          email={email}
        />
      </div>
    </>
  );
}

export default AccountInformation;
