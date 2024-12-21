import CheckoutBox from "../molecules/CheckoutBox";
import CheckoutForm from "../molecules/CheckoutForm";

import styles from "../../styles/organismsStyles/CheckoutContent.module.css"

function CheckoutContent({ form, setForm, data }) {
  return (
    <>
      <div className={styles.checkout}>
        <CheckoutForm form={form} setForm={setForm} />
        <CheckoutBox data={data} form={form} />
      </div>
    </>
  );
}

export default CheckoutContent;
