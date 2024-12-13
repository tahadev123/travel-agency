import styles from "../../styles/CheckoutBoxCard.module.css";

function CheckoutBoxCard({ price }) {
  return (
    <div className={styles.checkoutBox}>
      <p>
        <span>{`${price.toLocaleString("fa-IR")}٬۰۰۰`}</span>
        <span> تومان</span>
      </p>
      <button>رزرو</button>
    </div>
  );
}

export default CheckoutBoxCard;
