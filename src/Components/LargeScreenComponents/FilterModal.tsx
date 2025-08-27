import { useContext } from "react";
import { ProductListContext } from "../../Context/ProductListContext";
import type { CategoryFilter } from "../../Types/product";

type filterModalType = {
  filterBtn: CategoryFilter;
  index: number;
  subhead: string;
};

function FilterModal({ filterBtn, index, subhead }: filterModalType) {
  const {
    handleFilters,
    handleActiveFilter,
    handleCategoryClear,
    activeFilter,
    handleRating,
    handleFilterModal,
    modalIndex,
  } = useContext(ProductListContext);

  return (
    <div className="top-13.5 left-auto absolute z-[1] bg-white border border-[#d5d9d9] rounded-lg shadow-[1px_1px_10px_0px_rgba(0,0,0,.3)] max-w-125 min-w-100 p-[8px_16px_12px]">
      <span className="top-[-15px] left-[65.4531px] border-8 absolute z-[1] border-b-white border-transparent"></span>
      <button
        className="flex h-7.5 justify-center absolute right-1 top-1 w-7.5 z-[1] items-center cursor-pointer"
        onClick={() => handleFilterModal(index)}
      >
        <svg
          role="img"
          aria-label="Close button"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Close button</title>
          <path
            d="M9.40864 7.99915L13.7045 3.71268C13.7976 3.61952 13.8715 3.50892 13.9219 3.3872C13.9723 3.26548 13.9983 3.13502 13.9983 3.00326C13.9983 2.87151 13.9723 2.74105 13.9219 2.61933C13.8715 2.49761 13.7976 2.38701 13.7045 2.29385C13.6113 2.20069 13.5008 2.12679 13.3791 2.07637C13.2573 2.02595 13.1269 2 12.9952 2C12.8634 2 12.733 2.02595 12.6113 2.07637C12.4896 2.12679 12.379 2.20069 12.2859 2.29385L8 6.59031L3.71414 2.29385C3.62099 2.20069 3.51041 2.12679 3.38871 2.07637C3.267 2.02595 3.13656 2 3.00483 2C2.8731 2 2.74265 2.02595 2.62095 2.07637C2.49924 2.12679 2.38866 2.20069 2.29551 2.29385C2.10739 2.482 2.00171 2.73718 2.00171 3.00326C2.00171 3.26935 2.10739 3.52453 2.29551 3.71268L6.59136 7.99915L2.29551 12.2856C2.20187 12.3785 2.12755 12.489 2.07683 12.6108C2.02611 12.7325 2 12.8631 2 12.995C2 13.1269 2.02611 13.2575 2.07683 13.3793C2.12755 13.501 2.20187 13.6116 2.29551 13.7044C2.38839 13.7981 2.49888 13.8724 2.62062 13.9232C2.74236 13.9739 2.87294 14 3.00483 14C3.13671 14 3.26729 13.9739 3.38903 13.9232C3.51077 13.8724 3.62127 13.7981 3.71414 13.7044L8 9.40799L12.2859 13.7044C12.3787 13.7981 12.4892 13.8724 12.611 13.9232C12.7327 13.9739 12.8633 14 12.9952 14C13.1271 14 13.2576 13.9739 13.3794 13.9232C13.5011 13.8724 13.6116 13.7981 13.7045 13.7044C13.7981 13.6116 13.8724 13.501 13.9232 13.3793C13.9739 13.2575 14 13.1269 14 12.995C14 12.8631 13.9739 12.7325 13.9232 12.6108C13.8724 12.489 13.7981 12.3785 13.7045 12.2856L9.40864 7.99915Z"
            fill="#0F1111"
          ></path>
        </svg>
      </button>

      <div className="p-0 mx-5 bg-white ">
        <h1 className="text-lg leading-6 font-fontBold">{subhead}</h1>
        <div className="relative p-0 h-[74px] min-h-[45px] pt-2 pb-[3px] flex flex-wrap ">
          {filterBtn.filter_buttons.length > 0 ? (
            filterBtn.filter_buttons.map((btn, i) => {
              return (
                <button
                  key={i}
                  onClick={() =>
                    handleActiveFilter(i, btn, filterBtn.filter_Type)
                  }
                  className={`flex items-center border m-[0_5px_5px_0] ${
                    activeFilter[filterBtn.filter_Type]?.includes(i)
                      ? "border-2 border-[#007185] bg-[#e7fbff]"
                      : "border-[#888c8c] bg-white"
                  }  cursor-pointer  h-8 min-w-14 max-w-47.5 rounded-lg hover:border-[#007185] hover:bg-[#e7fbff]`}>
                  <span className="flex items-center px-3 text-[#0f1111] whitespace-nowrap max-w-40 text-sm leading-[18.2px]">
                    {btn}
                  </span>
                </button>
              );
            })
          ) : (
            <button
              onClick={handleRating}
              className={`mr-2 shrink-0 whitespace-nowrap cursor-pointer h-8 flex items-center p-[9px] rounded-lg w-auto border  text-center  justify-center hover:border-[#007185] hover:bg-[#e7fbf    ${
                activeFilter["Customer Rating"]?.includes(0)
                  ? "border-2 border-[#007185] bg-[#e7fbff]"
                  : "border-[#e8e8e8] bg-white"
              } `}
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

        <button
          onClick={handleFilters}
          className="mt-3 block   relative z-[2] w-37.5 h-9 bg-[#007185]  rounded-lg text-white whitespace-nowrap cursor-pointer hover:bg-[#4b9aa8]"
        >
          Show result
        </button>

        <button
          className="mt-2 h-5 w-fit hover:underline cursor-pointer leading-5 text-sm text-[#007185]"
          onClick={() => handleCategoryClear(modalIndex)}
        >
          Clear filters
        </button>
      </div>
    </div>
  );
}

export default FilterModal;
