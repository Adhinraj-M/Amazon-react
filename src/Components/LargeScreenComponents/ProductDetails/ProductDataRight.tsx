import type { CategoryProdut } from "..Types/product"

type productDataRightType={
    product:CategoryProdut[]
}


function ProductDataRight({product}:productDataRightType) {
  return (
     <>
        {
            product.length === 1 && (
                 <div className="border absolute right-0 !w-[244px] border-[#d5d9d9] z-1 h-fit float-left rounded-bl-lg rounded-br-lg">
              <div className="p-[14px_18px] relative">
                <span className="text-[28px] text-[#0f1111]">
                  <span className="text-[13px] top-[-9.75px] relative">₹</span>
                  <span>{product[0].product_price}</span>
                  <span className="text-[13px] top-[-9.75px] relative">00</span>
                </span>
                <span className="text-[15px] leading-[1.35] flex">
                  <i className="flex rounded-[2px_0_0_2px] bg-[#3e4650] leading-[1.05] text-[12px] text-white p-[3px_4px_3px_5px] relative top-px tracking-[0.96px] align-top before:content-[''] before:absolute before:-right-[5px] before:bottom-0 before:border-dashed before:border-r-[6px] before:border-b-[#3e4650] before:border-[rgba(255,255,255,0)] before:w-0 before:h-0 before:leading-0 before:border-l-0 before:!border-b-[10px] after:content-[''] after:absolute after:top-0 after:-right-[5px] after:bottom-0 after:border-dashed after:border-r-[6px] after:border-t-[#3e4650] after:border-[rgba(255,255,255,0)] after:w-0 after:h-0 after:leading-0 after:border-l-0 after:!border-t-[10px] ">
                    <i
                      className="bg-[position:-118px_-2px] h-[13px] w-[13px] bg-[length:512px_256px] bg-no-repeat inline-block"
                      style={{
                        backgroundImage: `url(https://m.media-amazon.com/images/S/sash/IAiggOMz$2G$3oR.png)`,
                      }}
                    ></i>
                    <span className="pl-[3px] text-xs text-white tracking-[0.96px] leading-[1.05]">
                      Fulfilled
                    </span>
                  </i>
                </span>
                <div className="mb-3 text-sm">
                  FREE delivery
                  <span className="font-fontBold">Friday, 29 August</span> on
                  your first order.
                  <span className="underline text-[#2162a1]">Details</span>
                </div>
                <div className="mb-3 text-sm">
                  Or fastest delivery
                  <span className="font-fontBold">Tommorrow, 28 August.</span>
                  <span className="font-fontBold text-[#c10015]">
                    Order within 8 mins.
                  </span>
                  <span className="underline text-[#2162a1]">Details</span>
                </div>

                <div className="flex cursor-pointer mb-2">
                  <div
                    className="bg-contain min-w-4 h-3.5 float-left bg-no-repeat bg-center mr-[5px] mt-0.5"
                    style={{
                      backgroundImage: `url(https://m.media-amazon.com/images/S/sash/nJCzu3ZNAgUz-2w.png)`,
                    }}
                  ></div>
                  <span className="text-[12px] leading-[1.5] text-[#2162a1]">
                    Delivering to Kalpatta 673122 - Update location
                  </span>
                </div>

                <h2 className="pt-[9px]  text-[#0b7b3c] text-lg leading-7">
                  In stock
                </h2>
                <div className="grid grid-cols-[auto_auto] w-full p-[5px] mb-3">
                  <span className="pr-2.5 text-xs leading-6 text-[#565959]">
                    Ships from
                  </span>
                  <span className="pr-2.5 text-xs leading-6 text-[#0f1111]">
                    Amazon
                  </span>
                  <span className="pr-2.5 text-xs leading-6 text-[#565959]">
                    Sold by
                  </span>
                  <span className="pr-2.5 text-xs leading-6 text-[#2162a1]">
                    Cocoblu Retail
                  </span>
                  <span className="pr-2.5 text-xs leading-6 text-[#565959]">
                    Payment
                  </span>
                  <span className="pr-2.5 text-xs leading-6 text-[#2162a1]">
                    Secure transaction
                  </span>
                </div>

                <div className="relative">
                  <select
                    className=" mb-3 p-[4px_31px_4px_16px] rounded-[7px] left-0 w-full  relative z-[1] border border-[#d5d9d9] bg-[#f0f2f2] text-sm appearance-none"
                    name=""
                    id=""
                  >
                    <option value="">Quantity: 1</option>
                  </select>
                  <i
                    className="absolute bottom-6 right-3.5 z-[1] w-2.5 h-2 bg-[position:-7px_-102px] inline-block align-top bg-[length:400px_900px] bg-no-repeat"
                    style={{
                      backgroundImage: `url(https://m.media-amazon.com/images/S/sash/McBZv0ZvnbehkIx.png)`,
                    }}
                  ></i>
                </div>

                <button className="rounded-[100px] mb-2 w-full bg-[#ffd814] h-7.5 text-center text-[14px] leading-5 cursor-pointer hover:bg-[#ffed92] ">
                  Add to Cart
                </button>
                <button className="rounded-[100px] mb-3 w-full bg-[#ffa41c] h-7.5 text-center text-[14px] leading-5 cursor-pointer hover:bg-[#ffa41cde]">
                  Buy Now
                </button>

                <label className="relative  indent-[-15px] ml-[3px] -top-0.5 flex">
                  <input
                    type="checkbox"
                    className="h-[13px] w-[13px] align-top relative bottom-[-3px] leading-[19px]"
                  />
                  <span className="relative ml-[21px] inline-block text-sm">
                    Add gift options
                  </span>
                </label>

                <hr className="mb-3 border-t border-t-[#d5d9d9] h-px" />

                <button className="w-full px-3 h-7.5 relative rounded-lg border border-[#888c8c] bg-[#f7fafa] text-left text-[13px]">
                  Add to Wish List
                </button>
              </div>
     </div>
            )
        }
     </>
  )
}

export default ProductDataRight