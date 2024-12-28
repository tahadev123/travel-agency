import PersonalContent from "../atoms/ProfileAtoms/PersonalContent";
import styles from "../../styles/moleculesStyles/PersonalInformation.module.css";
import PersonalInformationForm from "../organisms/PersonalInformationForm";

function PersonalInformation({ isShowEditForm, setIsShowEditForm, data }) {
  return (
    <>
      <div className={styles.personalInformation}>
        {isShowEditForm ? (
          <PersonalInformationForm setIsShowEditForm={setIsShowEditForm} />
        ) : (
          <PersonalContent setIsShowEditForm={setIsShowEditForm} data={data} />
        )}
      </div>
    </>
  );
}

export default PersonalInformation;
