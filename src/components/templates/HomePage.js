import Banner from "../atoms/Banner";
import MainSearchSite from "../organisms/MainSearchSite";
import Cards from "../organisms/Cards";
import BuyByPhoneBanner from "../organisms/BuyByPhoneBanner";
import WhyTorino from "../organisms/WhyTorino";
import ModalContainer from "@/partials/containers/ModalContainer";
import AuthForm from "./authForm";

export default function HomePage({ data }) {
  return (
    <>
      <Banner />
      <MainSearchSite />
      <Cards data={data} />
      <BuyByPhoneBanner />
      <WhyTorino />
      <AuthForm />
      <ModalContainer />
    </>
  );
}
