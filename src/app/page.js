import HomePage from "@/components/templates/HomePage";
import CheckInternet from "../core/utils/CheckInternet";

export default async function Home() {
  return (
    <div>
      <HomePage />

      <CheckInternet />
    </div>
  );
}
