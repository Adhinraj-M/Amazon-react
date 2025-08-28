import { useContext, useEffect, useState } from "react";
import DeskHeader from "../Components/LargeScreenComponents/DeskHeader";
import NavDesk from "../Components/LargeScreenComponents/NavDesk";
import { ToggleContext } from "../Context/toggleContext";
import DeskFooter from "../Components/LargeScreenComponents/DeskFooter";
import ProductImages from "../Components/LargeScreenComponents/ProductDetails/ProductImages";
import ProductDataRight from "../Components/LargeScreenComponents/ProductDetails/ProductDataRight";
import ProductDetailed from "../Components/LargeScreenComponents/ProductDetails/ProductDetailed";
import type { CategoryProdut } from "../Types/product";
import { useParams } from "react-router-dom";
import { ProductListContext } from "../Context/ProductListContext";

function LargeProductDetails() {
  const { handleSideBar } = useContext(ToggleContext);

  const currentPath: string[] = [
    "Clothing & Accessories",
    "›",
    "Men",
    "›",
    "SportsWear",
    "›",
    "Sports-T-Shirts & Jerseys",
    "›",
    "T-Shirts",
  ];

  const amazonFashions: string[] = [
    "https://m.media-amazon.com/images/G/31/IMG17/Fashion/January/Ingresses/Subnav/Amazon-fashion-logo._CB485923938_.png",
    "Women",
    "Men",
    "Kids",
    "Bags & Luggage",
    "Sportswear",
    "Sales & Deals",
  ];

    const { cateProduct } = useContext(ProductListContext);
  
   const [productData, setProductData] = useState<CategoryProdut[] >([]);
  
    const params = useParams();
  
    useEffect(() => {
      const filtered = cateProduct.filter((item) => item.id === params.productId);
  
      setProductData(filtered);
    }, [cateProduct,params.productId]);

    console.log("productData",productData)

  return (
    <div className="min-large:block hidden">
      <DeskHeader stickHeader={false} />
      <NavDesk sideBar={handleSideBar} />

      {/* amazon fashion */}
      <div className="flex justify-between h-[50px] bg-white shadow-[0_0_1px_#ddd] z-[1] relative p-[0_9px_0_15px] overflow-hidden border-t border-t-[rgba(0,0,0,.17)] border-b border-b-[rgba(0,0,0,.1)] whitespace-nowrap">
        {amazonFashions.map((item, index) => {
          return (
            <a
              key={index}
              href="#"
              className="flex-[0_0_auto] inline-block relative text-center h-12 leading-12.5 p-[0_13px] float-none  align-middle text-xs text-[#333] "
            >
              {index === 0 ? (
                <img
                  src={item}
                  alt="amazon fashion"
                  className="h-12.5 align-baseline w-auto pt-[5px]"
                />
              ) : (
                `${item}`
              )}
            </a>
          );
        })}
      </div>

      <div className="p-[0_8px]  min-w-[1000px] max-w-[1500px] m-[0_auto]  ">
        <div className="p-[14px_0px] h-10.5 mb-2.5">
          <ul className="flex text-xs text-[#565959] gap-1">
            {currentPath.map((item, i) => {
              return <li key={i}>{item}</li>;
            })}
          </ul>
        </div>

        <div className=" mb-3 w-full h-[1500px] ">
          {/* Product images  */}
          <ProductImages productImg={productData[0]?.product_img}/>
          <div className="float-right !w-[52%] relative  overflow-visible flex ">
            {/* middle section  */}
            <ProductDetailed product={productData}/>
            {/* right add to cart  */}
            <ProductDataRight product={productData} />
          </div>
        </div>
      </div>

      <DeskFooter />
    </div>
  );
}

export default LargeProductDetails;
