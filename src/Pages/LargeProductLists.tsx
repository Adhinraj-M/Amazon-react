import { useContext } from "react"
import DeskHeader from "../Components/LargeScreenComponents/DeskHeader"
import NavDesk from "../Components/LargeScreenComponents/NavDesk"
import { ToggleContext } from "../Context/toggleContext"

function LargeProductLists() {
    const {handleSideBar,showHeader} = useContext(ToggleContext)
    

  return (
    <div className="min-large:block">
      <DeskHeader stickHeader={showHeader} />
      <NavDesk sideBar={handleSideBar} />
      {/* category list  */}
      <div className="flex justify-between h-12.5 bg-white shadow-[0_0_1px_#ddd] z-[1] relative m-0 p-[0_9px_0_15px] overflow-hidden border-t border-t-[rgba(0,0,0,.17)] border-b border-b-[rgba(0,0,0,.1)] whitespace-nowrap">
        <button className="flex-[0_0_auto] inline-block relative text-center align-middle h-12 leading-12.5 float-none p-[0_13px] text-xs text-[#333] cursor-pointer">
          {/* now img is used instead of text */}
          <img
            className="h-12.5 align-baseline w-auto pt-[5px]"
            src="https://m.media-amazon.com/images/G/31/img18/Electronics/Megamenu/Megamenu_Electronics_top._CB485947327_.png"
            alt="Electronics"
          />
        </button>
        <button className="flex-[0_0_auto] inline-block relative text-center align-middle h-12 leading-12.5 float-none p-[0_13px] text-xs text-[#333] cursor-pointer">
          Mobiles & Accessories
        </button>
        <button className="flex-[0_0_auto] inline-block relative text-center align-middle h-12 leading-12.5 float-none p-[0_13px] text-xs text-[#333] cursor-pointer">
          Laptops & Accessories
        </button>
        <button className="flex-[0_0_auto] inline-block relative text-center align-middle h-12 leading-12.5 float-none p-[0_13px] text-xs text-[#333] cursor-pointer">
          TV & Home Entertainment
        </button>
        <button className="flex-[0_0_auto] inline-block relative text-center align-middle h-12 leading-12.5 float-none p-[0_13px] text-xs text-[#333] cursor-pointer">
          Audio
        </button>
        <button className="flex-[0_0_auto] inline-block relative text-center align-middle h-12 leading-12.5 float-none p-[0_13px] text-xs text-[#333] cursor-pointer">
          Cameras
        </button>
        <button className="flex-[0_0_auto] inline-block relative text-center align-middle h-12 leading-12.5 float-none p-[0_13px] text-xs text-[#333] cursor-pointer">
          Computer Peripherals
        </button>
        <button className="flex-[0_0_auto] inline-block relative text-center align-middle h-12 leading-12.5 float-none p-[0_13px] text-xs text-[#333] cursor-pointer">
          Smart Technology
        </button>
      </div>
      {/* sort & filter buttons */}

      <div className="mb-2 h-[calc(100%-8px)] border-t border-t-[#ccc] border-b border-b-[#ccc] shadow-[0_0_10px_#ddd] bg-white relative ">
        <div className="max-w-450 items-center flex flex-wrap content-start w-[calc(100vw - 28px + 4px)] p-0 min-w-[269px] mx-3 justify-between">
          <div className="flex  items-center w-[calc(.66667 * (100vw - 28px))] min-w-[179.33px] max-w-[1197.33px] p-[0_4px] before:content-[''] before: ">
            <button className="rounded-[100px] m-1.5 border border-[#888c8c] flex items-center justify-center w-16 p-[0_12px_0_12px] text-[13px] text-center bg-transparent h-8  outline-none">
              <span
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(5%) sepia(4%) saturate(1251%) hue-rotate(131deg) brightness(91%) contrast(95%)",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-label="Filters"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.1429 4C11.774 4 12.2857 4.52912 12.2857 5.18182V8.72727C12.2857 9.37997 11.774 9.90909 11.1429 9.90909C10.5117 9.90909 10 9.37997 10 8.72727V8.72727C10 8.40092 9.73544 8.13636 9.40909 8.13636H3.14286C2.51167 8.13636 2 7.60725 2 6.95455C2 6.30185 2.51167 5.77273 3.14286 5.77273H9.40909C9.73544 5.77273 10 5.50817 10 5.18182V5.18182C10 4.52912 10.5117 4 11.1429 4Z"
                    fill="#007185"
                  ></path>
                  <path
                    d="M10 11.8636C9.36882 11.8636 8.85714 12.3928 8.85714 13.0455C8.85714 13.6982 9.36882 14.2273 10 14.2273H16.8571C17.4883 14.2273 18 13.6982 18 13.0455C18 12.3928 17.4883 11.8636 16.8571 11.8636H10Z"
                    fill="#007185"
                  ></path>
                  <path
                    d="M7.71429 11.2727C7.71429 10.62 7.20261 10.0909 6.57143 10.0909C5.94025 10.0909 5.42857 10.62 5.42857 11.2727V11.2727C5.42857 11.5991 5.16401 11.8636 4.83766 11.8636H3.14286C2.51167 11.8636 2 12.3928 2 13.0455C2 13.6982 2.51167 14.2273 3.14286 14.2273H4.83766C5.16401 14.2273 5.42857 14.4918 5.42857 14.8182V14.8182C5.42857 15.4709 5.94025 16 6.57143 16C7.20261 16 7.71429 15.4709 7.71429 14.8182V11.2727Z"
                    fill="#007185"
                  ></path>
                  <path
                    d="M13.4286 6.95455C13.4286 6.30185 13.9402 5.77273 14.5714 5.77273H16.8571C17.4883 5.77273 18 6.30185 18 6.95455C18 7.60725 17.4883 8.13636 16.8571 8.13636H14.5714C13.9402 8.13636 13.4286 7.60725 13.4286 6.95455Z"
                    fill="#007185"
                  ></path>
                </svg>
              </span>
            </button>

            <h2 className="my-2 text-sm leading-5 ml-2">1-24 of 246 results</h2>
          </div>

          <div className="block w-[calc(.3333 * (100vw - 28px))] min-w-[89.67px] max-w-[598.67px] pl-1 pr-2 h-full relative">
           <div className="bg-[#f0f0f0] p-[0_26px_0_8px] rounded-lg border border-[#d5d9d9] flex items-center ">
             <label
              className="z-[1] relative max-w-full left-0 top-px pl-0.5 pb-0.5 !text-[11px] !leading-5 "
              htmlFor="sort-select">
              Sort by:&nbsp;&nbsp;
            </label>
            <select className="!text-[11px] !leading-5 appearance-none" name="" id="">
              <option className="" value="">Bestselling</option>
            </select>
            <i className="absolute right-[17px] top-[7px] w-2.5 h-2 bg-[position:-7px_-102px] inline-block align-top bg-[length:400px_900px] bg-no-repeat "style={{backgroundImage:`url(https://m.media-amazon.com/images/S/sash/McBZv0ZvnbehkIx.png)`}}></i>
           </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default LargeProductLists




