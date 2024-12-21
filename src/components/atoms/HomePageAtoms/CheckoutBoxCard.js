import Link from "next/link";
import styles from "../../../styles/atomsStyles/CheckoutBoxCard.module.css";

function CheckoutBoxCard({ price, id }) {
  return (
    <div className={styles.checkoutBox}>
      <p>
        <span>{`${price.toLocaleString("fa-IR")}٬۰۰۰`}</span>
        <span> تومان</span>
      </p>
      <button><Link href={`/tour-details/${id}`}>رزرو</Link></button>
    </div>
  );
}

export default CheckoutBoxCard;
