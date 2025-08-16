import { MdKeyboardArrowDown } from "react-icons/md";
import SortButtons from "./SortButtons";


function SortCategory() {

const sortCategories:string[]=[' Under ₹299','₹300 - ₹599','₹600 - ₹999','₹1,000 and above']


  return (
    <div className="sticky top-12 bg-[transparent] shadow-[0_1px_2px_0_hsla(0,0%,7%,.15)] -ml-2 -mr-2 z-[208] !mb-2  ">
        <div className="mb-0 bg-white flex ml-2 mr-0 overflow-x-auto pb-2 pt-2 scroll-width-none">
            <div className="mr-2 bg-white border border-[#e8e8e8] rounded-[7px] p-[4px_8px] text-center whitespace-nowrap w-auto">
                <button className="flex gap-1 -ml-[3px] -mr-[3px] !text-[15px] !leading-[1.35] text-[#111]">
                    Categories <span className="flex items-center"><MdKeyboardArrowDown className="h-[15px] w-[15px]"/></span>
                </button>
            </div>
                {
                    sortCategories && sortCategories.map((item,index)=>{
                        return(
                            <div key={index}>
                                <SortButtons priceRange={item}/>
                            </div>
                        )
                    })
                }
        </div>

      
    </div>
  )
}

export default SortCategory