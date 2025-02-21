import HomePage from "@/components/templates/HomePage";
import { serverFetch } from "@/services/http";

export default async function Home({ searchParams }) {
  let data = await serverFetch("tour", searchParams, { cache: "no-store" });

  return (
    <div>
      <HomePage data={data} />
    </div>
  );
}
