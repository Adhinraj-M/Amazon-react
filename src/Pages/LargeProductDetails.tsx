import { useContext } from "react";
import DeskHeader from "../Components/LargeScreenComponents/DeskHeader";
import NavDesk from "../Components/LargeScreenComponents/NavDesk";
import { ToggleContext } from "../Context/toggleContext";

function LargeProductDetails() {
  const { handleSideBar } = useContext(ToggleContext);

  const currentPath:string[] = [
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

  return (
    <div className="min-large:block hidden">
      <DeskHeader stickHeader={false} />
      <NavDesk sideBar={handleSideBar} />

      {/* amazon fashion */}
      <div className="flex justify-between h-[50px] bg-white shadow-[0_0_1px_#ddd] z-[1] relative p-[0_9px_0_15px] overflow-hidden border-t border-t-[rgba(0,0,0,.17)] border-b border-b-[rgba(0,0,0,.1)] whitespace-nowrap">
        <a
          href="#"
          className="flex-[0_0_auto] inline-block relative text-center h-12 leading-12.5 p-[0_13px]  align-middle"
        >
          <img
            src="https://m.media-amazon.com/images/G/31/IMG17/Fashion/January/Ingresses/Subnav/Amazon-fashion-logo._CB485923938_.png"
            alt="amazon fashion"
            className="h-12.5 align-baseline w-auto pt-[5px]"
          />
        </a>
        <a
          href="#"
          className="flex-[0_0_auto] inline-block relative text-center align-middle h-12 leading-12.5 p-[0_13px] text-xs text-[#333] "
        >
          women
        </a>
        <a
          href="#"
          className="flex-[0_0_auto] inline-block relative text-center align-middle h-12 leading-12.5 p-[0_13px] text-xs text-[#333] "
        >
          Men
        </a>
        <a
          href="#"
          className="flex-[0_0_auto] inline-block relative text-center align-middle h-12 leading-12.5 p-[0_13px] text-xs text-[#333] "
        >
          Kids
        </a>
        <a
          href="#"
          className="flex-[0_0_auto] inline-block relative text-center align-middle h-12 leading-12.5 p-[0_13px] text-xs text-[#333] "
        >
          Bags & Luggage
        </a>
        <a
          href="#"
          className="flex-[0_0_auto] inline-block relative text-center align-middle h-12 leading-12.5 p-[0_13px] text-xs text-[#333] "
        >
          Sportswear
        </a>
        <a
          href="#"
          className="flex-[0_0_auto] inline-block relative text-center align-middle h-12 leading-12.5 p-[0_13px] text-xs text-[#333] "
        >
          Sales & Deals
        </a>
      </div>

      <div className="p-[0_8px]  min-w-[1000px] max-w-[1500px] m-[0_auto] ">
        <div className="p-[14px_0px] h-10.5 mb-2.5">
          <ul className="flex text-xs text-[#565959] gap-1">
            {currentPath.map((item, i) => {
              return <li key={i}>{item}</li>;
            })}
          </ul>
        </div>

        <div className="min-w-[1000px] max-w-[1500px] mx-auto flex">
          {/* Product images  */}
          <div className="sticky top-1 h-full float-left mr-[2%] w-[45%] flex ">
            <div className="absolute z-[3] border-none rounded-[50%] flex items-center justify-center top-2.5 right-2.5 bg-white w-[calc(24px*1.4)] h-[calc(24px*1.4)] ">
              <button
                className="h-6 w-6 cursor-pointer inline-block bg-cover outline-0"
                style={{
                  backgroundImage:`url(https://m.media-amazon.com/images/G/01/share-icons/share-std.svg)`,
                }}
              ></button>
            </div>
            <ul className=" list-none mt-8 w-10 h-105">
              <li className="mb-2 block p-0 text-center align-middle cursor-pointer border border-[#0a7cd1] overflow-hidden rounded-[7px]  !w-10 h-13">
                <img
                  src="https://m.media-amazon.com/images/I/31AxjpzJJPL._SX38_SY50_CR,0,0,38,50_.jpg "
                  alt="img"
                  className=" max-w-full !w-9.5 h-12.5  rounded-[7px] min-w-[5px] align-top"
                />
              </li>
              <li className="mb-2 block p-0 text-center align-middle cursor-pointer border border-[#0a7cd1] overflow-hidden rounded-[7px]  !w-10 h-13">
                <img
                  src="https://m.media-amazon.com/images/I/31AxjpzJJPL._SX38_SY50_CR,0,0,38,50_.jpg "
                  alt="img"
                  className=" max-w-full !w-9.5 h-12.5  rounded-[7px] min-w-[5px] align-top"
                />
              </li>

              <li className="mb-2 block p-0 text-center align-middle cursor-pointer border border-[#0a7cd1] overflow-hidden rounded-[7px]  !w-10 h-13">
                <img
                  src="https://m.media-amazon.com/images/I/31AxjpzJJPL._SX38_SY50_CR,0,0,38,50_.jpg "
                  alt="img"
                  className=" max-w-full !w-9.5 h-12.5  rounded-[7px] min-w-[5px] align-top"
                />
              </li>

              <li className="mb-2 block p-0 text-center align-middle cursor-pointer border border-[#0a7cd1] overflow-hidden rounded-[7px]  !w-10 h-13">
                <img
                  src="https://m.media-amazon.com/images/I/31AxjpzJJPL._SX38_SY50_CR,0,0,38,50_.jpg "
                  alt="img"
                  className=" max-w-full !w-9.5 h-12.5  rounded-[7px] min-w-[5px] align-top"
                />
              </li>

              <li className="mb-2 block p-0 text-center align-middle cursor-pointer border border-[#0a7cd1] overflow-hidden rounded-[7px]  !w-10 h-13">
                <img
                  src="https://m.media-amazon.com/images/I/31AxjpzJJPL._SX38_SY50_CR,0,0,38,50_.jpg "
                  alt="img"
                  className=" max-w-full !w-9.5 h-12.5  rounded-[7px] min-w-[5px] align-top"
                />
              </li>

              <li className="mb-2 block p-0 text-center align-middle cursor-pointer border border-[#0a7cd1] overflow-hidden rounded-[7px]  !w-10 h-13">
                <img
                  src="https://m.media-amazon.com/images/I/31AxjpzJJPL._SX38_SY50_CR,0,0,38,50_.jpg "
                  alt="img"
                  className=" max-w-full !w-9.5 h-12.5  rounded-[7px] min-w-[5px] align-top"
                />
              </li>

              <li className="mb-2 block p-0 text-center align-middle cursor-pointer border border-[#0a7cd1] overflow-hidden rounded-[7px]  !w-10 h-13">
                <img
                  src="https://m.media-amazon.com/images/I/31AxjpzJJPL._SX38_SY50_CR,0,0,38,50_.jpg "
                  alt="img"
                  className=" max-w-full !w-9.5 h-12.5  rounded-[7px] min-w-[5px] align-top"
                />
              </li>
            </ul>
            <div className="relative overflow-visible pl-[1%] float-left w-full mb-8">
              <div className="max-h-175 relative p-[1px_6px] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#000] after:opacity-[.03] after:pointer-events-none after:content-[''] after:block">
                <img
                  src="https://m.media-amazon.com/images/I/51U4IYW2kJL._SY550_.jpg"
                  alt="product-image"
                  className="max-w-[388.073px] flex mx-auto max-h-[518px] h-full w-auto align-top"
                />
              </div>
            </div>
          </div>
          <div className="float-right !w-[52%] relative flex ">
            {/* middle section  */}
            <div className="pr-[6.5%] float-left relative w-auto ">
              {/* w-full */}
              <p className="text-[#2162a1] text-sm leading-5 ">Brand: JVX</p>
              <h1 className="text-2xl leading-8 ">
                {" "}
                JVX Men T-Shirt || Tshirt for Men || Polo T Shirt || Tshirt
                (MRT-213){" "}
              </h1>
              <div className="inline-flex">
                <span className="text-[#0f1111] text-sm leading-5">4.3</span>
                <i
                  className="bg-[position:-2px_-400px] bg-[length:512px_512px] bg-no-repeat mt-px h-4.5 w-20 relative align-text-top inline-block"
                  style={{
                    backgroundImage: `url(	https://m.media-amazon.com/images/S/sash/5iL84kcaRCLp$es.png)`,
                  }}
                ></i>
                <i
                  className="align-text-top bg-[length:512px_512px] bg-no-repeat bg-[position:-168px_-81px] h-4 w-4 inline-block"
                  style={{
                    backgroundImage: `url(	https://m.media-amazon.com/images/S/sash/5iL84kcaRCLp$es.png)`,
                  }}
                ></i>
                <span className="text-sm leading-5 text-[#2162a1] pl-7.5">
                  86 ratings
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
                    -87%
                  </span>
                  <span className="mr-[3px] text-[#0f1111] align-middle text-[28px]  ">
                    <span className="text-[13px] top-[-9.75px] relative">
                      ₹
                    </span>
                    <span className="text-[28px]">399</span>
                  </span>
                </div>
                <span className="mb-2 align-middle text-[#565959] text-xs leading-4">
                  {" "}
                  M.R.P.: <span className="line-through">₹2,999</span>
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
                  {" "}
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
                      <li className="w-40 pr-1.5 cursor-pointer align-top min-h-full inline-block whitespace-normal tracking-normal">
                        <div className="shadow-[0_0_4px_0_rgba(0,0,0,.3)] ml-[1.6px] w-full inline-block relative align-baseline  rounded-[5px] p-[7px_10px] mt-[3.2px] ">
                          <h6 className="mb-1 text-sm leading-5 font-fontBold pb-px">
                            Cashback
                          </h6>
                          <span className="h-[59.2px] inline-block whitespace-normal w-full text-sm ">
                            Upto ₹11.00 cashback as Amazon Pay Balance when…
                          </span>
                          <div className="relative pr-[9px] text-[#2162a1] text-sm leading-5">
                            1 offer
                          </div>
                        </div>
                      </li>
                      <li className="w-40 pr-1.5 cursor-pointer align-top min-h-full inline-block whitespace-normal tracking-normal">
                        <div className="shadow-[0_0_4px_0_rgba(0,0,0,.3)] ml-[1.6px] w-full inline-block relative align-baseline  rounded-[5px] p-[7px_10px] mt-[3.2px] ">
                          <h6 className="mb-1 text-sm leading-5 font-fontBold pb-px">
                            Bank Offer
                          </h6>
                          <span className="h-[59.2px] inline-block whitespace-normal w-full text-sm ">
                            Upto ₹1,000.00 discount on select Credit Cards,
                            Debit…
                          </span>
                          <div className="relative pr-[9px] text-[#2162a1] text-sm leading-5">
                            15 offer
                          </div>
                        </div>
                      </li>
                      <li className="w-40 pr-1.5 cursor-pointer align-top min-h-full inline-block whitespace-normal tracking-normal">
                        <div className="shadow-[0_0_4px_0_rgba(0,0,0,.3)] ml-[1.6px] w-full inline-block relative align-baseline  rounded-[5px] p-[7px_10px] mt-[3.2px] ">
                          <h6 className="mb-1 text-sm leading-5 font-fontBold pb-px">
                            {" "}
                            Partner Offers{" "}
                          </h6>
                          <span className="h-[59.2px] inline-block whitespace-normal w-full text-sm ">
                            Get GST invoice and save up to 28% on business
                            purchases.{" "}
                          </span>
                          <div className="relative pr-[9px] text-[#2162a1] text-sm leading-5">
                            1 offer
                          </div>
                        </div>
                      </li>
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
                    <li className="pr-1.5 w-[91px] inline-block h-full text-center">
                      <img
                        src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB562506657_.png"
                        alt=""
                        className="h-[35px] w-[35px] text-center align-top flex mx-auto"
                      />
                      <div className="mt-2 text-[#2162a1] text-xs leading-4 ">
                        {" "}
                        Cash/Pay on Delivery{" "}
                      </div>
                    </li>
                    <li className="pr-1.5 w-[91px] inline-block h-full text-center">
                      <img
                        src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB562549966_.png"
                        alt=""
                        className="h-[35px] w-[35px] text-center align-top flex mx-auto"
                      />
                      <div className="mt-2 text-[#2162a1] text-xs leading-4 ">
                        {" "}
                        Free Delivery{" "}
                      </div>
                    </li>
                    <li className="pr-1.5 w-[91px] inline-block h-full text-center">
                      <img
                        src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB562506657_.png"
                        alt=""
                        className="h-[35px] w-[35px] text-center align-top flex mx-auto"
                      />
                      <div className="mt-2 text-[#2162a1] text-xs leading-4 ">
                        {" "}
                        Top Brand{" "}
                      </div>
                    </li>
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

              <div className="p-o m-0 bg-white">
                <div className="w-full">
                  <span className="text-[#565959] text-sm leading-5">
                    Colour:{" "}
                  </span>
                  <span className="text-[#0f1111] text-sm leading-5 font-fontBold">
                    NAVY
                  </span>
                </div>
                <div className="flex pb-[3px]">
                  <ul className="flex  text-left">
                    <li className="p-[2px_4px] mb-1 align-top inline-block h-fit ">
                      <span className="w-[75px] bg-[linear-gradient(0deg,#fff,#fff),_linear-gradient(0deg,#888c8c,#888c8c)] border-[#888c8c] rounded-lg inline-block border overflow-hidden align-middle ">
                        <img
                          src="https://m.media-amazon.com/images/I/31qxNCokwGL._SS64_.jpg"
                          alt=""
                          className="p-1 min-w-[5px] align-top"
                        />
                        <hr className="bg-transparent border-[#d5d9d9] border-t h-px " />
                        <div className="p-[0_4px_4px_4px] h-1/2 text-left">
                          <span className="text-[#0f1111] text-xs block">
                            ₹399.00
                          </span>
                          <div className="line-through text-[#565959] text-[10px] leading-4">
                            ₹2,999.00
                          </div>
                        </div>
                      </span>
                    </li>
                    <li className="p-[2px_4px] mb-1 align-top inline-block h-fit ">
                      <span className="w-[75px] bg-[linear-gradient(0deg,#fff,#fff),_linear-gradient(0deg,#888c8c,#888c8c)] border-[#888c8c] rounded-lg inline-block border overflow-hidden align-middle ">
                        <img
                          src="https://m.media-amazon.com/images/I/31qxNCokwGL._SS64_.jpg"
                          alt=""
                          className="p-1 min-w-[5px] align-top"
                        />
                        <hr className="bg-transparent border-[#d5d9d9] border-t h-px " />
                        <div className="p-[0_4px_4px_4px] h-1/2 text-left">
                          <span className="text-[#0f1111] text-xs block">
                            ₹399.00
                          </span>
                          <div className="line-through text-[#565959] text-[10px] leading-4">
                            ₹2,999.00
                          </div>
                        </div>
                      </span>
                    </li>
                    <li className="p-[2px_4px] mb-1 align-top inline-block h-fit ">
                      <span className="w-[75px] bg-[linear-gradient(0deg,#fff,#fff),_linear-gradient(0deg,#888c8c,#888c8c)] border-[#888c8c] rounded-lg inline-block border overflow-hidden align-middle ">
                        <img
                          src="https://m.media-amazon.com/images/I/31qxNCokwGL._SS64_.jpg"
                          alt=""
                          className="p-1 min-w-[5px] align-top"
                        />
                        <hr className="bg-transparent border-[#d5d9d9] border-t h-px " />
                        <div className="p-[0_4px_4px_4px] h-1/2 text-left">
                          <span className="text-[#0f1111] text-xs block">
                            ₹399.00
                          </span>
                          <div className="line-through text-[#565959] text-[10px] leading-4">
                            ₹2,999.00
                          </div>
                        </div>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="w-full">
                  <span className="text-[#565959] text-sm leading-5">
                    Size:{" "}
                  </span>
                  <span className="text-[#0f1111] text-sm leading-5 font-fontBold">
                    L
                  </span>
                </div>

                <div className="flex pb-[3px] ">
                  <ol className="flex flex-wrap text-left list-disc">
                    <li className="mb-1 m-[0_4px_0_4px] pt-[3px] inline-block min-w-12.5 max-w-[175px] h-[32px] w-[48px] bg-white border border-[#888c8c] rounded-lg text-sm">
                      {" "}
                      <span className="p-1">S</span>{" "}
                    </li>
                    <li className="mb-1 m-[0_4px_0_4px] pt-[3px] inline-block min-w-12.5 max-w-[175px] h-[32px] w-[48px] bg-white border border-[#888c8c] rounded-lg text-sm">
                      {" "}
                      <span className="p-1">M</span>{" "}
                    </li>
                    <li className="mb-1 m-[0_4px_0_4px] pt-[3px] inline-block min-w-12.5 max-w-[175px] h-[32px] w-[48px] bg-white border border-[#888c8c] rounded-lg text-sm">
                      {" "}
                      <span className="p-1">L</span>{" "}
                    </li>
                    <li className="mb-1 m-[0_4px_0_4px] pt-[3px] inline-block min-w-12.5 max-w-[175px] h-[32px] w-[48px] bg-white border border-[#888c8c] rounded-lg text-sm">
                      {" "}
                      <span className="p-1">XL</span>{" "}
                    </li>
                    <li className="mb-1 m-[0_4px_0_4px] pt-[3px] inline-block min-w-12.5 max-w-[175px] h-[32px] w-[48px] bg-white border border-[#888c8c] rounded-lg text-sm">
                      {" "}
                      <span className="p-1">2XL</span>{" "}
                    </li>
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
                    <span className=" pl-[6%] w-full ">100% Cotton</span>
                  </div>
                  <div className="leading-5 mb-2 relative pl-35 flex justify-between text-sm text-[#0f1111]">
                    <span className="!w-35 -ml-35 font-fontBold ">
                      Fit type
                    </span>
                    <span className=" pl-[6%] w-full ">Regular Fit</span>
                  </div>
                  <div className="leading-5 mb-2 relative pl-35 flex justify-between text-sm text-[#0f1111]">
                    <span className="!w-35 -ml-35 font-fontBold ">
                      Sleeve Type
                    </span>
                    <span className=" pl-[6%] w-full ">Short Sleeve</span>
                  </div>
                  <div className="leading-5 mb-2 relative pl-35 flex justify-between  text-sm text-[#0f1111]">
                    <span className="w-35 -ml-35 font-fontBold ">
                      Collar style
                    </span>
                    <span className=" pl-[6%] w-full ">Polo Collar</span>
                  </div>
                  <div className="leading-5 mb-2 relative pl-35 flex justify-between  text-sm text-[#0f1111]">
                    <span className="w-35 -ml-35 font-fontBold ">Length</span>
                    <span className=" pl-[6%] w-full ">Standard Length</span>
                  </div>
                  <div className="leading-5 mb-2 relative pl-35 flex justify-between  text-sm text-[#0f1111]">
                    <span className="w-35 -ml-35 font-fontBold ">
                      Neck style
                    </span>
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
                    Men T-Shirt || T-Shirt for Men || Polo T Shirt || T-Shirt
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
                      backgroundImage: `url(	https://m.media-amazon.com/images/S/sash/u-2N-$HzSM3vUnQ.png)`,
                    }}
                  ></i>
                  <span className=" text-[#2162a1]  text-sm ml-1.5">
                    {" "}
                    Report an issue with this product
                  </span>
                </div>

                <div className="text-xs pt-2.5">
                  <h2 className="text-[16.2px] font-bold mb-[5.67px] text-[#E47911] leading-8">
                    The maximum order quantity for this product is limited to 5
                    units per customer
                  </h2>

                  <div className="after:content-[''] after:table after:clear-both">
                    <img
                      src="https://m.media-amazon.com/images/G/31/img15/rcx-events/test/HQP_VQL2._CB485935692_.png"
                      className="float-left mr-2 mb-1"
                      alt="LIMITED QUANTITY"
                    />
                    <p className="m-0 leading-[1.4em]">
                      Please note that orders which exceed the quantity limit
                      will be auto-canceled. <br />
                      This is applicable across sellers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* right add to cart  */}
             <div className="border !w-[244px] border-[#d5d9d9] z-1 h-fit float-left rounded-bl-lg rounded-br-lg">
              <div className="p-[14px_18px] relative">
                <span className="text-[28px] text-[#0f1111]">
                  <span className="text-[13px] top-[-9.75px] relative">₹</span>
                  <span>399</span>
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
                  FREE delivery{" "}
                  <span className="font-fontBold">Friday, 29 August</span> on
                  your first order.{" "}
                  <span className="underline text-[#2162a1]">Details</span>
                </div>
                <div className="mb-3 text-sm">
                  Or fastest delivery{" "}
                  <span className="font-fontBold">Tommorrow, 28 August.</span>{" "}
                  <span className="font-fontBold text-[#c10015]">
                    Order within 8 mins.
                  </span>{" "}
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

                <button className="rounded-[100px] mb-2 w-full bg-[#ffd814] h-7.5 text-center text-[14px] leading-5">
                  Add to Cart
                </button>
                <button className="rounded-[100px] mb-3 w-full bg-[#ffa41c] h-7.5 text-center text-[14px] leading-5">
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

          </div>

        </div>
      </div>
    </div>
  );
}

export default LargeProductDetails;







