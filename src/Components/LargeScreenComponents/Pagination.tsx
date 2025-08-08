import IconImg from "../../../public/icon-image/last.png";
import RatingIcon from "../../../public/icon-image/ProductIcons.png";

function Pagination() {
  return (
    <div className="pt-[44px] relative  bg-white ">
      <div className="border border-[#DDD] rounded-[5px] px-5">

        {/* pagination Components */}

        <div className="p-2.5 !mb-6 ">
          <div className="w-full flex justify-between mb-5 text-lg leading-6 ">
            <div className="w-[65.948%] mr-[2%] float-left min-h-px overflow-visible ">
              <h2 className="inline-block font-fontBold pb-1">
                Pick up where you left off
              </h2>
              <a
                className="inline-block text-sm leading-5 text-[#2162a1] no-underline ml-1"
                href="#"
              >
                See more
              </a>
            </div>
            <div className="mr-0 float-right w-[31.948%] min-h-px overflow-visible text-right">
              <span className="text-sm leading-5 text-right">
                Page <span className="">1</span> of <span className="">8</span>
              </span>
            </div>
          </div>
          <div className="w-full relative h-full ">
            <div className="h-103 visible z-10 w-[42px] flex -mt-4 absolute top-0 left-0 pl-[5px] overflow-visible min-h-px">
              <button className="rounded-lg relative self-center  border bg-white border-[#888c8c] inline-block p-0 text-center align-middle cursor-pointer w-[34px] h-[37px]">
                <i
                  className="m-[5px_6px_5px_5px] w-[11px] h-[15px] bg-[position:-123px_-7px] inline-block align-top bg-no-repeat bg-[length:400px_900px] p-1.5"
                  style={{ backgroundImage: `url(${IconImg})` }}
                ></i>
              </button>
            </div>
            <div className="mx-[42px] overflow-hidden relative h-103">
              <ol className="m-0 h-full flex whitespace-nowrap overflow-x-visible text-[#0f1111] tracking-[-4px] list-none ">
                <li className="w-[165px] ml-[15px] overflow p-[5px_0] align-top text-left min-h-full tracking-normal">
                  <div className="!mb-1 relative">
                    <img
                      className="max-w-[165px] max-h-[165px]"
                      src="https://images-eu.ssl-images-amazon.com/images/I/61w9nwRsKoL._AC_UL165_SR165,165_.jpg"
                      alt=""
                    />
                  </div>
                  <div className="relative tracking-normal">
                    <span className="max-h-20 line-clamp-4  text-[#2162a1] text-sm tracking-normal whitespace-normal leading-5">
                      JPT F10 Car Washer High Pressure Pump | 2400 Watt Powerful
                      Motor | Pressure - 220 BAR | Flow Rate 10L/Min | Heavy
                      Duty Deep-Cleaner Washing Machine for Cars, Bikes, Floor &
                      Home | 100% Copper Winding
                    </span>
                    <span className="pt-px pb-px  h-full flex">
                      <i
                        className="bg-[position:-210px_-468px] bg-[length:512px_512px] bg-no-repeat align-top h-[18px] w-20 relative inline-block"
                        style={{ backgroundImage: `url(${RatingIcon})` }}
                      ></i>
                      <span className="text-xs !leading-4 text-[#2162a1] ml-0.5">
                        2,891
                      </span>
                    </span>
                  </div>
                  <div className="flex text-xs items-center gap-1.5 justify-between mb-1 mt-[3px]">
                    <div className="bg-[#CC0C39] text-white rounded-xs leading-4 p-[4px_6px] relative ">
                      45% off
                    </div>
                    <div className="bg-white text-[#CC0C39] flex-[1_1] font-fontBold leading-3 relative">
                      Limited time deal
                    </div>
                  </div>
                  <div className="leading-5">
                    <span className="text-[17px] text-[#0f1111] block leading-[22px]">
                      ₹9,399.00
                    </span>
                    <span className="text-xs leading-4">
                      M.R.P: <span className="line-through">₹16,999.00</span>
                    </span>
                  </div>
                  <div className="text-[#0f1111] text-xs leading-4">
                    Get it by <b>Saturday, August 9</b>
                  </div>
                  <span className="text-[#0f1111] text-xs leading-4">
                    FREE Delivery by Amazon
                  </span>
                </li>
                <li className="w-[165px] ml-[15px] overflow p-[5px_0] align-top text-left min-h-full tracking-normal">
                  <div className="!mb-1 relative">
                    <img
                      className="max-w-[165px] max-h-[165px]"
                      src="https://images-eu.ssl-images-amazon.com/images/I/61w9nwRsKoL._AC_UL165_SR165,165_.jpg"
                      alt=""
                    />
                  </div>
                  <div className="relative tracking-normal">
                    <span className="max-h-20 line-clamp-4  text-[#2162a1] text-sm tracking-normal whitespace-normal leading-5">
                      JPT F10 Car Washer High Pressure Pump | 2400 Watt Powerful
                      Motor | Pressure - 220 BAR | Flow Rate 10L/Min | Heavy
                      Duty Deep-Cleaner Washing Machine for Cars, Bikes, Floor &
                      Home | 100% Copper Winding
                    </span>
                    <span className="pt-px pb-px  h-full flex">
                      <i
                        className="bg-[position:-210px_-468px] bg-[length:512px_512px] bg-no-repeat align-top h-[18px] w-20 relative inline-block"
                        style={{ backgroundImage: `url(${RatingIcon})` }}
                      ></i>
                      <span className="text-xs !leading-4 text-[#2162a1] ml-0.5">
                        2,891
                      </span>
                    </span>
                  </div>
                  <div className="flex text-xs items-center gap-1.5 justify-between mb-1 mt-[3px]">
                    <div className="bg-[#CC0C39] text-white rounded-xs leading-4 p-[4px_6px] relative ">
                      45% off
                    </div>
                    <div className="bg-white text-[#CC0C39] flex-[1_1] font-fontBold leading-3 relative">
                      Limited time deal
                    </div>
                  </div>
                  <div className="leading-5">
                    <span className="text-[17px] text-[#0f1111] block leading-[22px]">
                      ₹9,399.00
                    </span>
                    <span className="text-xs leading-4">
                      M.R.P: <span className="line-through">₹16,999.00</span>
                    </span>
                  </div>
                  <div className="text-[#0f1111] text-xs leading-4">
                    Get it by <b>Saturday, August 9</b>
                  </div>
                  <span className="text-[#0f1111] text-xs leading-4">
                    FREE Delivery by Amazon
                  </span>
                </li>
                <li className="w-[165px] ml-[15px] overflow p-[5px_0] align-top text-left min-h-full tracking-normal">
                  <div className="!mb-1 relative">
                    <img
                      className="max-w-[165px] max-h-[165px]"
                      src="https://images-eu.ssl-images-amazon.com/images/I/61w9nwRsKoL._AC_UL165_SR165,165_.jpg"
                      alt=""
                    />
                  </div>
                  <div className="relative tracking-normal">
                    <span className="max-h-20 line-clamp-4  text-[#2162a1] text-sm tracking-normal whitespace-normal leading-5">
                      JPT F10 Car Washer High Pressure Pump | 2400 Watt Powerful
                      Motor | Pressure - 220 BAR | Flow Rate 10L/Min | Heavy
                      Duty Deep-Cleaner Washing Machine for Cars, Bikes, Floor &
                      Home | 100% Copper Winding
                    </span>
                    <span className="pt-px pb-px  h-full flex">
                      <i
                        className="bg-[position:-210px_-468px] bg-[length:512px_512px] bg-no-repeat align-top h-[18px] w-20 relative inline-block"
                        style={{ backgroundImage: `url(${RatingIcon})` }}
                      ></i>
                      <span className="text-xs !leading-4 text-[#2162a1] ml-0.5">
                        2,891
                      </span>
                    </span>
                  </div>
                  <div className="flex text-xs items-center gap-1.5 justify-between mb-1 mt-[3px]">
                    <div className="bg-[#CC0C39] text-white rounded-xs leading-4 p-[4px_6px] relative ">
                      45% off
                    </div>
                    <div className="bg-white text-[#CC0C39] flex-[1_1] font-fontBold leading-3 relative">
                      Limited time deal
                    </div>
                  </div>
                  <div className="leading-5">
                    <span className="text-[17px] text-[#0f1111] block leading-[22px]">
                      ₹9,399.00
                    </span>
                    <span className="text-xs leading-4">
                      M.R.P: <span className="line-through">₹16,999.00</span>
                    </span>
                  </div>
                  <div className="text-[#0f1111] text-xs leading-4">
                    Get it by <b>Saturday, August 9</b>
                  </div>
                  <span className="text-[#0f1111] text-xs leading-4">
                    FREE Delivery by Amazon
                  </span>
                </li>
                <li className="w-[165px] ml-[15px] overflow p-[5px_0] align-top text-left min-h-full tracking-normal">
                  <div className="!mb-1 relative">
                    <img
                      className="max-w-[165px] max-h-[165px]"
                      src="https://images-eu.ssl-images-amazon.com/images/I/61w9nwRsKoL._AC_UL165_SR165,165_.jpg"
                      alt=""
                    />
                  </div>
                  <div className="relative tracking-normal">
                    <span className="max-h-20 line-clamp-4  text-[#2162a1] text-sm tracking-normal whitespace-normal leading-5">
                      JPT F10 Car Washer High Pressure Pump | 2400 Watt Powerful
                      Motor | Pressure - 220 BAR | Flow Rate 10L/Min | Heavy
                      Duty Deep-Cleaner Washing Machine for Cars, Bikes, Floor &
                      Home | 100% Copper Winding
                    </span>
                    <span className="pt-px pb-px  h-full flex">
                      <i
                        className="bg-[position:-210px_-468px] bg-[length:512px_512px] bg-no-repeat align-top h-[18px] w-20 relative inline-block"
                        style={{ backgroundImage: `url(${RatingIcon})` }}
                      ></i>
                      <span className="text-xs !leading-4 text-[#2162a1] ml-0.5">
                        2,891
                      </span>
                    </span>
                  </div>
                  <div className="flex text-xs items-center gap-1.5 justify-between mb-1 mt-[3px]">
                    <div className="bg-[#CC0C39] text-white rounded-xs leading-4 p-[4px_6px] relative ">
                      45% off
                    </div>
                    <div className="bg-white text-[#CC0C39] flex-[1_1] font-fontBold leading-3 relative">
                      Limited time deal
                    </div>
                  </div>
                  <div className="leading-5">
                    <span className="text-[17px] text-[#0f1111] block leading-[22px]">
                      ₹9,399.00
                    </span>
                    <span className="text-xs leading-4">
                      M.R.P: <span className="line-through">₹16,999.00</span>
                    </span>
                  </div>
                  <div className="text-[#0f1111] text-xs leading-4">
                    Get it by <b>Saturday, August 9</b>
                  </div>
                  <span className="text-[#0f1111] text-xs leading-4">
                    FREE Delivery by Amazon
                  </span>
                </li>
                <li className="w-[165px] ml-[15px] overflow p-[5px_0] align-top text-left min-h-full tracking-normal">
                  <div className="!mb-1 relative">
                    <img
                      className="max-w-[165px] max-h-[165px]"
                      src="https://images-eu.ssl-images-amazon.com/images/I/61w9nwRsKoL._AC_UL165_SR165,165_.jpg"
                      alt=""
                    />
                  </div>
                  <div className="relative tracking-normal">
                    <span className="max-h-20 line-clamp-4  text-[#2162a1] text-sm tracking-normal whitespace-normal leading-5">
                      JPT F10 Car Washer High Pressure Pump | 2400 Watt Powerful
                      Motor | Pressure - 220 BAR | Flow Rate 10L/Min | Heavy
                      Duty Deep-Cleaner Washing Machine for Cars, Bikes, Floor &
                      Home | 100% Copper Winding
                    </span>
                    <span className="pt-px pb-px  h-full flex">
                      <i
                        className="bg-[position:-210px_-468px] bg-[length:512px_512px] bg-no-repeat align-top h-[18px] w-20 relative inline-block"
                        style={{ backgroundImage: `url(${RatingIcon})` }}
                      ></i>
                      <span className="text-xs !leading-4 text-[#2162a1] ml-0.5">
                        2,891
                      </span>
                    </span>
                  </div>
                  <div className="flex text-xs items-center gap-1.5 justify-between mb-1 mt-[3px]">
                    <div className="bg-[#CC0C39] text-white rounded-xs leading-4 p-[4px_6px] relative ">
                      45% off
                    </div>
                    <div className="bg-white text-[#CC0C39] flex-[1_1] font-fontBold leading-3 relative">
                      Limited time deal
                    </div>
                  </div>
                  <div className="leading-5">
                    <span className="text-[17px] text-[#0f1111] block leading-[22px]">
                      ₹9,399.00
                    </span>
                    <span className="text-xs leading-4">
                      M.R.P: <span className="line-through">₹16,999.00</span>
                    </span>
                  </div>
                  <div className="text-[#0f1111] text-xs leading-4">
                    Get it by <b>Saturday, August 9</b>
                  </div>
                  <span className="text-[#0f1111] text-xs leading-4">
                    FREE Delivery by Amazon
                  </span>
                </li>
                <li className="w-[165px] ml-[15px] overflow p-[5px_0] align-top text-left min-h-full tracking-normal">
                  <div className="!mb-1 relative">
                    <img
                      className="max-w-[165px] max-h-[165px]"
                      src="https://images-eu.ssl-images-amazon.com/images/I/61w9nwRsKoL._AC_UL165_SR165,165_.jpg"
                      alt=""
                    />
                  </div>
                  <div className="relative tracking-normal">
                    <span className="max-h-20 line-clamp-4  text-[#2162a1] text-sm tracking-normal whitespace-normal leading-5">
                      JPT F10 Car Washer High Pressure Pump | 2400 Watt Powerful
                      Motor | Pressure - 220 BAR | Flow Rate 10L/Min | Heavy
                      Duty Deep-Cleaner Washing Machine for Cars, Bikes, Floor &
                      Home | 100% Copper Winding
                    </span>
                    <span className="pt-px pb-px  h-full flex">
                      <i
                        className="bg-[position:-210px_-468px] bg-[length:512px_512px] bg-no-repeat align-top h-[18px] w-20 relative inline-block"
                        style={{ backgroundImage: `url(${RatingIcon})` }}
                      ></i>
                      <span className="text-xs !leading-4 text-[#2162a1] ml-0.5">
                        2,891
                      </span>
                    </span>
                  </div>
                  <div className="flex text-xs items-center gap-1.5 justify-between mb-1 mt-[3px]">
                    <div className="bg-[#CC0C39] text-white rounded-xs leading-4 p-[4px_6px] relative ">
                      45% off
                    </div>
                    <div className="bg-white text-[#CC0C39] flex-[1_1] font-fontBold leading-3 relative">
                      Limited time deal
                    </div>
                  </div>
                  <div className="leading-5">
                    <span className="text-[17px] text-[#0f1111] block leading-[22px]">
                      ₹9,399.00
                    </span>
                    <span className="text-xs leading-4">
                      M.R.P: <span className="line-through">₹16,999.00</span>
                    </span>
                  </div>
                  <div className="text-[#0f1111] text-xs leading-4">
                    Get it by <b>Saturday, August 9</b>
                  </div>
                  <span className="text-[#0f1111] text-xs leading-4">
                    FREE Delivery by Amazon
                  </span>
                </li>
              </ol>
            </div>

            <div className="h-103 visible z-10 flex w-[42px] -mt-4 absolute top-0 right-0 pl-[5px] overflow-visible min-h-px">
               <button className="rounded-lg relative  self-center border bg-white border-[#888c8c] inline-block p-0 text-center align-middle cursor-pointer w-[34px] h-[37px]">
                 <i
                  className="m-[5px_6px_5px_5px] w-[11px] h-[15px] bg-[position:-105px_-7px] inline-block align-top bg-no-repeat bg-[length:400px_900px] p-1.5"
                  style={{ backgroundImage: `url(${IconImg})` }}></i>
              </button>
            </div>

          </div>
        </div>

        <div className="border-t border-t-[#DDD] h-[17px]"></div>


      {/* see personalized recommendations */}


        <div className="mt-[19px] mb-[17px] border-0 leading-[15px] px-5 text-center pb-5">
          <h2  className="pb-1 font-fontBold text-2xl leading-8">See personalized recommendations</h2>
          <button className="rounded-[100px] !w-[17%] bg-[#ffd814] border-[#ffd814] inline-block p-0 text-center cursor-pointer !my-1 h-7.5 text-[13px] leading-[30px]">Sign in</button>
        <div className="leading-[15px] text-[11px] ">New customer? <a className="text-[#2162a1] !underline" href="#">Start here</a></div>
        </div>
      </div>
        <div className="pt-5"></div>
    </div>
  );
}

export default Pagination;

