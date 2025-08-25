import { useContext, useState } from "react"
import DeskHeader from "../Components/LargeScreenComponents/DeskHeader"
import NavDesk from "../Components/LargeScreenComponents/NavDesk"
import { ToggleContext } from "../Context/toggleContext"
import { RecentlyViewed } from "../Types/DeskCategories"
import Pagination from "../Components/LargeScreenComponents/Pagination"
import Footer from "../Components/SmallScreenComponents/Footer"
import { ProductListContext } from "../Context/ProductListContext"
import FilterModal from "../Components/LargeScreenComponents/FilterModal"

function LargeProductLists() {
    const {handleSideBar,showHeader} = useContext(ToggleContext)
    const {filterCategory,cateProduct} = useContext(ProductListContext)
    const [modalIndex,setModalIndex] = useState<number | null>(null)
  
    const handleModal=(i:number)=>{
      if(modalIndex === i){
        setModalIndex(null)
      }
      else{
        setModalIndex(i)
      }

    }


  return (
    <div className="min-large:block">
      <DeskHeader stickHeader={false} />
      <NavDesk sideBar={handleSideBar} />
        {/* keep shoping section  */}
      <div className="w-full mb-[22px] flex ">
        <div className="w-[90%] max-w-[1500px] min-w-[1000px] bg-white m-auto flex border-b border-b-[#c8cccc]">
          <h1 className=" mb-3.5 flex flex-col flex-wrap p-[14px_0px] bg-white w-full text-[28px] leading-9">
            Keep shopping for <span className="font-fontBold">Books</span>
          </h1>
          <div className="visible pl-20 flex bg-white mt-2 max-w-full w-fit">
            <div className="h-6 m-[10px_13px_0_0] w-fit bg-white text-[#006275] text-sm leading-6 flex">
              Edit
            </div>
            <ol className="w-[649.64px] scroll-width-none list-none h-full whitespace-nowrap overflow-x-scroll tracking-[-4px] ">
              {RecentlyViewed &&
                RecentlyViewed.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={` ${index === 0 ? 'm-[6px_13px_0_7px]':'m-[6px_13px_0_3px]'}   inline-block  w-18.5 align-top text-left min-h-full`}>
                      <div
                        className={`flex   h-18.5 justify-center w-18.5 rounded-lg ${
                          index == 0
                            ? "border-[3px] border-[#007185]"
                            : "border border-[#000]"
                        }`}
                      >
                        <img
                          src={item.img.src}
                          alt={item.img.alt}
                          className={`rounded-lg max-h-18.5 max-w-18.5 mix-blend-multiply ${
                            index !== 0 ? "p-[3px]" : ""
                          }`}
                        />
                      </div>
                      <span className="block text-[11px] mt-[1.6px] leading-5 text-[#565959] tracking-normal">
                        {item.no_of_views}
                      </span>
                    </li>
                  );
                })}
            </ol>
          </div>
        </div>
      </div>

      {/* previously viewed section */}

     <div className="mb-3 mt-3 w-full flex">
       <div className="mx-auto p-0 bg-white overflow-auto  w-[90%] max-w-[1500px] min-w-250">
        <h1 className="text-lg leading-6 font-fontBold text-[#0f1111]">Previously viewed</h1>
        <div className="flex mt-2 mb-[22px] overflow-auto scroll-width-none">

              <div className="mr-[85px] items-start flex text-center  ml-5">
            <div className="aspect-[18/19] flex justify-center relative items-center bg-[#fafafa] mr-[5px]">
            <img src={cateProduct[5]?.product_img[0]} alt={cateProduct[5]?.product_title} className="flex-[0_0_auto] m-auto h-[288.88px] mix-blend-multiply w-[219.8px]" />
            </div>
            <div className="w-62.5 ml-5 text-left text-[0f1111]">
              <h1 className="leading-[20.8px] line-clamp-2 m-[8px_0_0_0] text-[16px]">{cateProduct[5]?.product_title}</h1>
              <div className="flex items-center">
                <i className="bg-[position:-2px_-400px] bg-[length:512px_512px] bg-no-repeat mr-1 -top-px h-4.5 w-20 relative align-text-top inline-block" style={{backgroundImage:`url(https://m.media-amazon.com/images/S/sash/5iL84kcaRCLp$es.png)`}}></i>
                <span className="text-[#565959] text-sm leading-5">2016</span>
              </div>
              <div className="flex">
                <span className="text-[#cc1c39] mr-1 text-[28px] leading-9 ">{cateProduct[5]?.product_offer}</span>
                <span className="text-[28px] text-[#0f1111] ">
                  <span className="text-[13px] top-[-9.75px] relative">₹</span>
                  <span className="font-medium">{cateProduct[5]?.product_price}</span>
                          <span className="text-[13px] top-[-9.75px] relative">00</span>

                </span>
                <span className="inline-block text-[#565959] ml-1 text-xs relative left-0 top-5 z-[1] line-through">₹{cateProduct[5]?.product_actual_price} </span>
              </div>
                <div className="flex items-center pt-1 flex-wrap text-sm">
                  <span className="flex">Get it by &nbsp;<b>Wednesday, August 27</b></span>
                  <span className="leading-5">FREE Delivery by Amazon</span>
                </div>

                <button className="mt-3 flex items-center justify-center h-7.5 rounded-[100px] w-50 bg-[#ffd814] border border-[#ffd814] text-center align-middle cursor-pointer text-black text-[13px]">Add to Cart</button>
            </div>
              </div>



              <div className="mr-[85px] items-start flex text-center  ml-5">
            <div className="aspect-[18/19] flex justify-center relative items-center bg-[#fafafa] mr-[5px]">
            <img src={cateProduct[8]?.product_img[0]} alt={cateProduct[8]?.product_title} className="flex-[0_0_auto] m-auto h-[288.88px] mix-blend-multiply w-[219.8px]" />
            </div>
            <div className="w-62.5 ml-5 text-left text-[0f1111]">
              <h1 className="leading-[20.8px] line-clamp-2 m-[8px_0_0_0] text-[16px]">{cateProduct[8]?.product_title}</h1>
              <div className="flex items-center">
                <i className="bg-[position:-2px_-400px] bg-[length:512px_512px] bg-no-repeat mr-1 -top-px h-4.5 w-20 relative align-text-top inline-block" style={{backgroundImage:`url(https://m.media-amazon.com/images/S/sash/5iL84kcaRCLp$es.png)`}}></i>
                <span className="text-[#565959] text-sm leading-5">2016</span>
              </div>
              <div className="flex">
                <span className="text-[#cc1c39] mr-1 text-[28px] leading-9 ">{cateProduct[8]?.product_offer}</span>
                <span className="text-[28px] text-[#0f1111] ">
                  <span className="text-[13px] top-[-9.75px] relative">₹</span>
                  <span className="font-medium">{cateProduct[8]?.product_price}</span>
                          <span className="text-[13px] top-[-9.75px] relative">00</span>

                </span>
                <span className="inline-block text-[#565959] ml-1 text-xs relative left-0 top-5 z-[1] line-through">₹{cateProduct[8]?.product_actual_price} </span>
              </div>
                <div className="flex items-center pt-1 flex-wrap text-sm">
                  <span className="flex">Get it by &nbsp;<b>Wednesday, August 27</b></span>
                  <span className="leading-5">FREE Delivery by Amazon</span>
                </div>

                <button className="mt-3 flex items-center justify-center h-7.5 rounded-[100px] w-50 bg-[#ffd814] border border-[#ffd814] text-center align-middle cursor-pointer text-black text-[13px]">Add to Cart</button>
            </div>
              </div>
           
             

        </div>
      </div>
     </div>

          <div className="flex w-full bg-white sticky top-0 z-[200]" >
             <div className="mx-auto w-[90%] flex border-t-2 border-t-[#c8cccc]  border-b border-b-[#c8cccc] z-[50] h-13 relative m-0 scroll-width-none max-w-[1500px] min-w-250">
                <ul className="h-13 p-0  list-none flex ">
                  <li className="m-[0_48px_0_0] h-12 flex items-center text-[#007185] border-b-2 border-b-[#007185] cursor-pointer text-[16px] p-[12px_0] font-fontBold leading-12 ">
                    For you
                  </li>
                   <li className="m-[0_48px_0_0] h-12 flex items-center text-[#0F1111]  cursor-pointer text-[16px] p-[12px_0]  leading-12 ">
                    Bestsellers
                  </li>
                   <li className="m-[0_48px_0_0] h-12 flex items-center text-[#0F1111] cursor-pointer text-[16px] p-[12px_0]  leading-12 ">
                    Bought together
                  </li>
                </ul>
              </div>
          </div>

                  {/* filter section  */}

           <div className="flex w-full top28.5 top-12 sticky z-[10] bg-white">
             <div className=" w-[90%] max-w-[1500px] min-w-250 mx-auto">
                <ol className="overflow-hidden flex-wrap max-h-25 flex pt-3.5 grow m-0 bg-transparent list-none ">

                  {
                    filterCategory.length > 0 && filterCategory.map((item,i:any)=>{
                  return(
                    <li key={i} className="inline-block mr-[5px] mb-3 m-0">
                    <button onClick={()=>handleModal(i)} className="flex items-center border border-[#888c8c] cursor-pointer bg-white h-8 min-w-14 max-w-47.5 rounded-lg hover:border-[#007185] hover:bg-[#e7fbff]">
                      <span className="flex items-center pl-3 text-[#0f1111] whitespace-nowrap max-w-40 text-sm leading-[18.2px]">{item.filter_Type}</span>
                      <svg className="m-[0_12px_0_4px]" role="img" aria-label="open price modal" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><title>open price modal</title><path d="M5.99982 10.0001L2.29361 6.58305C2.1055 6.40915 1.99982 6.17329 1.99982 5.92736C1.99982 5.68142 2.1055 5.44556 2.29361 5.27166C2.48172 5.09776 2.73685 5.00006 3.00288 5.00006C3.26891 5.00006 3.52405 5.09776 3.71216 5.27166L5.99982 7.39575L8.28748 5.27166C8.38062 5.18555 8.4912 5.11725 8.6129 5.07065C8.73459 5.02405 8.86503 5.00006 8.99675 5.00006C9.12848 5.00006 9.25891 5.02405 9.38061 5.07065C9.50231 5.11725 9.61288 5.18555 9.70603 5.27166C9.79917 5.35777 9.87306 5.45999 9.92346 5.5725C9.97387 5.685 9.99982 5.80558 9.99982 5.92736C9.99982 6.04913 9.97387 6.16971 9.92346 6.28222C9.87306 6.39472 9.79917 6.49694 9.70603 6.58305L5.99982 10.0001Z" fill="#0F1111"></path></svg>
                    </button>
                    {
                    modalIndex === i  && <FilterModal filterBtn={item.filter_buttons} handleModal={handleModal} index={i} subhead={item.filter_sub_head}/>
                    }
                  </li>
                  )
                    })
                  }
                </ol>
              </div>
            </div>

                  {/* product list sections  */}
                <div className="flex flex-col items-center h-auto w-full">
                <ul className=" mx-auto w-[90%] max-w-[1500px] min-w-250 grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] px-0.5 gap-3 pt-0.5  m-0 list-none">
                 { cateProduct.length > 0 && cateProduct.map((item)=>{
                  return(
                  <li className="flex border border-[#d5d9d9] rounded-md flex-col h-full p-0 relative">
                      <div className="p-3  bg-[rgba(0,0,0,.03)]  max-h-100 overflow-hidden  aspect-[18/19] flex justify-center relative mb-2">
                        <img className="flex-[0_0_auto] m-auto max-h-full mix-blend-multiply" src={item.product_img[0]} alt={item.product_title} />
                    </div>
                    <div className="px-3 pt-1">
                      <span className="leading-[20.8px] line-clamp-3 text-[16px] ">{item.product_title}</span>
                      <div className="flex items-center">
                        <i className="bg-[position:-2px_-400px] bg-[length:512px_512px] bg-no-repeat mr-1 -top-px h-4.5 w-20 relative align-text-top inline-block" style={{backgroundImage:`url(https://m.media-amazon.com/images/S/sash/5iL84kcaRCLp$es.png)`}}></i>
                        { item.no_of_buyers !== 'no_data' && <span className="text-[#565959] text-sm leading-5">{item.no_of_buyers}</span>}
                      </div>
                      <span className="bg-[#CC0C39] p-[4px_8px_4px_8px] rounded-sm mb-1 text-white text-[13px] leading-[1.4] block mt-1 w-[123.219px]">Limited time deal</span>
                        <span className="text-[#cc1c39] mr-1 text-[28px] leading-9">{item.product_offer}</span>
                        <span className="text-[28px] text-[#0f1111] ">
                          <span className="text-[13px] top-[-9.75px] relative">₹</span>
                          <span className="font-medium">{item.product_price}</span>
                          <span className="text-[13px] top-[-9.75px] relative">00</span>
                        </span>
                       <div className="flex">
                         <span className="text-[#565959] text-xs leading-4 block">M.R.P.:  </span>
                        <span className=" text-xs text-[#565959] ml-1">₹{item.product_actual_price}</span>
                       </div>
                       <span className="text-sm leading-5 text-[#0f1111] block">Get it by&nbsp; <b>Monday, September 1</b></span>
                       <span className="text-sm leading-5">FREE Delivery by Amazon</span>
                    </div>
                    <div className="mt-auto p-[16px_24px] justify-center flex items-center">
                      <button className="rounded-[100px] w-full border border-[#888c8c] inline-block bg-white text-center align-middle cursor-pointer h-7.5 text-[13px]">Buying options</button>
                    </div>
                  </li>
                  )
                 })
                }
                 
                </ul>
              </div>


                  

                <Pagination/>
                <Footer/>
    </div>
  );
}

export default LargeProductLists


