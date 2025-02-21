import BankAccountContent from "../atoms/ProfileAtoms/BankAccountContent";
import BankAccountForm from "../organisms/BankAccountForm";

import styles from "@/styles/moleculesStyles/BankAccountInformation.module.css";

function BankAccountInformation({
  isShowEditForm,
  setIsShowEditForm,
  payment,
}) {
  return (
    <>
      <div className={styles.bankAccountInformation}>
        {isShowEditForm.BankAccountForm ? (
          <BankAccountForm
            setIsShowEditForm={setIsShowEditForm}
            isShowEditForm={isShowEditForm}
          />
        ) : (
          <BankAccountContent
            setIsShowEditForm={setIsShowEditForm}
            isShowEditForm={isShowEditForm}
            payment={payment}
          />
        )}
      </div>
    </>
  );
}

export default BankAccountInformation;
