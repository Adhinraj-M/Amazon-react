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
import { useEffect, useState } from "react";
import DiscoverProduct from "../Components/SmallScreenComponents/DiscoverProduct";
import Footer from "../Components/SmallScreenComponents/Footer";
import TopBar from "../Components/SmallScreenComponents/TopBar";

function SmallHome() {
  const [toggle, setToggle] = useState<boolean>(false);
  const [showTopBar, setShowTopBar] = useState<boolean>(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

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
    <div className="bg-gray-200 overflow-x-hidden min-h-screen relative min-large:hidden ">
      <Header toggleBtn={handleToggle} />
        {showTopBar && <TopBar toggleBtn={handleToggle} />}
      <Address />
      <CategorySmall />
      <HeroCarousel />
      <DashboardCategory />
      <AmazonOffer />
      <CubicList products={ProductEmergingBusiness} />
      <CuratedCardList />
      <CubicList products={productLocalStore} />
      {toggle && <SideMenuBar toggleBtn={handleToggle} toggle={toggle} />}
      <DiscoverProduct />
      <Footer />
    </div>
  );
}

export default SmallHome;


