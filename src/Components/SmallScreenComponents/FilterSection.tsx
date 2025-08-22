import { useContext } from "react";
import type { CategoryFilter } from "../../Types/product";
import { ProductListContext } from "../../Context/ProductListContext";

type filterSectionType = {
  handleModal: () => void;
  filterCategory: CategoryFilter[];
};

function FilterSection({ handleModal, filterCategory }: filterSectionType) {
  const {
    sliderValue,
    activeIndex,
    handleCategory,
    filterBtn,
    activeFilter,
    handleActiveFilter,
    handleRating,
    handleClearFilter,
    handleSliderValue,
    handleFilters,
  } = useContext(ProductListContext);

  console.log("activeFilter",activeFilter)

  let count = Object.values(activeFilter).flat().length;


  

  const min: number = 115;
  const max: number = 3999;
  const percent1: number = ((sliderValue.sliderOne - min) / (max - min)) * 100;
  const percent2: number = ((sliderValue.sliderTwo - min) / (max - min)) * 100;
  const left: number = Math.min(percent1, percent2);
  const width: number = Math.abs(percent2 - percent1);

  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 z-[9999]">
      <div className="bg-[rgba(0,0,0,.2)] opacity-100 h-full w-full absolute"></div>
      <section className="!h-[calc(100%-100px)] bg-white fixed right-0 bottom-0 left-0 z-[501]">
        <div className="border-b-[#f4d8da] fixed flex w-full h-12 left-0 right-0 m-0 bg-white border-b z-[600] justify-between items-center transform-[translate3d(0,0,0)]">
          <div className="mx-3 whitespace-nowrap float-left mb-0 font-fontBold leading-[20.25px]">
            <span className="text-[15px]">Filters</span>
            {count > 0 && <span className="text-[15px]"> ({count})</span>}
          </div>
          <div className="mx-3 relative top-1" onClick={handleModal}>
            <i
              className=" h-3 w-3 bg-[position:-489px_-498px] bg-[length:512px_512px] bg-no-repeat inline-block align-top"
              style={{
                backgroundImage: `url(https://m.media-amazon.com/images/S/sash/VRxFMfjvVeE5Eoy.png)`,
              }}
            ></i>
          </div>
        </div>

        <div className="mt-12 mb-11.5 flex w-full ">
          <div className="flex flex-col shrink-0 mb-0 w-30 overflow-y-auto bg-[#f7fafa] relative">
            {filterCategory &&
              filterCategory.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${
                      activeIndex === index
                        ? "border-b-[#e3e6e6] items-center border-b z-[1] bg-white"
                        : "bg-[#fff9f6] border-b-[#fee4d9] items-center border-b z-[1]"
                    } `}
                    onClick={() => handleCategory(index)}
                  >
                    <div
                      className={`p-[8px_12px] flex  min-h-13 mb-0 relative  items-center text-ellipsis w-23 leading-[1.4] text-[13px] ${
                        activeIndex === index
                          ? '  text-[#eb1745] font-fontBold before:bg-[#eb1745] before:w-1 before:h-full before:content-[""] before:absolute before:left-0 before:right-0'
                          : ' after:w-1 after:h-full after:content-[""] after:absolute after:-right-7 after:bg-[linear-gradient(270deg,rgba(15,17,17,.04)_0,rgba(15,17,17,0)_100%)]'
                      }`}
                    >
                      {item.filter_Type}
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="overflow-y-auto pt-3 w-full">
            <div className="p-[0_12px]">
              <h2 className="text-[15px] !leading-[1.35] font-fontBold !pb-4">
                {filterCategory[activeIndex]?.filter_Type}
              </h2>
              <h2 className="text-[13px] !leading-[20.25px] font-fontBold mb-2 relative top-px">
                {filterCategory[activeIndex]?.filter_Type !==
                  filterCategory[activeIndex]?.filter_sub_head && (
                  <span> {filterCategory[activeIndex].filter_sub_head}</span>
                )}
              </h2>
              <div className="mb-1 flex flex-wrap">
                {filterBtn?.filter_buttons.length > 0 ? (
                  filterBtn?.filter_buttons.map((item, index) => {
                    return (
                      <div key={index} className="">
                        {item === "All Prices" && (
                          <div className="mb-[17px] mr-6 p-[12px_9px] bg-[#f4f4f4] rounded-lgrelative w-[207px]">
                            <div className="flex pb-1 mb-1">
                              <span className="mr-1 p-0 font-fontBold text-[15px] leading-[1.35]">
                                ₹{sliderValue.sliderOne}
                              </span>
                              <span className="mr-1 p-0 font-fontBold text-[15px] leading-[1.35]">
                                –
                              </span>
                              <span className="mr-1 p-0 font-fontBold text-[15px] leading-[1.35]">
                                ₹{sliderValue.sliderTwo}+
                              </span>
                            </div>

                            <div className="flex pb-2 mb-1">
                              <div className="flex-1 p-[10px_0] my-3 relative">
                                <div className="absolute h-1  top-1/2 bg-[#ddd] translate-y-1/2 w-full rounded-[5px]"></div>
                                <div
                                  className="absolute h-1 bg-[#007185]  translate-y-1/2  rounded-[5px]"
                                  style={{
                                    left: `${left}%`,
                                    width: `${width}%`,
                                  }}
                                ></div>
                                <input
                                  type="range"
                                  min={"115"}
                                  max={"3499"}
                                  name="sliderOne"
                                  value={sliderValue.sliderOne}
                                  onChange={handleSliderValue}
                                  className="input-range cursor-pointer absolute pointer-events-none bg-transparent z-[2] text-[#bbbfbf] appearance-none w-full h-1 leading-[1.35]"
                                />
                                <input
                                  type="range"
                                  min={"185"}
                                  max={"3999"}
                                  name="sliderTwo"
                                  value={sliderValue.sliderTwo}
                                  onChange={handleSliderValue}
                                  className="input-range cursor-pointer absolute pointer-events-none bg-transparent z-[3] text-[#bbbfbf] appearance-none w-full h-1 leading-[1.35]"
                                />
                              </div>
                            </div>
                          </div>
                        )}
                        <button
                          onClick={() =>
                            handleActiveFilter(
                              index,
                              item,
                              filterBtn.filter_Type
                            )
                          }
                          className={`p-[7px_8px] rounded-lg w-fit mb-2 mr-2 border  text-center inline-flex items-center justify-center text-[13px] leading-[1.4] ${
                            activeFilter[filterBtn.filter_Type]?.includes(index)
                              ? "bg-[#f9d52a]  border-[#f34552] "
                              : "border-[#e9e8e8] bg-white "
                          }`}
                        >
                          {filterCategory[activeIndex].filter_Type ===
                            "Colours" && (
                            <span
                              className="w-3.5 h-3.5 rounded-sm mr-0.5"
                              style={{ backgroundColor: `${item}` }}
                            ></span>
                          )}
                          <span>{item}</span>
                        </button>
                      </div>
                    );
                  })
                ) : (
                  <button
                    onClick={() => handleRating()}
                    className={`mr-2 shrink-0 whitespace-nowrap h-8 flex items-center p-[9px] rounded-lg w-auto border  text-center  justify-center${
                      activeFilter["Customer Rating"]
                        ? " bg-[#f9d52a] border-[#f34552]"
                        : " border-[#e8e8e8] bg-white "
                    }`}
                  >
                    <div className="flex pb-0.5 mr-1">
                      {Array.from({ length: 4 }).map((_, index) => (
                        <span
                          key={index}
                          className="w-4 h-[15px] "
                          style={{
                            backgroundImage: `url(https://m.media-amazon.com/images/S/sash/1B5nH39U5U0JHHA.svg)`,
                          }}
                        ></span>
                      ))}
                    </div>
                    <span className="text-sm leading-5 align-text-bottom text-black ">
                      & Up
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-t-[#f34552] fixed w-full bottom-0 bg-white m-0 h-15.5 p-3 z-[600] flex justify-center items-center">
        <div className="flex h-fit w-full justify-between ">
          <button
            className="flex w-24.5 border p-[10px_12px] border-[#f4d8da]  rounded-lg justify-center items-center bg-white text-[13px] leading-[1.4] shadow-[0px_2px_5px_0px_rgba(213,217,217,0.5)]"
            onClick={handleClearFilter}
          >
            Clear Filters{" "}
          </button>
          <button
            className="flex w-35  border p-[10px_12px] border-[#ff4d5b]  rounded-lg justify-center items-center bg-[#ff4d5b] text-[13px] text-white leading-[1.4] shadow-[0px_2px_5px_0px_rgba(213,217,217,0.5)]"
            onClick={handleFilters}
          >
            Show  results
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
