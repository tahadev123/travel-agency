import HomePage from "@/components/templates/HomePage";
import CheckInternet from "../core/utils/CheckInternet";

async function getTour() {
  const res = await fetch("http://localhost:6500/tour");
  return res.json();
}

export default async function Home() {
  const data = await getTour();
  const sliceData = data.slice(0, 6);

  return (
    <div>
      <HomePage data={sliceData} />

      <CheckInternet />
    </div>
  );
}
