import { offers, productOfferType } from "../../../Types/DeskCategories";
import type { CategoryProdut } from "../../../Types/product";
import ProductPriceInfo from "./ProductPriceInfo";

type productType={
    product:CategoryProdut[] | undefined
 }

function ProductDetailed({product}:productType) {
  return (
     <>
    { product?.length === 1 && <div className="pr-[calc(6.5%+244px)] float-left relative w-full overflow-visible ">
              <p className="text-[#2162a1] text-sm leading-5 ">Brand: JVX</p>
              <h1 className="text-2xl leading-8 ">
               {product[0].product_detailed_title}
              </h1>
              <div className="inline-flex">
                <span className="text-[#0f1111] text-sm leading-5">{product[0].product_rating}</span>
                <i
                  className="bg-[position:-2px_-400px] bg-[length:512px_512px] bg-no-repeat mt-px h-4.5 w-20 relative align-text-top inline-block"
                  style={{
                    backgroundImage: `url(https://m.media-amazon.com/images/S/sash/5iL84kcaRCLp$es.png)`,
                  }}
                ></i>
                <i
                  className="align-text-top bg-[length:512px_512px] bg-no-repeat bg-[position:-168px_-81px] h-4 w-4 inline-block"
                  style={{
                    backgroundImage: `url(https://m.media-amazon.com/images/S/sash/5iL84kcaRCLp$es.png)`,
                  }}
                ></i>
                <span className="text-sm leading-5 text-[#2162a1] pl-7.5">
                  {product[0].no_of_buyers === "no_data" ? '':`${product[0].no_of_buyers} ratings`} 
                </span>
              </div>
              <hr className="bg-transparent border-t border-t-[#d5d9d9] block h-px leading-[19px] mb-3.5" />

              {/* price and details container */}
              <div className="">
                <button className="bg-[#CC0C39] p-[4px_8px_4px_8px] rounded-sm inline-block align-middle mb-1.5 relative text-white text-xs leading-4 h-7 font-fontBold">
                  Limited time deal
                </button>
                <div className="relative align-middle">
                  <span className="mr-[3px] text-[#CC0c39] align-middle text-2xl leading-8">
                    {product[0].product_offer}
                  </span>
                  <span className="mr-[3px] text-[#0f1111] align-middle text-[28px]  ">
                    <span className="text-[13px] top-[-9.75px] relative">
                      ₹
                    </span>
                    <span className="text-[28px]">{product[0].product_price}</span>
                  </span>
                </div>
                <span className="mb-2 align-middle text-[#565959] text-xs leading-4">
                  M.R.P.: <span className="line-through">₹{product[0].product_actual_price}</span>
                </span>
                <span className="text-[15px] leading-[1.35] flex">
                  <i className="flex rounded-[2px_0_0_2px] bg-[#3e4650] leading-[1.05] text-[12px] text-white p-[3px_4px_3px_5px] relative top-px tracking-[0.96px] align-top before:content-[''] before:absolute before:-right-[5px] before:bottom-0 before:border-dashed before:border-r-[6px] before:border-b-[#3e4650] before:border-[rgba(255,255,255,0)] before:w-0 before:h-0 before:leading-0 before:border-l-0 before:!border-b-[10px] after:content-[''] after:absolute after:top-0 after:-right-[5px] after:bottom-0 after:border-dashed after:border-r-[6px] after:border-t-[#3e4650] after:border-[rgba(255,255,255,0)] after:w-0 after:h-0 after:leading-0 after:border-l-0 after:!border-t-[10px] ">
                    <i
                      className="bg-[position:-118px_-2px] h-[13px] w-[13px] bg-[length:512px_256px] bg-no-repeat inline-block"
                      style={{
                        backgroundImage: `url(https://m.media-amazon.com/images/S/sash/IAiggOMz$2G$3oR.png)`,
                      }}
                    ></i>
                    <span className="pl-[3px] text-xs text-white tracking-[0.96px] leading-[1.05] ">
                      Fulfilled
                    </span>
                  </i>
                </span>
                <span className="leading-5 text-sm font-normal">
                  Inclusive of all taxes
                </span>
              </div>

              {/* offer details container */}
              <div className="bg-white overflow-auto relative mt-0.5">
                <div className="pb-[3px] inline-block pr-[27.2px] align-middle">
                  <div className="w-6 h-6 inline-block overflow-hidden align-middle relative">
                    <img
                      className="  mt-[-25px] max-h-none left-0 right-0 top-0 bottom-0 max-w-full m-auto"
                      src="https://m.media-amazon.com/images/G/31/A2I_CEPC/VSX/vsx_sprite_2x.png"
                      alt=""
                    />
                  </div>
                  <span className="pl-3.5 inline-block align-middle text-sm leading-5 font-fontBold">
                    Offers
                  </span>
                </div>

                <div className="overflow-x-scroll overflow-y-hidden whitespace-nowrap pb-[9.6px] relative scroll-width-none">
                  <div className="h-31.5 visible w-10.5 absolute top-9  z-[1] left- overflow-visible ">
                    <button className="top-[50.3906px] bg-[#F7FAFA] w-7.5 !h-[65px] rounded-[1.5px] shadow-[0_0_4px_0_rgba(128,128,128,.5)] inline-flex items-center justify-center">
                      <i
                        className="opacity-100 m-[5px_auto] w-[11px] h-[15px] bg-[position:-123px_-7px] inline-block align-top bg-[length:400px_900px] bg-no-repeat "
                        style={{
                          backgroundImage: `url(https://m.media-amazon.com/images/S/sash/McBZv0ZvnbehkIx.png)`,
                        }}
                      ></i>
                    </button>
                  </div>
                  <div className="relative h-[126px] w-full overflow-x-scroll scroll-width-none">
                    <ol className="w-120 transform-[translateX(0px)_translateZ(0px)] list-none m-0 overflow-x-visible tracking-[-4px]  scroll-width-none ">
                      {offers.length > 0 &&
                        offers.map((item, i) => {
                          return (
                            <li
                              key={i}
                              className="w-40 pr-1.5 cursor-pointer align-top min-h-full inline-block whitespace-normal tracking-normal">
                              <div className="shadow-[0_0_4px_0_rgba(0,0,0,.3)] ml-[1.6px] w-full inline-block relative align-baseline  rounded-[5px] p-[7px_10px] mt-[3.2px] ">
                                <h6 className="mb-1 text-sm leading-5 font-fontBold pb-px">
                                  {item.offername}
                                </h6>
                                <span className="h-[59.2px] inline-block whitespace-normal w-full text-sm ">
                                  {item.description}
                                </span>
                                <div className="relative pr-[9px] text-[#2162a1] text-sm leading-5">
                                  {item.noOffers}
                                </div>
                              </div>
                            </li>
                          );
                        })}
                    </ol>
                  </div>
                  <div className="h-31.5 visible w-10.5 absolute top-9  z-[1] right-[-12px] overflow-visible ">
                    <button className="top-[50.3906px] bg-[#F7FAFA] w-7.5 !h-[65px] rounded-[1.5px] shadow-[0_0_4px_0_rgba(128,128,128,.5)] inline-flex items-center justify-center">
                      <i
                        className="opacity-100 m-[5px_auto] w-[11px] h-[15px] bg-[position:-105px_-7px] inline-block align-top bg-[length:400px_900px] bg-no-repeat "
                        style={{
                          backgroundImage: `url(https://m.media-amazon.com/images/S/sash/McBZv0ZvnbehkIx.png)`,
                        }}
                      ></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* return exchange delivery  */}

              <div className="mb-[15px] flex justify-between border-b border-b-[#DDD] relative overflow-hidden ">
                <div className="h-22 w-10.5 absolute top-8 z-[1] left-0">
                  <button className="top-[42.1406px] w-[25px] h-[25px] bg-white rounded-[6.5px] shadow-[0_0_4px_0_rgba(128,128,128,.5)] inline-flex items-center justify-center">
                    <i
                      className="m-[3.5px] w-[11px] h-[15px] bg-[position:-123px_-7px] inline-block align-top bg-[length:400px_900px] bg-no-repeat"
                      style={{
                        backgroundImage: `url(https://m.media-amazon.com/images/S/sash/McBZv0ZvnbehkIx.png)`,
                      }}
                    ></i>
                  </button>
                </div>

                <div className="h-22 w-full">
                  <ol className="w-[546px] h-full  list-none  overflow-x-visible">
                    {productOfferType.length > 0 &&
                      productOfferType.map((item, i) => {
                        return (
                          <li
                            key={i}
                            className="pr-1.5 w-[91px] inline-block h-full text-center"
                          >
                            <img
                              src={item.img.src}
                              alt={item.img.alt}
                              className="h-[35px] w-[35px] text-center align-top flex mx-auto"
                            />
                            <div className="mt-2 text-[#2162a1] text-xs leading-4 ">
                              {item.offerName}
                            </div>
                          </li>
                        );
                      })}
                  </ol>
                </div>

                <div className="h-22 w-10.5 absolute top-8 z-[1] right-[-19px]">
                  <button className="top-[42.1406px] w-[25px] h-[25px] bg-white rounded-[6.5px] shadow-[0_0_4px_0_rgba(128,128,128,.5)] inline-flex items-center justify-center">
                    <i
                      className="m-[3.5px] w-[11px] h-[15px] bg-[position:-105px_-7px] inline-block align-top bg-[length:400px_900px] bg-no-repeat"
                      style={{
                        backgroundImage: `url(https://m.media-amazon.com/images/S/sash/McBZv0ZvnbehkIx.png)`,
                      }}
                    ></i>
                  </button>
                </div>
              </div>

              {/* product details */}
              <ProductPriceInfo product={product[0]}/>
      </div>}
     </>
  )
}

export default ProductDetailed