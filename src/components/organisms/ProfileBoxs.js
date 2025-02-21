import AccountInformation from "../molecules/AccountInformation";
import PersonalInformation from "../molecules/PersonalInformation";
import BankAccountInformation from "../molecules/BankAccountInformation";
import styles from "@/styles/organismsStyles/ProfileBoxs.module.css";

function ProfileBoxs({ data, setIsShowEditForm, isShowEditForm, payment }) {
  return (
    <>
      <div className={styles.boxs}>
        <AccountInformation
          isShowEditForm={isShowEditForm}
          setIsShowEditForm={setIsShowEditForm}
          mobile={data.data.mobile}
          email={data.data.email}
        />
        <PersonalInformation
          isShowEditForm={isShowEditForm}
          setIsShowEditForm={setIsShowEditForm}
          data={data}
        />
        <BankAccountInformation
          isShowEditForm={isShowEditForm}
          setIsShowEditForm={setIsShowEditForm}
          payment={payment}
        />
      </div>
    </>
  );
}

export default ProfileBoxs;
