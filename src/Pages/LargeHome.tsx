import DeskAdds from "../Components/LargeScreenComponents/DeskAdds";
import DeskAllProductCard from "../Components/LargeScreenComponents/DeskAllProductCard";
import DeskCarousel from "../Components/LargeScreenComponents/DeskCarousel";
import DeskFooter from "../Components/LargeScreenComponents/DeskFooter";
import DeskHeader from "../Components/LargeScreenComponents/DeskHeader";
import FourProductCard from "../Components/LargeScreenComponents/FourProductCard";
import Pagination from "../Components/LargeScreenComponents/Pagination";
import ProductCardCarousel from "../Components/LargeScreenComponents/ProductCardCarousel";
import SingleCategoryProduct from "../Components/LargeScreenComponents/SingleCategoryProduct";
import {
  BeautyCategoryProducts,
  HeroDeskProduct,
  HomeKitchenProduct,
  MobileCategoryProduct,
} from "../Types/DeskCategories";

function LargeHome() {
  return (
    <div className="hidden min-large:block bg-[#E3E6E6]">
      <DeskHeader />
      <DeskCarousel />
      <DeskAllProductCard />
      <div className="max-w-[1480px] 2xl:m-auto">
        <ProductCardCarousel
          products={HomeKitchenProduct}
          categoryTitle="Up to 80% off | Home, kitchen & outdoors"
        />
        <hr className="h-5 border-none m-0 block" />
        <ProductCardCarousel
          products={MobileCategoryProduct}
          categoryTitle="Up to 40% off | Best flagship phones on sale"
        />

        <div className="p-[0_10px_0] relative !mb-0">
          <div className="max-w-[1219px] min-1240:max-w-[1480px] m-[0_auto] overflow-hidden p-[20px_0] min-w-[919px] flex flex-row  text-[13px] leading-[19px] mb-0">
            <FourProductCard fourProduct={HeroDeskProduct} />
            <FourProductCard fourProduct={HeroDeskProduct} />
            <FourProductCard fourProduct={HeroDeskProduct} />
            <SingleCategoryProduct />
          </div>
        </div>

        <ProductCardCarousel
          products={BeautyCategoryProducts}
          categoryTitle="Starting ₹99 + 20% cashback on first order | Beauty & makeup"
        />

        <div className="p-[0_10px_0] relative !mb-0">
          <div className="max-w-[1219px] min-1240:max-w-[1480px] m-[0_auto] overflow-hidden p-[20px_0] min-w-[919px] flex flex-row  text-[13px] leading-[19px] mb-0">
            <FourProductCard fourProduct={HeroDeskProduct} />
            <FourProductCard fourProduct={HeroDeskProduct} />
            <FourProductCard fourProduct={HeroDeskProduct} />
            <SingleCategoryProduct />
          </div>
        </div>
      </div>

      <DeskAdds />

      <div className="p-[0_10px_0] relative !mb-0">
        <div className="max-w-[1219px] min-1240:max-w-[1480px] m-[0_auto] overflow-hidden pb-5 min-w-[919px] flex flex-row  text-[13px] leading-[19px] mb-0">
          <FourProductCard fourProduct={HeroDeskProduct} />
          <FourProductCard fourProduct={HeroDeskProduct} />
          <FourProductCard fourProduct={HeroDeskProduct} />
          <SingleCategoryProduct />
        </div>
      </div>
      <Pagination/>
      <DeskFooter/>
    </div>
  );
}

export default LargeHome;
