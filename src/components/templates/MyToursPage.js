"use client"
import { useGetUserTours } from "@/core/services/queries";
import MyTours from "../organisms/MyTours";

function MyToursPage() {
  const { data } = useGetUserTours();

  if (!data) return;

  return (
    <>
      <MyTours toursData={data} />
    </>
  );
}

export default MyToursPage;
