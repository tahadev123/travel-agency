import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useCheckout } from "@/core/services/mutations";
import { convertToPersianNumber } from "@/core/utils/convertToPersianNumber";
import { calculateTripTime } from "@/core/utils/formatDate";
import { isValidNationalCode } from "@/core/utils/validation";

import styles from "../../../styles/atomsStyles/CheckoutBoxContent.module.css";

function CheckoutBoxContent({ data, form }) {
  const router = useRouter();

  const { mutate } = useCheckout();

  const checkoutHandler = () => {
    if (
      !form.fullName ||
      !form.nationalCode ||
      !form.birthDate ||
      !form.gender
    ) {
      toast.error("لطفا همه فیلد هارو رو پر کنید");
      return;
    }

    if (isValidNationalCode(form.nationalCode) === false) {
      toast.error("کد ملی معتبر نیست");
      return;
    }

    mutate(form, {
      onSuccess: (data) => {
        toast.success(data.data.message);
        router.push("/");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <>
      <div className={styles.checkoutBoxTitle}>
        <h2>{data.title}</h2>
        <p>
          {`${convertToPersianNumber(
            calculateTripTime(data.startDate, data.endDate)
          )} روز و ${convertToPersianNumber(
            calculateTripTime(data.startDate, data.endDate) - 1
          )} شب`}
        </p>
      </div>
      <div className={styles.checkoutBoxPrice}>
        <h4>قیمت نهایی</h4>
        <p>
          {new Intl.NumberFormat("fa-IR").format(data.price)}٬۰۰۰{" "}
          <span>تومان</span>
        </p>
      </div>
      <div className={styles.checkoutBoxBtn}>
        <button onClick={checkoutHandler}>ثبت و خرید نهایی</button>
      </div>
    </>
  );
}

export default CheckoutBoxContent;
