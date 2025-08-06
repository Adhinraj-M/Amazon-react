

function SingleCategoryProduct() {
  return (
   <div className="basis-1/3 grow shrink-0 h-105 min-w-1/3 order-1 px-2.5 min-1240:max-w-[400px]  min-1240:flex-[1_0_290px] min-1240:min-w-[290px]">
          <div className="bg-white h-full relative my-0 p-[20px_20px_15px_20px] flex flex-col">
            <h2 className="text-[21px] leading-[27.3px] font-fontBold text-[#0f1111] mb-2.5 min-1240:!max-h-[54.6px] ">
              Up to 75% off | Electronics & Accessories
            </h2>

            <a className="flex flex-col relative h-full" href="#">
             <div className=" grow h-[275px] mb-11 ">
              <div className="overflow-hidden relative w-full h-full !mb-0">
              <img
                className="h-full left-[-9999px] !max-w-none right-[-9999px] m-auto absolute"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Tablets/Hero/Associatess/PC_CC_758x60810.5x._SY304_CB804957162_.jpg"
                alt="electronic device images" />
              </div>

            <span className="leading-[16.89px] text-[#2162a1] text-[13px] mb-[5px] w-full relative top-[21px]">
              See all offers
            </span>

            </div>
            </a>
          </div>
        </div>

  )
}

export default SingleCategoryProduct