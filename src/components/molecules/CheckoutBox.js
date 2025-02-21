import CheckoutBoxContent from "../atoms/CheckoutPageAtoms/CheckoutBoxContent";

import styles from "@/styles/moleculesStyles/CheckoutBox.module.css";

function CheckoutBox({ data, form }) {
  return (
    <>
      <div className={styles.checkoutBox}>
        <CheckoutBoxContent data={data} form={form} />
      </div>
    </>
  );
}

export default CheckoutBox;
