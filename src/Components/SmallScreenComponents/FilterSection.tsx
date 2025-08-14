
function FilterSection() {

  const size:string[]=["4XS","2XS","XS","S","M","L","XL","2XL","3XL","4XL","5XL","6XL","7XL","8XL","Free Size"]

  return (
    <section className="!h-[calc(100%-100px)] bg-white fixed right-0 bottom-0 left-0 z-[501]">

        <div className="border-b-[#f4d8da] fixed flex w-full h-12 left-0 right-0 m-0 bg-white border-b z-[600] justify-between items-center transform-[translate3d(0,0,0)]">
            <div className="mx-3 whitespace-nowrap float-left mb-0 font-fontBold leading-[20.25px]">
                <span className="text-[15px]">Filters</span>
                <span className="text-[15px]"> (1)</span>
            </div>
            <div className="mx-3 relative top-1">
                <i className=" h-3 w-3 bg-[position:-489px_-498px] bg-[length:512px_512px] bg-no-repeat inline-block align-top" style={{backgroundImage:`url(https://m.media-amazon.com/images/S/sash/VRxFMfjvVeE5Eoy.png)`}}></i>
            </div>
        </div>

        <div className="mt-12 mb-11.5 flex w-full ">

          <div className="flex flex-col shrink-0 mb-0 w-30 overflow-y-auto bg-[#f7fafa] relative">

            <div className="border-b-[#e3e6e6] items-center border-b z-[1] bg-white">
              <div className="p-[8px_12px] text-ellipsis overflow-hidden w-19 leading-[1.4] text-[#eb1745] font-fontBold text-[13px] flex flex-row items-center min-h-13 justify-between relative mb-0 before:bg-[#eb1745] before:w-1 before:h-full before:content-[''] before:absolute before:left-0 before:right-0 ">
                Sizes
              </div>
            </div>

            <div className="bg-[#fff9f6] border-b-[#fee4d9] items-center border-b z-[1]">
              <div className="p-[8px_12px] flex  items-center overflow-hidden min-h-13 mb-0 relative  after:w-1 after:h-full after:content-[''] after:absolute after:right-0 after:bg-[linear-gradient(270deg,rgba(15,17,17,.04)_0,rgba(15,17,17,0)_100%)]">
                <span className="text-[#303333] text-ellipsis overflow-hidden text-[13px] w-19 leading-[1.4] ">Price and Deals</span>
              </div>
            </div>

            <div className="bg-[#fff9f6] border-b-[#fee4d9] items-center border-b z-[1]">
              <div className="p-[8px_12px] flex  items-center overflow-hidden min-h-13 mb-0 relative  after:w-1 after:h-full after:content-[''] after:absolute after:right-0 after:bg-[linear-gradient(270deg,rgba(15,17,17,.04)_0,rgba(15,17,17,0)_100%)]">
                <span className="text-[#303333] text-ellipsis overflow-hidden text-[13px] w-19 leading-[1.4] ">Colours</span>
              </div>
            </div>

            <div className="bg-[#fff9f6] border-b-[#fee4d9] items-center border-b z-[1]">
              <div className="p-[8px_12px] flex  items-center overflow-hidden min-h-13 mb-0 relative  after:w-1 after:h-full after:content-[''] after:absolute after:right-0 after:bg-[linear-gradient(270deg,rgba(15,17,17,.04)_0,rgba(15,17,17,0)_100%)]">
                <span className="text-[#303333] text-ellipsis overflow-hidden text-[13px] w-19 leading-[1.4] ">Customer Reviews</span>
              </div>
            </div>

          </div>

          {/* <div className="overflow-y-auto pt-3 w-full">
            <div className="p-[0_12px]">
              <h2 className="text-[15px] !leading-[1.35] font-fontBold !pb-4">Sizes</h2>
                 <h2 className="text-[13px] !leading-[20.25px] font-fontBold mb-2 relative top-px">
                  Women's Clothing Size
                </h2>
                <div className="mb-1 flex flex-wrap">
                  {
                    size && size.map((item,index)=>{
                      return(
                        <button key={index} className="p-[7px_8px] rounded-lg w-fit mb-2 mr-2 border border-[#e9e8e8] text-center bg-white inline-flex items-center justify-center text-[13px] leading-[1.4]">{item}</button>
                      )
                    })
                  }
                </div>
            </div>
          </div> */}


            <div className="pt-3 w-full overflow-y-auto">
              <div className="p-[0_12px]">
                <h2 className="text-[15px] !leading-[1.35] font-fontBold !pb-4">Price and Deals</h2>
                <h2 className="text-[13px] !leading-[20.25px] font-fontBold mb-2 relative top-px">
                 Price
                </h2>
                <div className="p-[12px_9px] mr-6 bg-[#f4f4f4] rounded-lg mb-[17px]">
                  <form>
                    <div className="flex pb-1 mb-1">
                      <p className="mr-1 p-0 font-fontBold text-[15px] leading-[1.35]">₹115</p>
                      <span className="mr-1 p-0 font-fontBold text-[15px] leading-[1.35]">–</span>
                      <p className="mr-1 p-0 font-fontBold text-[15px] leading-[1.35]">₹570+</p>
                    </div>

                    <div className="flex pb-1 mb-1">
                      <div className="p-[10px_0] flex-[1] my-3 relative">
                        <input type="range" className="m-0 p-0 flex absolute bg-transparent text-[#bbbfbf] z-[1] appearance-none w-full h-1 leading-[1.35]" />
                        <input type="range" className="z-0 bg-[linear-gradient(to_right,rgb(187,191,191)_0%,rgb(187,191,191)_0%,rgb(0,113,133)_0%,rgb(0,133,133)_100%,rgb(187,191,191)_100%,rgb(187,191,191)_100%)] text-[#007185] appearance-none pointer-events-none w-full h-1 leading-[1.35]" />
                      </div>
                    </div>

                  </form>
                </div>
              </div>
            </div>

          
        </div>
    </section>
  )
}

export default FilterSection

