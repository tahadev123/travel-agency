import BankAccountContent from "../atoms/ProfileAtoms/BankAccountContent";
import styles from "../../styles/moleculesStyles/BankAccountInformation.module.css";
import BankAccountForm from "../organisms/BankAccountForm";

function BankAccountInformation({
  isShowEditForm,
  setIsShowEditForm,
  payment,
}) {
  return (
    <>
      <div className={styles.bankAccountInformation}>
        {isShowEditForm ? (
          <BankAccountForm setIsShowEditForm={setIsShowEditForm} />
        ) : (
          <BankAccountContent
            setIsShowEditForm={setIsShowEditForm}
            payment={payment}
          />
        )}
      </div>
    </>
  );
}

export default BankAccountInformation;
