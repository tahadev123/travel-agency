"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useAddToCart } from "@/services/mutations";
import { convertToPersianNumber } from "@/utils/convertToPersianNumber";
import { calculateTripTime } from "@/utils/formatDate";

import mapIcon from "@/assets/icons/map.svg";
import medalStarIcon from "@/assets/icons/medal-star.svg";
import userTickIcon from "@/assets/icons/user-tick.svg";
import styles from "@/styles/atomsStyles/ImageAndTitle.module.css";

function ImageAndTitle({ data, id }) {
  const router = useRouter();

  const { mutate } = useAddToCart();

  const addHandler = () => {
    mutate(
      id,
      {
        onSuccess: (data) => {
          toast.success(data.data.message);
          router.push(`/checkout/${id}`);
        },
        onError: (error) => {
          toast.error(error.message);
          console.log(error);
        },
      }
    );
  };

  return (
    <>
      <div className={styles.tourImage}>
        <img src={data.image} alt="tourImage" />
      </div>
      <div className={styles.tourDetails}>
        <h2>{data.title}</h2>
        <p className={styles.startAndEnd}>
          {`${convertToPersianNumber(
            calculateTripTime(data.startDate, data.endDate)
          )} روز و ${convertToPersianNumber(
            calculateTripTime(data.startDate, data.endDate) - 1
          )} شب`}
        </p>
        <div className={styles.options}>
          <p className={styles.option}>
            <Image src={userTickIcon} alt="userTickIcon" />
            تور لیدر از مبدا
          </p>
          <p className={styles.option}>
            <Image src={mapIcon} alt="mapIcon" />
            برنامه سفر
          </p>
          <p className={styles.option}>
            <Image src={medalStarIcon} alt="medalStarIcon" />
            تضمین کیفیت
          </p>
        </div>
        <div className={styles.checkout}>
          <p>
            {new Intl.NumberFormat("fa-IR").format(data.price)}٬۰۰۰{" "}
            <span>تومان</span>
          </p>
          <button onClick={addHandler}>رزرو و خرید</button>
        </div>
      </div>
    </>
  );
}

export default ImageAndTitle;
