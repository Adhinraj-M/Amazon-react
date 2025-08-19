import { MdKeyboardArrowDown } from "react-icons/md";
import FilterHome from "./FilterHome";
import { useContext } from "react";
import { HomeProductContext } from "../../Context/HomeProductContext";
import { priceSortCategories } from "../../Types/categories";


function SortCategory() {
const {handleFilterPrice,selectedPrice,handleCateShow,cateList,selectCateCount,handleClearFilter} = useContext(HomeProductContext)




  return (
    <div className="sticky top-12 bg-[transparent] shadow-[0_1px_2px_0_hsla(0,0%,7%,.15)] -ml-2 -mr-2 z-[208] !mb-2  ">
        <div className="mb-0 bg-white flex ml-2 mr-0 overflow-x-auto pb-2 pt-2 scroll-width-none">
            { selectCateCount > 0 || Object.values(selectedPrice).length > 0   &&  <div className={`mr-2 border rounded-[7px] p-[4px_8px] text-center whitespace-nowrap w-auto  bg-white  border-[#e8e8e8]`}>
                <button onClick={handleClearFilter} className={`flex gap-1 -ml-[3px] -mr-[3px] !text-[15px] !leading-[1.35] text-[#111]`} >
                    Clear All 
                </button>
            </div>}
            <div className={`mr-2 border rounded-[7px] p-[4px_8px] text-center whitespace-nowrap w-auto ${selectCateCount > 0 ? 'bg-[#e7fbff]  border-[#bddee3] ':' bg-white border border-[#e8e8e8] '}`}>
                <button className={`flex gap-1 -ml-[3px] -mr-[3px] !text-[15px] !leading-[1.35] ${selectCateCount > 0 ?'text-[#007185]':'text-[#111]'}`} onClick={handleCateShow}>
                    Categories {selectCateCount>0 ? `(${selectCateCount})`:''} <span className="flex items-center"><MdKeyboardArrowDown className="h-[15px] w-[15px]"/></span>
                </button>
            </div>
                {
                    priceSortCategories && priceSortCategories.map((item,index)=>{
                        return(
                            <button onClick={()=>handleFilterPrice(item,index)} key={index} className={`mr-2  rounded-[7px] p-[4px_8px] text-center border whitespace-nowrap w-auto ${selectedPrice[index]?.isSelected ? 'bg-[#e7fbff]  border-[#bddee3] text-[#007185]':' bg-white  text-[#111] border-[#e8e8e8]'}`}>
                                <span className={`${selectedPrice[index]?.isSelected && 'before:content-["×"] before:text-[15px] before:mr-1 before:p-[2px_2px_2px_0]'}flex gap-1 -ml-[3px] -mr-[3px] !text-[15px] !leading-[1.35]  `}>
                                    {item.text}
                                </span>
                            </button>
                        )
                    })
                }
        </div>

       { cateList && <FilterHome handleCatehide={handleCateShow}/>}

      
    </div>
  )
}

export default SortCategory

