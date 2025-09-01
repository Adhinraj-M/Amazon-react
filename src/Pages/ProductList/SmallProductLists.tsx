import { useContext, useEffect } from "react";
import Address from "../../Components/SmallScreenComponents/Home/Address";
import FilterSection from "../../Components/SmallScreenComponents/Filter/FilterSection";
import { ProductListContext } from "../../Context/ProductListContext";
import { Link } from "react-router-dom";
import Footer from "../../Components/SmallScreenComponents/Home/Footer";
import useWindowWidth from "../../Helpers/WindowWidth";
import Header from "../../Components/SmallScreenComponents/Home/Header";

function SmallProductLists() {
  const {handleImmediateFilter,activeFilter, filterCategory, sortCategory, filteredLists, handleModal, toggle } =
    useContext(ProductListContext);
    let count = Object.values(activeFilter).flat().length;

  // to avoid background scroll when the filter modal opens
  const width = useWindowWidth();

  if (toggle && width < 1000) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }


  // when page load should display top 
  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", 
  });
}, [filteredLists]);




  return (
    <div className="min-large:hidden ">
      <Header />
      <div className="w-full bg-white border-t-[5px] border-t-[#FF4D5B] border-b border-b-[#FF4D5B]">
        <div className="h-12 p-0 overflow-hidden block whitespace-nowrap">
          <a
            href="#"
            className=" w-1/3 flex justify-center text-[#000]  border-r border-r-[#000] p-0 m-[14px_0] h-5 text-center leading-5 text-sm font-light whitespace-nowrap float-left"
          >
            <img
              className="h-5"
              src="https://m.media-amazon.com/images/G/31/AmazonBazaar/MobileWebIcons/bazaar_main_logo._CB599173188_.png"
              alt="bazar image"
            />
          </a>

          <a
            href="#"
            className="w-1/3 flex justify-center m-[14px_0]  border-r border-r-[#000] h-5 text-center leading-5 text-sm  whitespace-nowrap float-left"
          >
            Categories
          </a>
          <a
            href="#"
            className="w-1/3 text-[#000]  flex justify-center  m-[14px_0] h-5 text-center leading-5 text-sm whitespace-nowrap float-left"
          >
            Account
          </a>
        </div>
      </div>
      <Address />

      <div className="m-0 p-0 w-screen bg-[#fff2ec] overflow-x-clip grid items-stretch justify-stretch overflow-visible">
        <div className=" px-0 sticky top-0 z-20 overflow-x-hidden  transition-[transform_.2s_linear] grid-cols-2">
          <div className="h-12 mb-1.5 flex  items-center bg-white shadow-[0_1px_2px_0_rgba(17,17,17,.15)] p-0 transition-[.2s_linear]">
            <div className="flex items-center overflow-y-hidden w-full h-full overflow-x-scroll scroll-width-none">
              <button className="ml-2 mr-2 shrink-0 whitespace-nowrap h-8 flex items-center p-[9px] rounded-lg bg-[#f9d52a] border border-[#f34552] w-auto text-center justify-center text-sm leading-5 max-w-[115px] overflow-hidden text-ellipsis" >
                Bazaar
              </button>
              <button className={`mr-2  shrink-0 whitespace-nowrap h-8 ${activeFilter['Customer Rating']?.includes(0) ? 'bg-[#f9d52a]  border-[#f34552]':'border-[#e8e8e8] bg-white'} flex items-center p-[9px] rounded-lg w-auto border  text-center justify-center`} onClick={()=>handleImmediateFilter({sub_cate:'4',category:'Customer Rating',pos:0})}>
                <div className="flex pb-0.5 mr-1">
                  {Array.from({ length: 4 }, (_, i: number) => {
                    return (
                      <span
                        key={i}
                        className="w-4 h-[15px]"
                        style={{
                          backgroundImage: `url(https://m.media-amazon.com/images/S/sash/1B5nH39U5U0JHHA.svg)`,
                        }}
                      ></span>
                    );
                  })}
                </div>
                <span className="text-sm leading-5 align-text-bottom text-black ">
                  & Up
                </span>
              </button>

              {sortCategory &&
                sortCategory.map((item:{sub_cate:string,category:string,pos: number},index:number) => {
                  return (
                    <button
                      key={index}
                      onClick={() => handleImmediateFilter(item)}
                      className={` ${activeFilter[item.category]?.includes(item.pos) ? 'bg-[#f9d52a]  border-[#f34552]':'border-[#e8e8e8] bg-white'} mr-2 text-sm shrink-0 whitespace-nowrap h-8 flex items-center p-[9px] rounded-lg w-auto border  text-center justify-center`}
                    >
                      {item.sub_cate}
                    </button>
                  );
                })}
            </div>
            <div className="-mr-1 bg-[#fff9f6] border-[#c7e4e8] h-[46px] p-[0_12px] shadow-[inset_1px_0_0_0_#e6e6e6] flex items-center">
              <button
                onClick={handleModal}
                className="text-[#0f1111] w-full h-full flex items-center p-[11px_16px] m-0 text-[16px] leading-5 text-center bg-transparent border-0 outline-0"
              >
                <span className="!text-sm !leading-5 text-black">Filters</span>
                <span className="!text-sm !leading-5 text-black ml-1.5 ">
                  ({count})
                </span>
                <span className="ml-1.5 mt-0.5 text-black w-2.5 h-2.5 transform-[rotate(0)] transition-[transform_.25s_ease-in-out] origin-[center_40%] before:bg-black before:content-[''] before:absolute before:w-[5px] before:h-0.5 before:top-1/2 before:right-1/2 before:-mr-px before:-mt-px before:origin-[4px_1px] before:transform-[rotate(45deg)] after:bg-black after:content-[''] after:absolute after:w-[5px] after:h-0.5 after:top-1/2 after:left-1/2 after:-ml-px after:-mt-px after:origin-[1px_1px] after:transform-[rotate(-45deg)]"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 ">
          {filteredLists.length == 0 ? (
            <div className="flex justify-end h-screen">
              <span className="text-2xl text-red-500 relative left-20">
                No Data Found
              </span>
            </div>
          ) : (
            filteredLists.map((item) => {
              return (
                <Link
                  to={`/productList/productData/${item.id}`}
                  key={item.id}
                  className="grid  float-none w-auto h-[363px] px-1 visible before:-mb-px before:content-[''] before:block before:h-px" >
                  <div className="pb-[15px] h-[calc(100%-8px)] -ml-1 -mr-1 border border-[#fee4d9] rounded-lg bg-white transform-[translate3d(0,0,0)] relative ">
                    <div className="flex justify-center bg-[linear-gradient(212deg,#f3f3f3_11.9%,#fff_54.57%,#f0f0f0_99.3%)] relative">
                      <img
                        className="mix-blend-multiply !h-[263px]"
                        src={item.product_img[0]}
                        alt={item.product_title}
                      />
                      <div className="h-[30.25px] flex absolute bottom-3 left-3 border border-[#fee4d9] rounded-sm bg-white p-1">
                        <span className="text-[10px] relative top-1 leading-4 text-black ">
                          {item.product_rating}
                        </span>
                        <i
                          className="mr-1 ml-1 w-4  top-0.5  bg-[length:512px_512px] bg-[position:-194px_-467px] bg-no-repeat relative inline-block h-4.5 "
                          style={{
                            backgroundImage:
                              "url(https://m.media-amazon.com/images/S/sash/VRxFMfjvVeE5Eoy.png)",
                          }}
                        ></i>
                        <span className="text-[10px] relative top-1  leading-4">
                          1
                        </span>
                      </div>
                    </div>
                    <div className="pr-4 pl-3 my-2 h-auto">
                      <h2 className="text-sm leading-5 max-h-5 line-clamp-1 pb-0">
                        {item.product_title}
                      </h2>
                      <div className="bg-[#DB1846] mt-1  text-xs p-[0_4px]  flex items-center rounded-sm w-fit leading-0 relative h-6 z-[1] float-left font-fontBold text-white ">
                        #CrazyDeal
                      </div>
                      <div className=" leading-[20.25px] relative top-1 w-full flex">
                        <span className="text-[18px] text-[#d6001b] leading-normal relative bottom-0.5 ">
                          <span className="text-[11px] relative top-[-4.4px] ">
                            ₹
                          </span>
                          {item.product_price}
                        </span>
                        <span className="text-xs inline-block self-center text-[11px] leading-4 text-[#565959] line-through ml-[4.8px]">
                          {item.product_actual_price}
                        </span>
                      </div>
                      <div className="fixed bottom-0 right-0 mb-0 mr-0 ">
                        <button className="m-2 w-7 h-7  bg-[#ffd814] border-[#ffd814] block text-center p-0 align-middle cursor-pointer rounded-[100px] before:content-['\002B'] before:text-[27px] before:leading-[26px] before:text-[#0f1111] before:relative before:top-px"></button>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </div>
      <Footer />
      {toggle && (
        <FilterSection
          filterCategory={filterCategory}
          handleModal={handleModal}
        />
      )}
    </div>
  );
}

export default SmallProductLists;
