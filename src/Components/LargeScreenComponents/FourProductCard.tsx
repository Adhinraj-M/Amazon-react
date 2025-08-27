import { Link } from "react-router-dom";
import type { HeroProductDesktopType } from "../../Types/DeskCategories";

type fourProductType={
  fourProduct:HeroProductDesktopType[]
}

function FourProductCard({fourProduct}:fourProductType) {

  return (
    <div className="basis-1/3 grow shrink-0 h-105 min-w-1/3 order-1 px-2.5  min-1240:flex-[1_0_290px] min-1240:min-w-[290px]">
      <div className="bg-white h-full relative my-0 p-[20px_20px_13px_20px] flex flex-col ">
        <h2 className="text-[21px] leading-[27.3px] font-fontBold mb-0.5 text-[#0f1111] pb-1">
          Keep shopping for
        </h2>
        <div className="grid  flex-[1] gap-[2px_6px] grid-cols-[repeat(auto-fit,_minmax(40%,_1fr))] mb-px">
          {fourProduct[0].product.length >0 &&
            fourProduct[0].product.map((item, index) => {
              return (
                <Link to={`/productList/${fourProduct[0].url}`}
                  className="flex flex-col  h-full flex-wrap"
                  
                  key={index} >
                  <div className="grid bg-[rgba(0,0,0,.03)] flex-[1] gap-[6px_8px] grid-cols-[repeat(auto-fit,_minmax(40%,_1fr))] p-1.5 !mb-1">
                    <div className="h-full min-h-[85px] relative">
                      <img
                        className="absolute m-auto left-0 right-0 bottom-0 top-0 max-w-full max-h-full h-full object-contain mix-blend-multiply"
                        src={item.img.src}
                        alt={item.img.alt}
                      />
                    </div>
                  </div>
                  <div className="pr-1 !mb-1 w-full">
                    <span className="leading-[18.2px] block max-h-[18.2px] text-[#0f1111] text-sm mb-[-2.4px] relative w-full overflow-hidden">
                      {item.name}
                    </span>
                    <span className="text-[13px] text-[#565959]">
                      {item.viewsCount} viewed
                    </span>
                  </div>
                </Link>
              );
            })}
        </div>

        <span className="leading-[19px] text-[#2162a1] text-[13px]  ">
          View your browsing history
        </span>
      </div>
    </div>
  );
}

export default FourProductCard;
