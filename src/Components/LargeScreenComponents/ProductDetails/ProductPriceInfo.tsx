import type { CategoryProdut } from "../../../Types/product";

type productPriceInfoType={
    product:CategoryProdut | undefined
}



function ProductPriceInfo({product}:productPriceInfoType) {
  return (
    <>
      {product && (
        <div className="p-o m-0 bg-white">
          <div className="w-full">
            <span className="text-[#565959] text-sm leading-5">Colour:</span>
            <span className="text-[#0f1111] text-sm leading-5 font-fontBold">
              {product.colours}
            </span>
          </div>
          <div className="flex pb-[3px]">
            <ul className="flex  text-left">
              <li className="p-[2px_4px] mb-1 align-top inline-block h-fit ">
                <span className="w-[75px] bg-[linear-gradient(0deg,#fff,#fff),_linear-gradient(0deg,#888c8c,#888c8c)] border-[#888c8c] rounded-lg inline-block border overflow-hidden align-middle ">
                  <img
                    src={product.product_img[0]}
                    alt={product.product_title}
                    className="p-1 min-w-[5px] align-top"
                  />
                  <hr className="bg-transparent border-[#d5d9d9] border-t h-px " />
                  <div className="p-[0_4px_4px_4px] h-1/2 text-left">
                    <span className="text-[#0f1111] text-xs block">
                      ₹{product.product_price}.00
                    </span>
                    <div className="line-through text-[#565959] text-[10px] leading-4">
                      ₹{product.product_actual_price}.00
                    </div>
                  </div>
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <span className="text-[#565959] text-sm leading-5">Size:</span>
            <span className="text-[#0f1111] text-sm leading-5 font-fontBold">
              L
            </span>
          </div>

          <div className="flex pb-[3px] ">
            <ol className="flex flex-wrap text-left list-disc">
              {product.sizes.map((item, i) => {
                return (
                  <li
                    key={i}
                    className="mb-1 p-1 m-[0_4px_0_4px] pt-[3px] inline-block min-w-12.5 max-w-[175px] h-[32px] w-[48px] bg-white border border-[#888c8c] cursor-pointer rounded-lg text-sm hover:bg-blue-50"
                  >
                    {item}
                  </li>
                );
              })}
            </ol>
          </div>

          {/* product detailed information  */}
          <h3 className="pb-3 leading-7 pt-1 text-[20px] text-[#0F1111] font-fontBold ">
            Product details
          </h3>
          <div className="mb-5.5 relative">
            <div className="leading-5 mb-2 relative pl-35 flex justify-between  text-sm text-[#0f1111]">
              <span className="w-35 -ml-35 font-fontBold ">
                Material composition
              </span>
              <span className=" pl-[6%] w-full ">{product.material}</span>
            </div>
            <div className="leading-5 mb-2 relative pl-35 flex justify-between text-sm text-[#0f1111]">
              <span className="!w-35 -ml-35 font-fontBold ">Fit type</span>
              <span className=" pl-[6%] w-full ">Regular Fit</span>
            </div>
            <div className="leading-5 mb-2 relative pl-35 flex justify-between text-sm text-[#0f1111]">
              <span className="!w-35 -ml-35 font-fontBold ">Sleeve Type</span>
              <span className=" pl-[6%] w-full ">{product.sleeve_type}</span>
            </div>
            <div className="leading-5 mb-2 relative pl-35 flex justify-between  text-sm text-[#0f1111]">
              <span className="w-35 -ml-35 font-fontBold ">Collar style</span>
              <span className=" pl-[6%] w-full ">Polo Collar</span>
            </div>
            <div className="leading-5 mb-2 relative pl-35 flex justify-between  text-sm text-[#0f1111]">
              <span className="w-35 -ml-35 font-fontBold ">Length</span>
              <span className=" pl-[6%] w-full ">Standard Length</span>
            </div>
            <div className="leading-5 mb-2 relative pl-35 flex justify-between  text-sm text-[#0f1111]">
              <span className="w-35 -ml-35 font-fontBold ">Neck style</span>
              <span className=" pl-[6%] w-full ">Collared Neck</span>
            </div>
            <div className="leading-5 mb-2 relative pl-35 flex justify-between  text-sm text-[#0f1111]">
              <span className="w-35 -ml-35 font-fontBold ">
                Country of Origin
              </span>
              <span className=" pl-[6%] w-full ">india</span>
            </div>
          </div>

          <hr className="my-3 bg-transparent border-t border-t-[#d5d9d9] block h-px " />

          <h3 className="pt-1 pb-3 leading-7 font-fontBold text-[20px] text-[#0F1111] ">
            About this item
          </h3>

          <ul className="list-disc ml-4">
            <li className=" text-sm leading-5 text-[#0f1111]">
              {product.product_detailed_title}
            </li>
          </ul>

          <div className="relative mt-4">
            <i
              className="mb-[3px] mt-[-5px]  border-r-2 border-b-2 border-[#0f1111] p-[3px] h-[7px] w-[7px] ml-0.5 rotate-45 bg-[position:-82px_-293px] relative mr-[5.39px]  inline-block bg-[length:400px_900px] bg-no-repeat"
              style={{
                backgroundImage: `url(	https://m.media-amazon.com/images/S/sash/McBZv0ZvnbehkIx.png)`,
              }}
            ></i>
            <span className="text-[#2162a1] text-sm">See more</span>
          </div>

          <div className="text-sm flex mt-4">
            <i
              className="w-[19px] h-[19px] bg-[position:-233px_-202px] relative  top-px bg-[length:512px_256px] bg-no-repeat inline-block"
              style={{
                backgroundImage: `url(https://m.media-amazon.com/images/S/sash/u-2N-$HzSM3vUnQ.png)`,
              }}
            ></i>
            <span className=" text-[#2162a1]  text-sm ml-1.5">
              Report an issue with this product
            </span>
          </div>

          <div className="text-xs pt-2.5">
            <h2 className="text-[16.2px] font-bold mb-[5.67px] text-[#E47911] leading-8">
              The maximum order quantity for this product is limited to 5 units
              per customer
            </h2>

            <div className="after:content-[''] after:table after:clear-both">
              <img
                src="https://m.media-amazon.com/images/G/31/img15/rcx-events/test/HQP_VQL2._CB485935692_.png"
                className="float-left mr-2 mb-1"
                alt="LIMITED QUANTITY"
              />
              <p className="m-0 leading-[1.4em]">
                Please note that orders which exceed the quantity limit will be
                auto-canceled. <br />
                This is applicable across sellers.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductPriceInfo