import Banner from "../atoms/HomePageAtoms/Banner";
import MainSearchSite from "../organisms/MainSearchSite";
import Cards from "../organisms/Cards";
import BuyByPhoneBanner from "../organisms/BuyByPhoneBanner";
import WhyTorino from "../organisms/WhyTorino";
import ServicesBox from "../organisms/ServicesBox";

export default function HomePage({ data }) {
  return (
    <div className="page-content">
      <Banner />
      <MainSearchSite />
      <Cards data={data} />
      <BuyByPhoneBanner />
      <WhyTorino />
      <ServicesBox />
    </div>
  );
}
