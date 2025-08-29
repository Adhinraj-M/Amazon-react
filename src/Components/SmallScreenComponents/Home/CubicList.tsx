
import { Link } from "react-router-dom";
import type { CarWashProduct } from "../../Types/DeskCategories";

type cubicProductType={
  products:CarWashProduct[] | undefined
}


function CubicList({products}:cubicProductType) {
  
 
  return (
    <div className="mt-0.5 mb-0.5 bg-white  p-[12px_15px]">
      <h3 className=" pb-2 text-lg  font-fontBold leading-[23.4px]  text-black">
        Up to 70% off | Trending products from Emerging Businesses
      </h3>
      <div className="grid gap-2 grid-cols-3">
        {products &&
          products?.map((item) => {
            return (
              <Link to={`/productInfo/${item.id}`}
                key={item.id}
                className="relative before:content-[''] before:block before:h-0 before:pb-[100%] after:bg-[#0f1111] after:rounded-[4px] after:content-[''] after:h-full after:opacity-[.03] after:absolute after:top-0 after:w-full">
                <img
                  src={item?.img[0]}
                  alt="amzon-products"
                  className="h-full object-contain w-full p-2  bottom-0 left-0 max-h-full max-w-full absolute right-0 top-0"
                />
              </Link>
            );
          })}
      </div>
      <p className="text-[#2162a1] text-[15px] leading-[19.5px] pt-[13px]">See more</p>
    </div>
  );
}

export default CubicList;
