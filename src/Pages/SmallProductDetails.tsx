import { useContext } from "react";
import Header from "../Components/SmallScreenComponents/Header";
import { ToggleContext } from "../Context/toggleContext";
import Address from "../Components/SmallScreenComponents/Address";
import Sponsored from "../Components/SmallScreenComponents/Sponsored";
import ProductData from "../Components/SmallScreenComponents/ProductData";
import Footer from "../Components/SmallScreenComponents/Footer";

function SmallProductDetails() {
  const { handleSideBar } = useContext(ToggleContext);

  return (
    <div className="min-large:hidden">
      <Header toggleBtn={handleSideBar} />
      <Address />
      <Sponsored/>

      {/* product data UI */}

      <ProductData/>
      <Footer/>
    </div>
  );
}

export default SmallProductDetails;



