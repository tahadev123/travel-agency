import Checkout from "@/components/templates/CheckoutPage";

function CheckoutPage({ params }) {
  return (
    <>
      <Checkout id={params.tourId} />
    </>
  );
}

export default CheckoutPage;
