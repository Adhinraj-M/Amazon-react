
import Header from "../../Components/SmallScreenComponents/Header";
import Address from "../../Components/SmallScreenComponents/Address";
import Sponsored from "../../Components/SmallScreenComponents/Sponsored";
import ProductData from "../../Components/SmallScreenComponents/ProductData";
import Footer from "../../Components/SmallScreenComponents/Footer";

function SmallProductDetails() {

  return (
    <div className="min-large:hidden">
      <Header />
      <Address />
      <Sponsored/>

      {/* product data UI */}

      <ProductData/>
      <Footer/>
    </div>
  );
}

export default SmallProductDetails;



