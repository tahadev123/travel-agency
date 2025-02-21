import Banner from "../atoms/HomePageAtoms/Banner";
import MainSearchSite from "../organisms/MainSearchSite";
import Cards from "../organisms/Cards";
import BuyByPhoneBanner from "../organisms/BuyByPhoneBanner";
import WhyTorino from "../organisms/WhyTorino";
import ServicesBox from "../organisms/ServicesBox";

export default async function HomePage({ data }) {
  return (
    <div className="page-content">
      <Banner />
      <MainSearchSite />
      {data ? <Cards data={data} /> : null}
      <BuyByPhoneBanner />
      <WhyTorino />
      <ServicesBox />
    </div>
  );
}
