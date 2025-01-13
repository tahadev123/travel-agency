"use client";

import { useGetAllTour } from "@/core/services/queries";
import Banner from "../atoms/HomePageAtoms/Banner";
import MainSearchSite from "../organisms/MainSearchSite";
import Cards from "../organisms/Cards";
import BuyByPhoneBanner from "../organisms/BuyByPhoneBanner";
import WhyTorino from "../organisms/WhyTorino";
import ServicesBox from "../organisms/ServicesBox";

export default function HomePage() {
  const { data } = useGetAllTour();

  if (!data) return;

  const sliceData = data.data.slice(0, 6);

  return (
    <div className="page-content">
      <Banner />
      <MainSearchSite />
      <Cards data={sliceData} />
      <BuyByPhoneBanner />
      <WhyTorino />
      <ServicesBox />
    </div>
  );
}
