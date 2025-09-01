import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Address from "../Home/Address";
import Sponsored from "../Home/Sponsored";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../Home/Header";
import { HomeProductContext } from "../../../Context/HomeProductContext";
import type { Products } from "../../../Types/product";
import { ProvidingBenefits } from "../../../Types/categories";
import Footer from "../Home/Footer";

function HomeProductData() {
  const { filterList } = useContext(HomeProductContext);

  const [productData, setProductData] = useState<Products[] | undefined>(
    filterList
  );
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const params = useParams();

   
  useEffect(() => {
    const filtered = filterList?.filter((item) => item.id === params.productId);

    setProductData(filtered);
  }, [filterList]);

  const settings = {
    dots: false,
    infinte: true,
    speed: 500,
    slidesToShow: 1,
    beforeChange: (oldIndex: number, newIndex: number) =>
      setActiveIndex(newIndex),
    slidesToScroll: 1,
    arrows: true,
  };

  const size:string[] =["S","M","L","XL","2Xl"]

  return (
    <div className="min-large:hidden">
      <Header  />
      <Address />
      <Sponsored />
      {productData && (
        <div className="bg-white min-w-50 p-[0_14px] m-[0_auto] w-full">
          <div className="-mt-1 ">
            <div className="flex justify-between mt-1 items-center ">
              <div className="w-[56.25%] mr-[5%] min-h-px text-ellipsis overflow-hidden whitespace-nowrap flex items-center">
                <span className="leading-[20.25px] text-[13px] text-[#2162a1]">
                  Visit the GRECIILOOKS Store
                </span>
              </div>
              <div className="w-[38.75%] min-h-px overflow-visible flex justify-end">
                <i
                  className="bg-[length:512px_512px] bg-no-repeat h-4.5 w-20 relative align-top  inline-block bg-[position:-210px_-467px] top-px"
                  style={{
                    backgroundImage: `url(	https://m.media-amazon.com/images/S/sash/VRxFMfjvVeE5Eoy.png)`,
                  }}
                ></i>
                <span className="text-[#0f1111] text-[13px] leading-3.5 ml-1 mt-1">
                  {productData[0]?.total_reviews}
                </span>
              </div>
            </div>
            <h1 className="mt-px mb-2 text-[#565959] leading-[1.4] text-[13px] ">
              {productData[0]?.product_detailed_title}
            </h1>
            <div className="m-[0_-4px] relative overflow-hidden  ">
              <ol className="m-0 h-full p-0">
                <Slider {...settings}>
                  {productData[0].product_img.map((img, i) => (
                    <li key={i} className="h-full flex justify-center">
                      <img
                        className="h-auto"
                        src={img}
                        alt={productData[0]?.product_title}
                      />
                    </li>
                  ))}
                </Slider>
              </ol>
            </div>

            <div className="flex flex-col justify-center p-[6px_0] relative">
              <div className="flex items-center min-h-6 relative justify-center">
                <ul className="border-none flex z-[1] p-0 w-auto items-center absolute h-2.5 list-none m-0">
                  {Array.from(
                    { length: productData[0].product_img.length },
                    (_, i) => {
                      return (
                        <li
                          key={i}
                          className={`${
                            activeIndex === i ? "bg-[#000]" : "bg-[#cdcdcd]"
                          } border-none h-2 w-2 m-[0_4px] p-[0_5px_0_0] rounded-3xl inline-block  leading-4 relative `}
                        ></li>
                      );
                    }
                  )}
                </ul>
              </div>
              <div className="flex absolute grow-1 justify-end h-6 w-full items-center">
                <div className="mr-4 w-6">
                  <i
                    className="bg-[position:-.67px,-.67px] bg-[length:42.67px_21.33px] w-[20.33px] h-[18.67px] flex items-center justify-center bg-no-repeat relative top-[3px] left-0.5"
                    style={{
                      backgroundImage: `url(https://m.media-amazon.com/images/S/sash/Y2W8muvg-FtKQay.png)`,
                    }}
                  ></i>
                </div>
                <span
                  className="h-6 w-6 cursor-pointer inline-block bg-cover"
                  style={{
                    backgroundImage: `url(	https://m.media-amazon.com/images/G/01/share-icons/share-android.svg)`,
                  }}
                ></span>
              </div>
            </div>

            {(productData[0]?.product_category === "Clothing" ||
              productData[0]?.product_category === "Clothing") && (
              <div className="p-[16px_14px_16px] relative border-t-[5px] border-t-[#F3F3F3] border-b border-b-[#d5d9d9] m-[0_-14px_12px] overflow-hidden bg-transparent">
                <div className="mb-4">
                  <span className=" text-[15px] leading-[1.35] p-0 ">
                    Colour:{" "}
                    <span className="uppercase font-fontBold">black</span>
                  </span>
                </div>

                <div className="m-[0_-14px] p-[0_14px] max-h-100 opacity-100 overflow-y-hidden relative whitespace-nowrap flex">
                  <ul className="-mb-2 m-[0_0_0_-4px] flex text-left relative list-none">
                    <li className="m-[0_0_0_5px]  inline-block w-20 pb-3 text-[15px] ">
                      <div className="border-2 border-[#000] p-[0_5px] m-[0_auto] w-17.5 h-17.5 overflow-hidden rounded-[50%] relative bg-[rgba(210,210,210,.25)] ">
                        <img
                          className="min-w-[5px] transform-[translateY(5px)_scale(1.7)]"
                          src={productData[0]?.product_img[0]}
                          alt="black"
                        />
                      </div>
                      <div className="mt-[11px] text-[11px] relative ">
                        <span className="absolute -top-5 m-[auto_2px] inline-block bg-[#CC0C39] text-white rounded-sm  p-[4px_4.7px]">
                          Limited time
                        </span>
                        <div className="text-center flex flex-col gap-y-0.5 relative top-2">
                          <span className="mr-0.5 ml-0.5 block">
                            {" "}
                            ₹{productData[0]?.product_price}
                          </span>
                          <span className="mr-0.5 ml-0.5 whitespace-nowrap line-through text-[#aaa] block ">
                            ₹{productData[0]?.product_actual_price}
                          </span>
                          <span className="overflow-hidden whitespace-nowrap text-center font-fontBold">
                            BLACK
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="m-[16px_0_0_0] pt-0  ">
                  <div className="flex justify-between mb-2 w-full ">
                    <div className="flex gap-x-1">
                      <span className="text-[15px] leading-[1.35]">Size:</span>
                      <span className="text-[15px] leading-[1.35] font-fontBold">
                        2XL
                      </span>
                    </div>
                    <span className="text-[#2162a1] text-[15px] leading-[1.35] ">
                      Size guide
                    </span>
                  </div>

                  <div className="m-[0_-14px] p-[0_14px] max-h-100 opacity-100">
                    <ul className="flex m-[0_0_0_-4px] text-left list-none gap-1">
                      {size.map((item,index)=>{
                        return(
                        <li key={index} className="flex-[0_0_auto] max-w-57.5 m-[0_0_0_5px]  justify-center items-center relative border border-[#2e3040] rounded-[3px] ">
                        <button className="p-[12px_16px_12px_17px]  text-left text-[15px] leading-5">
                          {item}
                        </button>
                      </li>
                        )
                      })
                      }
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          <span className="bg-[#CC0C39] p-[4px_8px_4px_8px] rounded-sm inline-block mb-1 text-white text-[13px] leading-[1.4]">
            Limited time deal
          </span>
          <div className="flex items-center">
            <span className="mr-1 text-[#CC0C39] text-4xl leading-[1.22] ">
              {productData[0]?.product_offer}
            </span>
            <span className="mr-1 text-[38px] ">
              <span className="text-[15px] -top-[15px] relative">₹</span>
              <span> {productData[0]?.product_price}</span>
            </span>
          </div>
          <span className="text-[#565959] mb-2 text-[13px]">
            M.R.P.:{" "}
            <span className="inline-block  line-through">
              ₹{productData[0]?.product_actual_price}
            </span>{" "}
          </span>
          <span className="text-[15px] leading-[1.35] flex">
            <i className="flex rounded-[2px_0_0_2px] bg-[#3e4650] leading-[1.05] text-[12px] text-white p-[3px_4px_3px_15px] relative top-px tracking-[0.96px] align-top before:content-[''] before:absolute before:-right-[5px] before:bottom-0 before:border-dashed before:border-r-[6px] before:border-b-[#3e4650] before:border-[rgba(255,255,255,0)] before:w-0 before:h-0 before:leading-0 before:border-l-0 before:!border-b-[10px] after:content-[''] after:absolute after:top-0 after:-right-[5px] after:bottom-0 after:border-dashed after:border-r-[6px] after:border-t-[#3e4650] after:border-[rgba(255,255,255,0)] after:w-0 after:h-0 after:leading-0 after:border-l-0 after:!border-t-[10px] ">
              <i
                className="bg-[position:-118px_-2px] h-[13px] w-[13px] bg-[length:512px_256px] bg-no-repeat inline-block"
                style={{
                  backgroundImage: `url(https://m.media-amazon.com/images/S/sash/IAiggOMz$2G$3oR.png)`,
                }}
              ></i>
              <span className="pl-[3px] text-xs text-white tracking-[0.96px] leading-[1.05] font-normal ">
                Fulfilled
              </span>
            </i>
          </span>
          <span className="">Inclusive of all taxes</span>
          {/* all offerce and discount  */}
          <div className="-ml-3.5 relative -mr-3.5 bg-[#d5d9d9] p-[0.1px_0_0.5px] !mt-5 !mb-3 before:mb-0.5 before:content-[''] after:content-[''] after:mb-0.5">
            <div className="p-[12px_12px] bg-white mt-0.5 mb-0.5  ">
              <div className="flex p-[0_15px_0_17px] items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="https://m.media-amazon.com/images/G/31/a2i-convert/smx/offers/Extra_Savings.svg"
                    alt=""
                  />
                  <span className="inline-block align-middle pl-[17px] pr-1 text-[15px] leading-[1.35]">
                    {" "}
                    All offers & discounts{" "}
                  </span>
                </div>
                <i
                  className="align-middle w-[11px] h-[15px] bg-[position:-5px_-35px] inline-block bg-[length:400px_900px] bg-no-repeat"
                  style={{
                    backgroundImage: `url(https://m.media-amazon.com/images/S/sash/f9Cwl2OUDVHGXk8.png)`,
                  }}
                ></i>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="text-[15px] mb-3 ">
              Free delivery{" "}
              <span className="font-fontBold">Saturday, 23 August</span> on your
              first order. Order within{" "}
              <span className="text-[#067D62]">18 hrs 7 min</span>.{" "}
              <span className="text-[#2162a1] underline">Details</span>
            </div>
            <div className="flex">
              <span
                className="min-w-4 h-5 bg-no-repeat bg-[length:auto] bg-center mb-px mr-1.5"
                style={{
                  backgroundImage: `url(https://m.media-amazon.com/images/S/sash/rmbns9hA-ND5Ju7.png)`,
                }}
              ></span>
              <span className="text-[15px] text-[#2162a1]">
                Delivering to Kalpatta 673122 - Update location
              </span>
            </div>
            <div className="pt-1 mt-1 mb-4 text-lg leading-[1.25] text-[#0b7b3c]">
              In stock
            </div>
            <select
              className=" mb-[21px] p-[11px_39px_11px_16px]  h-11 left-0 w-full rounded-sm relative z-[1] border border-[#d5d9d9] bg-[#f0f2f2] appearance-none"
              name=""
              id=""
            >
              <option value="">Quantity: 1</option>
            </select>
            <i
              className="inline-block bg-[length:400px_900px] bg-no-repeat -mt-1.5 absolute z-[1] top-43 right-3 w-[15px] h-3 bg-[position:-5px_-59px]"
              style={{
                backgroundImage: `url(https://m.media-amazon.com/images/S/sash/McBZv0ZvnbehkIx.png)`,
              }}
            ></i>
            <button className="rounded-[100px] mb-3 w-full bg-[#ffd814] text-center p-[11px_16px_11px_16px] text-[16px] leading-5">
              Add to Cart
            </button>
            <button className="rounded-[100px] mb-3 w-full bg-[#ffa41c] text-center p-[11px_16px_11px_16px] text-[16px] leading-5">
              Buy Now
            </button>

            <div className="grid  w-full grid-cols-[auto_auto] gap-x-2.5 p-[5px]">
              <span className="mb-1 text-[13px] leading-[1.4] text-[#565959]">
                Ships from
              </span>
              <span className="mb-1 text-[13px] leading-[1.4] ">Amazon</span>
              <span className="mb-1 text-[13px] leading-[1.4] text-[#565959]">
                Sold by
              </span>
              <span className="mb-1 text-[13px] leading-[1.4] text-[#2162a1]">
                Cocoblu Retail
              </span>
            </div>

            <div className="p-[6px_6px_6px_4px] relative cursor-pointer ">
              <label className="rounded-[5px] pl-10" htmlFor="gift">
                <i
                  className="absolute left-1 top-1/2 -mt-3 bg-[position:-211px_-357px] align-middle h-[23px] w-[23px] rounded-xs bg-[length:512px_512px] bg-no-repeat inline-block"
                  style={{
                    backgroundImage: `url(	https://m.media-amazon.com/images/S/sash/5iL84kcaRCLp$es.png)`,
                  }}
                ></i>
                <span className="align-middle text-[#0f1111] font-fontReg ">
                  Send as a gift. Include custom message
                </span>
              </label>
            </div>
            <span className="mb-3 text-[#2162a1] font-fontReg">
              Add to Wish List
            </span>
          </div>
          <div className="mt-0.5 bg-white p-[12px_0px]">
            <span className="text-lg font-fontBold text-[#0F1111] leading-[1.35]">
              Shop with confidence
            </span>
            <div className="mb-3 mt-2.5 grid grid-cols-[49%_49%] gap-x-[3vw] ">
              {ProvidingBenefits &&
                ProvidingBenefits.map((item, index) => {
                  return (
                    <div
                      className="inline-flex mb-[13px] gap-x-[7px]"
                      key={index}
                    >
                      <img
                        className="h-5 w-5 mt-0.5 min-w-5 min-h-5 align-top"
                        src={item.img.src}
                        alt={item.img.alt}
                      />
                      <span className="inline-flex mr-0 text-[#2162a1] text-[15px] leading-5 text-left tracking-normal ">
                        {item.benefits}
                      </span>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
}

export default HomeProductData;
