import TourDetailsBox from "../organisms/TourDetailsBox";

async function TourDetails({ id }) {
  const res = await fetch(`http://localhost:6500/tour/${id}`);
  const data = await res.json();

  return (
    <div className="page-content">
      <TourDetailsBox data={JSON.parse(JSON.stringify(data))} id={id} />
    </div>
  );
}

export default TourDetails;
