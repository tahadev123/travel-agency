import CheckoutContent from "../organisms/CheckoutContent";

async function Checkout({ id }) {
  const res = await fetch(`http://localhost:6500/tour/${id}`);
  const data = await res.json();

  return (
    <div className="page-content">
      <CheckoutContent data={JSON.parse(JSON.stringify(data))} />
    </div>
  );
}

export default Checkout;
