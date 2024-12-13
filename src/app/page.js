import HomePage from "@/components/templates/HomePage";
import CheckInternet from "../core/utils/CheckInternet";
import api from "@/core/config/api";

async function getTour() {
  const res = await api.get("/tour");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response?.status}`);
  }

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
