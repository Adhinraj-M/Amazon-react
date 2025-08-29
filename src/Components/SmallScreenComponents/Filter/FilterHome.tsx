import { useContext } from "react";
import { HomeProductContext } from "../../../Context/HomeProductContext";
import { HomeSmallcategories } from "../../../Types/categories";

type filterHomeType = {
  handleCatehide: () => void;
};

function FilterHome({ handleCatehide }: filterHomeType) {
  const { handleFilter, setActiveFilters, activeFilters, handleClearFilter } =
    useContext(HomeProductContext);

  const handleActiveFilters = (index: number) => {
    setActiveFilters((prev) => {
      const newFilters: { [key: number]: boolean } = { ...prev };

      if (index === 0) {
        return { 0: true };
      } else {
        newFilters[index] = !prev[index];

        newFilters[0] = false;

        // This check if any of the index is true and return true
        const hasAnyTrue = Object.entries(newFilters).some(([key, value]) => {
          return key !== "0" && value === true;
        });

        if (!hasAnyTrue) {
          return { 0: true };
        }
      }

      return newFilters;
    });
  };

  return (
    <div className=" translate-y-0 h-full fixed top-auto bottom-0 right-0 left-0 z-[500]">
      <div className="opacity-75 bg-black select-none fixed top-0 right-0 bottom-0 left-0 z-[499]"></div>
      <div className="h-75 max-h-[737px] bg-white absolute right-0 bottom-0 left-0 z-[501]">
        <button
          onClick={handleCatehide}
          className="m-[-14px_-14px_0_0] p-3.5 absolute right-5 -top-9 text-white bg-transparent leading-4 min-w-11 float-right min-h-11 cursor-pointer border-none hover:outline hover:rounded-lg"
        >
          <span
            className="bg-[position:-350px_-110px] h-4 w-4 inline-block align-top bg-[size:400px_900px] bg-no-repeat"
            style={{
              backgroundImage:
                "url(	https://m.media-amazon.com/images/S/sash/f9Cwl2OUDVHGXk8.png)",
            }}
          ></span>
        </button>
        <div className="overflow-y-hidden h-full bg-white overflow-x-hidden ">
          <div className="mb-16 p-3 h-full overflow-auto">
            <h4 className="!mb-2 text-[15px] leading-[1.35] pb-1 font-fontBold">
              Categories
            </h4>
            <div className="flex flex-wrap gap-2">
              {HomeSmallcategories &&
                HomeSmallcategories.map((item, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => handleActiveFilters(index)}
                      className={`ml-[-3px] mr-[-3px] !text-[15px] leading-[1.35] border rounded-[7px] p-[4px_8px] text-center whitespace-nowrap w-auto ${
                        activeFilters[index] !== true
                          ? "bg-white  border-[#e8e8e8]  "
                          : `bg-[#e7fbff]  border-[#bddee3] text-[#007185]  ${
                              index > 0 &&
                              'before:content-["×"] before:text-[15px] before:p-[2px_2px_2px_0]'
                            } `
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
            </div>
          </div>
          <div className="mb-0 bg-white border-t border-b border-[#cbcbcb] fixed bottom-0 h-16 m-0 p-2.5 w-full">
            {activeFilters[0] === false && (
              <button
                onClick={handleClearFilter}
                className="border-[0.5px] border-[#cbcbcb] text-[#007185] float-left max-w-1/2 rounded-lg inline-block h-10.5 overflow-hidden p-2.5 mb-[13px] text-[15px] leading-[1.35]"
              >
                Clear Filters
              </button>
            )}
            <button
              onClick={handleFilter}
              className="rounded-lg mb-0 inline-block h-10.5 overflow-hidden p-2.5 bg-[#007185] text-white max-w-[45%] absolute right-2.5 "
            >
              {activeFilters[0] === false ? (
                <span className="text-[15px] leading-[1.35] relative bottom-0.5">
                  Apply Filters
                </span>
              ) : (
                <span className="text-[15px] leading-[1.35] relative bottom-0.5">
                  Show Products
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterHome;
