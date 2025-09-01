
import Address from "../../Components/SmallScreenComponents/Home/Address";
import Sponsored from "../../Components/SmallScreenComponents/Home/Sponsored";
import Footer from "../../Components/SmallScreenComponents/Home/Footer";
import ProductData from "../../Components/SmallScreenComponents/Product/ProductData";
import Header from "../../Components/SmallScreenComponents/Home/Header";

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





