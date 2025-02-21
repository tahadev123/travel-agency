import TourDetails from "@/components/templates/TourDetailsPage";

function TourDetailsPage({ params }) {
  return (
    <div>
      <TourDetails id={params.tourId} />
    </div>
  );
}

export default TourDetailsPage;
