import CheckoutFormContent from "../atoms/CheckoutPageAtoms/CheckoutFormContent";

import styles from "../../styles/moleculesStyles/CheckoutForm.module.css"

function CheckoutForm({ form, setForm }) {
  return (
    <>
      <div className={styles.checkoutForm}>
        <CheckoutFormContent form={form} setForm={setForm} />
      </div>
    </>
  );
}

export default CheckoutForm;
