import { useContext } from "react";
import Header from "../Components/SmallScreenComponents/Header";
import { ToggleContext } from "../Context/toggleContext";
import Address from "../Components/SmallScreenComponents/Address";
import Sponsored from "../Components/SmallScreenComponents/Sponsored";
import ProductData from "../Components/SmallScreenComponents/ProductData";

function SmallProductDetails() {
  const { handleSideBar } = useContext(ToggleContext);

  return (
    <>
      <Header toggleBtn={handleSideBar} />
      <Address />
      <Sponsored/>

      {/* product data UI  */}

      <ProductData/>
    </>
  );
}

export default SmallProductDetails;

