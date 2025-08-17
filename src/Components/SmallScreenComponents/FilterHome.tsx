type filterHomeType={

    handleCatehide:()=>void
}

function FilterHome({handleCatehide}:filterHomeType) {

const categories:string[]=["All","Automotive","Baby Products","Beauty","Books","Clothing","Electronics","Grocery, Essentials & Personal Care","Gym & Sports","Home, Decor & Kitchen","Jewellery"," Luggage","Luxury Beauty","Mobile & Accessories","Stationery & Office Products","Shoes","Toys & Games","Watches"]

  return (
    <div className=" translate-y-0 h-full fixed top-auto bottom-0 right-0 left-0 z-[500]">
      <div className="opacity-75 bg-black select-none fixed top-0 right-0 bottom-0 left-0 z-[499]"></div>
        <div className="h-75 max-h-[737px] bg-white absolute right-0 bottom-0 left-0 z-[501]">
            <button onClick={handleCatehide} className="m-[-14px_-14px_0_0] p-3.5 absolute right-5 -top-9 text-white bg-transparent leading-4 min-w-11 float-right min-h-11 cursor-pointer border-none hover:outline hover:rounded-lg">
                <span className="bg-[position:-350px_-110px] h-4 w-4 inline-block align-top bg-[size:400px_900px] bg-no-repeat" style={{backgroundImage:'url(	https://m.media-amazon.com/images/S/sash/f9Cwl2OUDVHGXk8.png)'}}></span>
            </button>
            <div className="overflow-y-auto h-full bg-white overflow-x-hidden ">
                <div className="mb-16 p-3 h-full overflow-auto">
                    <h4 className="!mb-2 text-[15px] leading-[1.35] pb-1 font-fontBold">Categories</h4>
                    <div className="flex flex-wrap gap-2">
                        {/* <span className="bg-[#e7fbff]  border-[#bddee3] text-[#007185] ml-[-3px] mr-[-3px] !text-[15px] leading-[1.35] border rounded-[7px] p-[4px_8px] text-center whitespace-nowrap w-auto">All</span> */}
                        
                        {
                            categories && categories.map((item,index)=>{
                                return(
                                    <span key={index} className="bg-white  border-[#e8e8e8]  ml-[-3px] mr-[-3px] !text-[15px] leading-[1.35] border rounded-[7px] p-[4px_8px] text-center whitespace-nowrap w-auto">{item}</span>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="mb-0 bg-white border-t border-b border-[#cbcbcb] fixed bottom-0 h-16 m-0 p-2.5 w-full">
                    <button className="border-[0.5px] border-[#cbcbcb] text-[#007185] float-left max-w-1/2 rounded-lg inline-block h-10.5 overflow-hidden p-2.5 mb-[13px] text-[15px] leading-[1.35]">Clear Filters</button>
                    <button className="rounded-lg mb-0 inline-block h-10.5 overflow-hidden p-2.5 bg-[#007185] text-white max-w-[45%] absolute right-2.5  ">
                        <span className="text-[15px] leading-[1.35]">Show Products</span>
                        {/* <span className="text-[15px] leading-[1.35]">Apply Filters</span> */}
                    </button>
                </div>
            </div>
        </div>

                                   
    </div>
  )
}

export default FilterHome


