import Image from "next/image";
import { setCookie } from "@/utils/cookie";
import { convertToPersianNumber } from "@/utils/convertToPersianNumber";

import profileIcon from "@/assets/icons/profile.svg";
import profile2Icon from "@/assets/icons/profile2.svg";
import logOutIcon from "@/assets/icons/logout.svg";
import styles from "@/styles/organismsStyles/ProfileBox.module.css";
import Link from "next/link";

function ProfileBox({ data }) {
  const deleteHandler = () => {
    setCookie("accessToken", "", 0);
    setCookie("refreshToken", "", 0);
    window.location.reload();
  };

  return (
    <div className={styles.profileBox}>
      <div className={styles.phoneNumberBox}>
        <div>
          <Image src={profileIcon} width={16} height={16} alt="profile-icon" />
        </div>
        <p>{convertToPersianNumber(data.data.mobile)}</p>
      </div>
      <Link href="/profile">
        <div className={styles.DetailsAccountBox}>
          <div>
            <Image
              src={profile2Icon}
              width={20}
              height={20}
              alt="profile2-icon"
            />
          </div>
          <p>اطلاعات حساب کاربری</p>
        </div>
      </Link>
      <div className={styles.deleteAccountBox} onClick={deleteHandler}>
        <div>
          <Image src={logOutIcon} width={20} height={20} alt="logout-icon" />
        </div>
        <p>خروج از حساب کاربری</p>
      </div>
    </div>
  );
}

export default ProfileBox;
