import Address from "../../Components/SmallScreenComponents/Home/Address";
import AmazonOffer from "../../Components/SmallScreenComponents/Home/AmazonOffer";
import { useContext } from "react";
import { ToggleContext } from "../../Context/toggleContext";
import Footer from "../../Components/SmallScreenComponents/Home/Footer";
import DiscoverProduct from "../../Components/SmallScreenComponents/Product/DiscoverProduct";
import CuratedCardList from "../../Components/SmallScreenComponents/Home/CuratedCardList";
import CubicList from "../../Components/SmallScreenComponents/Home/CubicList";
import HeroCarousel from "../../Components/SmallScreenComponents/Home/HeroCarousel";
import Header from "../../Components/SmallScreenComponents/Home/Header";
import CategorySmall from "../../Components/SmallScreenComponents/Home/CategorySmall";
import DashboardCategory from "../../Components/SmallScreenComponents/DashboardCategory";

function SmallHome() {
  const { carProduct } = useContext(ToggleContext);

  return (
    <div className="bg-gray-200  min-h-screen relative min-large:hidden ">
      <Header />
      <div className="flex h-[45px] overflow-x-scroll pt-3 w-full bg-[#232f3e] overflow-hidden">
        <ul className="contents list-none ">
          <li className="relative m-[0px_0px_20px_15px] pr-[3px] leading-[15px] text-[15px] font-normal text-white">
            Category
            <span className="absolute top-[-14px] left-0 text-[11px] text-white">
              Shop By
            </span>
          </li>

          <li className="m-[0px_0px_20px_15px] pr-[3px] leading-[15px] text-[15px] font-normal text-white">
            Deals
          </li>
          <li className="m-[0px_0px_20px_15px] pr-[3px] leading-[15px] text-[15px] font-normal text-white">
            Sell
          </li>
        </ul>
      </div>

      <Address />
      <CategorySmall />
      <HeroCarousel />
      <DashboardCategory />
      <AmazonOffer />
      <CubicList products={carProduct} />
      <CuratedCardList />
      <CubicList products={carProduct} />
      <DiscoverProduct />
      <Footer/>
    </div>
  );
}

export default SmallHome;
