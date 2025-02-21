import PersonalContent from "../atoms/ProfileAtoms/PersonalContent";
import PersonalInformationForm from "../organisms/PersonalInformationForm";

import styles from "@/styles/moleculesStyles/PersonalInformation.module.css";

function PersonalInformation({ isShowEditForm, setIsShowEditForm, data }) {
  return (
    <>
      <div className={styles.personalInformation}>
        {isShowEditForm.PersonalInformationForm ? (
          <PersonalInformationForm
            setIsShowEditForm={setIsShowEditForm}
            isShowEditForm={isShowEditForm}
          />
        ) : (
          <PersonalContent
            setIsShowEditForm={setIsShowEditForm}
            isShowEditForm={isShowEditForm}
            data={data}
          />
        )}
      </div>
    </>
  );
}

export default PersonalInformation;
