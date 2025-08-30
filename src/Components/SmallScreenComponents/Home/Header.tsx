import { useEffect, useState } from 'react'
import smallIconImage from '/icon-image/smallSizeIcon.png'
import {Link} from 'react-router-dom'
import SideMenuBar from '../sideMenuComponents/SideMenuBar'
import TopBar from './TopBar'



function Header() {

  const [showSideBar,setShowSideBar]=useState<boolean>(false)
  const [showTopBar, setShowTopBar] = useState<boolean>(false);
  
      
       const handleSideBar = () =>{
          setShowSideBar(!showSideBar)
        }
  

        useEffect(() => {
    const handleScrollY = () => {
      if (window.scrollY > 50) {
        setShowTopBar(true);
      } else {
        setShowTopBar(false);
      }
    };

    window.addEventListener("scroll", handleScrollY);

    return () => window.removeEventListener("scroll", handleScrollY);
  }, []);


  return (
    <>
    <header className="relative z-[208] text-xs leading-[1em] min-w-[200px]">
      <div className="flex relative h-12 w-full border-b-[#232f3e] flex-row flex-nowrap justify-between bg-[#232f3e]">
        <div className="flex-shrink-0 flex-row flex-nowrap flex relative w-auto">
          <button className="float-left p-3.5 cursor-pointer" onClick={handleSideBar}>
            <i className=" block w-5 h-5 bg-[position:-20px_-382px] bg-[length:278px] bg-no-repeat overflow-hidden" style={{backgroundImage:`url(${smallIconImage})`}}></i>
          </button>
          <Link to={'/'}className="ml-auto relative float-left z-20 mt-[13px]">
            <span className=" bg-[length:275px] float-left padding-[10px_40px_0px_20px] bg-[position:-185px_-236px] w-20 h-7" style={{backgroundImage:`url(${smallIconImage})`}}></span>
            <span className="block float-left m-[1px_0_0_1px] text-[13.5px] text-white leading-3.5 pt-[1px]">
              .in
            </span>
          </Link>
        </div>
        <div className="flex-row-reverse flex-wrap overflow-hidden min-w-[60px] flex relative w-auto">
          <div className="order-2">
            <Link to={'/login'} className="flex ml-[5px] leading-12 text-[13px] text-white">
              Sign in ›
            </Link>
          </div>
          <button className="order-1 flex p-[9px_0px_12px_4px] relative w-[39px] cursor-pointer">
            <i className="bg-[length:275px] block  w-[35px] h-[27px] order-2 bg-[position:-141px_-300px]" style={{backgroundImage:`url(${smallIconImage})`}}></i>
          </button>
          <button className="pl-[7px] order-0 flex p-[10px_18px_11px_12px]">
            <div className="order-2 w-[37px]  bg-[length:275px] bg-[position:-10px_-240px] h-[27px]" style={{backgroundImage:`url(${smallIconImage})`}}>
              <span className="block pl-1.5 text-[16px] text-[#f08804] text-center leading-2.5 font-bold no-underline">
                0
              </span>
            </div>
          </button>
        </div>
      </div>
      <div className="flex h-[50px] bg-[#232f3e]">
        <form className="flex p-[2px_10px_5px_10px] relative h-[50px] rounded-[8px_12px_12px_8px] w-full border-b  border-b-[#0000000D] flex-1  mb-0  ">
          <input
            className="rounded-[8px_12px_12px_8px] h-11 text-[15px] bg-white relative  p-[0px_95px_0_10px] w-full"
            type="search"
            placeholder="Search Amazon.in"
          />
          <div className="flex absolute top-0 right-0 w-auto z-[1]">
            <div className="relative h-11 w-[50px] m-[2px_10px_5px_5px] border-0 cursor-pointer bg-[#febd69] rounded-[8px]">
              <input className="absolute top-0 left-0 w-full h-full cursor-pointer z-[10px] border-0 leading-[1px]  m-[2px_10px_5px_5px]" />
              <i className=" bg-[length:275px] absolute top-2.5 left-3 bg-[position:-73px_-239px] w-[27px] h-[25px] bg-no-repeat invert" style={{backgroundImage:`url(${smallIconImage})`}}></i>
            </div>
          </div>
        </form>
      </div>

      



    </header>

    {showTopBar && <TopBar toggleBtn={handleSideBar} />}

      {showSideBar && <SideMenuBar toggleBtn={handleSideBar} toggle={showSideBar} />}

    </>
  );
}

export default Header;
