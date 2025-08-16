import Address from "../Components/SmallScreenComponents/Address";
import AmazonOffer from "../Components/SmallScreenComponents/AmazonOffer";
import CategorySmall from "../Components/SmallScreenComponents/CategorySmall";
import DashboardCategory from "../Components/SmallScreenComponents/DashboardCategory";
import Header from "../Components/SmallScreenComponents/Header";
import HeroCarousel from "../Components/SmallScreenComponents/HeroCarousel";
import CubicList from "../Components/SmallScreenComponents/CubicList";
import CuratedCardList from "../Components/SmallScreenComponents/CuratedCardList";
import { ProductEmergingBusiness, productLocalStore } from "../Types/product";
import SideMenuBar from "../Components/SmallScreenComponents/sideMenuComponents/SideMenuBar";
import { useContext, useEffect, useState } from "react";
import DiscoverProduct from "../Components/SmallScreenComponents/DiscoverProduct";
import Footer from "../Components/SmallScreenComponents/Footer";
import TopBar from "../Components/SmallScreenComponents/TopBar";
import { ToggleContext } from "../Context/toggleContext";

function SmallHome() {
  const [showTopBar, setShowTopBar] = useState<boolean>(false);

  const {handleSideBar,showSideBar} = useContext(ToggleContext)
  
  useEffect(() => {
    const handleScrollY = () => {
      if (window.scrollY > 50) {
        setShowTopBar(true);
      } else {
        setShowTopBar(false);
      }
    };

    window.addEventListener("scroll", handleScrollY);

    return () => window.removeEventListener("scroll", handleScrollY);
  }, []);

  return (
    <div className="bg-gray-200  min-h-screen relative min-large:hidden ">
      <Header toggleBtn={handleSideBar} />
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
        {showTopBar && <TopBar toggleBtn={handleSideBar} />}
      <Address />
      <CategorySmall />
      <HeroCarousel />
      <DashboardCategory />
      <AmazonOffer />
      <CubicList products={ProductEmergingBusiness} />
      <CuratedCardList />
      <CubicList products={productLocalStore} />
      {showSideBar && <SideMenuBar toggleBtn={handleSideBar} toggle={showSideBar} />}
      <DiscoverProduct />
      <Footer />

    </div>
  );
}

export default SmallHome;

