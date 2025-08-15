import { useState } from "react"
import type { CategoryFilter } from "../../Types/product"

type filterSectionType={
  handleFilter:()=> void
  filterCategory:CategoryFilter[]
}



function FilterSection({handleFilter,filterCategory}:filterSectionType) {


  const [activeIndex,setActiveIndex]=useState<number>(0)
  const [filterBtn,setFilterBtn] = useState<string[]>(filterCategory[0].filter_buttons)
  const [activeFilter,setActiveFilter] = useState<number | null>(null)


  const handleCategory=(index:number)=>{
    setActiveIndex(index)
    setFilterBtn(filterCategory[index].filter_buttons)
  }

  const handleActiveFilter=(index:number)=>{
    setActiveFilter(index)
  }

  
  return (
    
    <div className="fixed top-0 right-0 left-0 bottom-0 z-[9999]" >
      <div className="bg-[rgba(0,0,0,.2)] opacity-100 h-full w-full absolute"></div>
       <section className="!h-[calc(100%-100px)] bg-white fixed right-0 bottom-0 left-0 z-[501]">

        <div className="border-b-[#f4d8da] fixed flex w-full h-12 left-0 right-0 m-0 bg-white border-b z-[600] justify-between items-center transform-[translate3d(0,0,0)]">
            <div className="mx-3 whitespace-nowrap float-left mb-0 font-fontBold leading-[20.25px]">
                <span className="text-[15px]">Filters</span>
                <span className="text-[15px]"> (1)</span>
            </div>
            <div className="mx-3 relative top-1" onClick={handleFilter}>
                <i className=" h-3 w-3 bg-[position:-489px_-498px] bg-[length:512px_512px] bg-no-repeat inline-block align-top" style={{backgroundImage:`url(https://m.media-amazon.com/images/S/sash/VRxFMfjvVeE5Eoy.png)`}}></i>
            </div>
        </div>

        <div className="mt-12 mb-11.5 flex w-full ">

          <div className="flex flex-col shrink-0 mb-0 w-30 overflow-y-auto bg-[#f7fafa] relative">
            {
              filterCategory && filterCategory.map((item,index)=>{
                return(
                  <div key={index} className={`${activeIndex === index ? 'border-b-[#e3e6e6] items-center border-b z-[1] bg-white':'bg-[#fff9f6] border-b-[#fee4d9] items-center border-b z-[1]'} `} onClick={()=>handleCategory(index)}>
                    <div className={`p-[8px_12px] flex overflow-hidden min-h-13 mb-0 relative  items-center text-ellipsis w-23 leading-[1.4] text-[13px] ${activeIndex === index ? '  text-[#eb1745] font-fontBold before:bg-[#eb1745] before:w-1 before:h-full before:content-[""] before:absolute before:left-0 before:right-0':
                      ' after:w-1 after:h-full after:content-[""] after:absolute after:right-0 after:bg-[linear-gradient(270deg,rgba(15,17,17,.04)_0,rgba(15,17,17,0)_100%)]'}`}>
                     {item.filter_Type}
                    </div>
                  </div>
                )
              })
            }
          </div>

          <div className="overflow-y-auto pt-3 w-full">
            <div className="p-[0_12px]">
              <h2 className="text-[15px] !leading-[1.35] font-fontBold !pb-4">{filterCategory[activeIndex].filter_Type}</h2>
                 <h2 className="text-[13px] !leading-[20.25px] font-fontBold mb-2 relative top-px">
                 { filterCategory[activeIndex].filter_Type !== filterCategory[activeIndex].filter_sub_head && <span> {filterCategory[activeIndex].filter_sub_head}</span>}
                </h2>
                <div className="mb-1 flex flex-wrap">
                  {
                    filterBtn.length >0 ? (filterBtn.map((item,index)=>{
                      return(
                            <button key={index} onClick={()=>handleActiveFilter(index)} className={`p-[7px_8px] rounded-lg w-fit mb-2 mr-2 border ${activeFilter !== index ? '  border-[#e9e8e8] text-center bg-white inline-flex items-center justify-center text-[13px] leading-[1.4]':'bg-[#f9d52a]  border-[#f34552] '}`} >
                              {filterCategory[activeIndex].filter_Type === 'Colours' && <span className="w-3.5 h-3.5 rounded-sm mr-0.5" style={{backgroundColor:`${item}`}}></span> } 
                                <span>{item}</span>
                            </button>)
                    })):(
                        <button  className="mr-2  shrink-0 whitespace-nowrap h-8 flex items-center p-[9px] rounded-lg w-auto border border-[#e8e8e8] text-center bg-white justify-center  ">
                    <div className="flex pb-0.5 mr-1">
                      <span
                        className="w-4 h-[15px] "
                        style={{
                          backgroundImage: `url(https://m.media-amazon.com/images/S/sash/1B5nH39U5U0JHHA.svg)`,
                        }}
                      ></span>
                      <span
                        className="w-4 h-[15px] "
                        style={{
                          backgroundImage: `url(https://m.media-amazon.com/images/S/sash/1B5nH39U5U0JHHA.svg)`,
                        }}
                      ></span>
                      <span
                        className="w-4 h-[15px] "
                        style={{
                          backgroundImage: `url(https://m.media-amazon.com/images/S/sash/1B5nH39U5U0JHHA.svg)`,
                        }}
                      ></span>
                      <span
                        className="w-4 h-[15px] "
                        style={{
                          backgroundImage: `url(https://m.media-amazon.com/images/S/sash/1B5nH39U5U0JHHA.svg)`,
                        }}
                      ></span>
                    </div>
                    <span className="text-sm leading-5 align-text-bottom text-black ">
                      & Up
                    </span>
                        </button>
                    )
                  }

                  
                </div>
            </div>
          </div>
           

        </div>
       </section>
    </div>
  )
}

export default FilterSection

