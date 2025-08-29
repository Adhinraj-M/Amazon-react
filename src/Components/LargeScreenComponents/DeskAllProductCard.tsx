import FourProductCard from "./FourProductCard"
import { HeroDeskProduct } from "../../Types/DeskCategories";
import SingleCategoryProduct from "./SingleCategoryProduct";


function DeskAllProductCard() {
  return (
    <div className="p-[0_10px_0] relative !mb-0">
      <div className="max-w-[1219px] min-1240:max-w-[1480px] m-[0_auto] overflow-hidden p-[20px_0] min-w-[919px] flex flex-row flex-wrap text-[13px] leading-[19px] mb-0">
        <FourProductCard fourProduct={HeroDeskProduct} />

        <SingleCategoryProduct/>


        <div className="basis-1/3 flex grow shrink-0 h-105 min-w-1/3 order-1 px-2.5 min-1240:max-w-[400px] min-1240:flex-[1_0_290px] min-1240:min-w-[290px]">
          <div className="bg-white h-full relative my-0 p-[20px_20px_15px_20px] flex flex-col ">
            <h2 className="text-[21px] leading-[27.3px] font-fontBold  text-[#0f1111]  mb-2.5">
              Up to 80% off | Home, kitchen & more
            </h2>

          <div className="grow h-[275px] mb-11  ">
            <div className="h-1/2 !mb-2 flex justify-between ">
              <div className="inline-block h-full m-0 p-[0_0_36px] relative w-[47.5%] float-left ">
                <a className="h-full w-full relative block" href="#">
                  <div className="h-full overflow-hidden relative w-full !mb-0">
                    <img className="h-full left-[-9999px] !max-w-none right-[-9999px] m-auto absolute" src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/PAYAL/GW/AugART25/PC_QC_372x232-1-1x_Kitchen._SY116_CB804590709_.jpg" alt="" />
                  </div>
                  <span className="h-9 overflow-hidden w-full inline-block text-xs leading-[18px]">Kitchen essentials</span>
                </a>
              </div>
              <div className="inline-block h-full m-0 p-[0_0_36px] relative w-[47.5%] float-left">
                <a className="h-full w-full relative block" href="#">
                  <div className="h-full overflow-hidden relative w-full !mb-0">
                    <img className="h-full left-[-9999px] !max-w-none right-[-9999px] m-auto absolute" src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/PAYAL/GW/AugART25/PC_QC_372x232-2-1x_home._SY116_CB804590709_.jpg" alt="" />
                  </div>
                  <span className="h-9 overflow-hidden w-full inline-block text-xs leading-[18px]">Home decor</span>
                </a>
              </div>
            </div>

            <div className="h-1/2 mb-0 flex justify-between">
            <div className="inline-block h-full m-0 p-[0_0_36px] relative w-[47.5%] float-left ">
                <a className="h-full w-full relative block" href="#">
                  <div className="h-full overflow-hidden relative w-full !mb-0">
                    <img className="h-full left-[-9999px] !max-w-none right-[-9999px] m-auto absolute" src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/PAYAL/GW/AugART25/PC_QC_372x232-3-1x_Furniture._SY116_CB804590709_.jpg" alt="" />
                  </div>
                  <span className="h-9 overflow-hidden w-full inline-block text-xs leading-[18px]">Furniture</span>
                </a>
              </div>
              <div className="inline-block h-full m-0 p-[0_0_36px] relative w-[47.5%] float-left">
                <a className="h-full w-full relative block" href="#">
                  <div className="h-full overflow-hidden relative w-full !mb-0">
                    <img className="h-full left-[-9999px] !max-w-none right-[-9999px] m-auto absolute" src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/PAYAL/GW/AugART25/PC_QC_372x232-4-1x_HI._SY116_CB804590709_.jpg" alt="" />
                  </div>
                  <span className="h-9 overflow-hidden w-full inline-block text-xs leading-[18px]">Home improvement</span>
                </a>
              </div>
            </div>
            
            <span className="leading-[16.89px] text-[#2162a1] text-[13px] mb-[5px] w-full relative top-[13px]">
              See all deals
            </span>
          </div>
          
          </div>
        </div>


       <div className="max-w-[400px] hidden min-1240:flex  flex-wrap -mt-2.5 h-105 flex-[1_0_290px] px-2.5 order-4 ">
        <div className="h-[150px] max-h-[150px] flex-[1_0_0] my-2.5 order-1">
          <div className="bg-white h-full relative mb-0 mt-0 overflow-hidden p-[20px_0_15px_0] ">
            <h1 className="px-5 mb-2.5 text-[21px] leading-[27.3px] font-fontBold">Sign in for your best experience</h1>
            <div className="p-[0_20px_20px_20px] relative">
            <button className="mt-1 rounded-[100px] w-full bg-[#ffd814] border border-[#ffd814] inline-block px-12 text-center cursor-pointer h-8 leading-[30px]">Sign in securely</button>
            </div>
          </div>
        </div>
        
        <div className="h-[250px] max-h-[250px] flex-[1_0_0] my-2.5 order-2 leading-0 relative aspect-300/250 m-[0_auto] ">
            <img className="h-full w-full" src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/ceeca8d7-ce6b-479c-a4d9-b0b98f5f7306.jpg" alt="" />
        </div>

          
          <div className="relative h-auto min-h-[20px] text-right  leading-0 no-underline order-3 w-full -mt-2">
            <a className="text-[11px] text-[rgb(85,85,85)] cursor-pointer  " href="#"> Sponsored
              <b className="ml-0.5 inline-block align-text-bottom m-[1px_0] w-[14px] h-3 bg-no-repeat  bg-transparent" style={{backgroundImage:"url('	https://m.media-amazon.com/images/G/01/ad-feedback/New-info-icon-sprite-1x.png')"}}></b>
            </a>
            
          </div>
      </div>

      </div>
    </div>
  );
}

export default DeskAllProductCard


