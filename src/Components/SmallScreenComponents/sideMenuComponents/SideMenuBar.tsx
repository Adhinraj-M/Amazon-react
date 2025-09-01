import smallSizeIcon from "/icon-image/smallSizeIcon.png";

import SideMenuSub from "./SideMenuSub";
import { ProgramsFeaturesMenu, TopCategoriesMenu, TrendingListMenu } from "../../../Types/categories";
import { Link } from "react-router-dom";


 type SideMenuBarProps={
  toggleBtn:()=>void,
}

function SideMenuBar({toggleBtn}:SideMenuBarProps) {

 

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 z-[9999] `}>
      <div className="opacity-[1] bg-[rgba(0,0,0,.8)] absolute will-change-[opacity] h-full w-full flex"></div>
      <div className="fixed bg-white flex-col h-full shadow-[4px_0_10px_0_rgba(0,0,0,.4)] will-change-[transform] transform-[translateX(0)] min-w-[265px] max-w-[calc(100vw-50px)] w-[80vw]">
        <button
          className="fixed w-5 h-5 flex bg-no-repeat bg-[position:-132px_-173px] bg-[length:275px] top-10 right-[-12vw] cursor-pointer"
          style={{ backgroundImage: `url(${smallSizeIcon})` }}
          onClick={toggleBtn}
        ></button>
        <section className="pt-0 pb-[30px] m-0 absolute right-0 left-0 top-0 bottom-0 overflow-scroll will-change-[transform] block">
          <div className="flex flex-col justify-end bg-[#232f3e] text-white">
            <Link to={'/login'} className="flex justify-end mb-4 p-[20px_20px_0_20px] items-center">
              <span className="flex pr-1 text-sm leading-4 text-white">
                Sign in
              </span>
              <span
                className="h-6 w-6 bg-[position:-170px_-268px] bg-[length:275px] bg-no-repeat"
                style={{ backgroundImage: `url(${smallSizeIcon})` }}
              ></span>
            </Link>
            <div className="flex flex-col justify-end p-[0_20px_20px_20px] text-white ">
              <span className="leading-5 flex text-xl font-fontBold ">
                Browse
              </span>
              <span className="leading-7 text-[28px] flex">Amazon</span>
            </div>
          </div>
          <section className="flex justify-between bg-white p-[18px_20px_13px_20px]">
            <p className="m-0 text-[#111] text-[19px] leading-6 font-fontBold capitalize flex">
              Amazon Home
            </p>
            <div
              className="ml-10 justify-end flex h-[19px] w-[19px] bg-[position:-142px_-271px] bg-[length:275px] bg-no-repeat"
              style={{ backgroundImage: `url(${smallSizeIcon})` }}
            ></div>
          </section>

          <span className="p-0 border-b-[5px] border-[#d5dbdb] m-[5px_0_0] block"></span>

          <SideMenuSub menuList={TrendingListMenu} menuTitle={"Trending"} />
          <span className="p-0 border-b-[5px] border-[#d5dbdb]  block"></span>
          <SideMenuSub
            menuList={TopCategoriesMenu}
            menuTitle={"Top Categories for You"}
          />
          <span className="p-0 border-b-[5px] border-[#d5dbdb]  block"></span>
          <SideMenuSub
            menuList={ProgramsFeaturesMenu}
            menuTitle={"Programs & Features"}
          />
        </section>
      </div>
    </div>
  );
}

export default SideMenuBar;
