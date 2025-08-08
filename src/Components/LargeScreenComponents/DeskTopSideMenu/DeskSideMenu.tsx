import bigIcon from "../../../../public/icon-image/bigSizeIcon.png";
import { deskSideMenuListFive, deskSideMenuListFour, deskSideMenuListOne, deskSideMenuListThree, deskSideMenuListTwo } from "../../../Types/deskSideMenuList";
import DeskSideMenuSection from "./DeskSideMenuSection";

type deskSideMenuType={
  sideBar:()=> void
}

function DeskSideMenu({sideBar}:deskSideMenuType) {
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 z-[9999] visible">
      <div className=" bg-[rgba(0,0,0,.8)] absolute h-full w-full opacity-[1] flex "></div>

      <div className=" w-[365px] min-w-[270px] fixed bg-white flex-col h-full shadow-[4px_0_10px_0_rgba(0,0,0,.4)] flex transform-[translateX(0)]">
        <button
          className="bg-[position:-190px_-288px] left-[380px] top-5 cursor-pointer fixed w-5 h-5 flex bg-repeat-y"
          onClick={sideBar}
          style={{ backgroundImage: `url(${bigIcon})` }} ></button>

        <div className="bg-[#232f3e] h-[50px] flex items-center py-[12.5px]">
          <div
            className="m-[0_10px_0_36px] bg-[position:-137px_-340px] h-[25px] w-[27px] flex bg-repeat-x"
            style={{ backgroundImage: `url(${bigIcon})` }}></div>
          <span className="flex-1 overflow-hidden flex whitespace-nowrap text-[19px] max-w-[90%] leading-[25px] text-[#fff] text-ellipsis font-fontBold">
            Hello, sign in
          </span>
        </div>

        <div className="relative overflow-x-hidden flex-col flex pt-[7px] pb-[30px] m-0  right-0 left-0 top-0 bottom-0 overflow-scroll ">
        
          <DeskSideMenuSection menuList={deskSideMenuListOne} title="Trending" hasSeeMore={false}/>

          <span className="border-b border-b-[#d5dbdb] p-0 m-[5px_0] block"></span>

          <DeskSideMenuSection menuList={deskSideMenuListTwo} title="Digital Content and Devices" hasSeeMore={false}/>

          <span className="border-b border-b-[#d5dbdb] p-0 m-[5px_0] block"></span>

          <DeskSideMenuSection menuList={deskSideMenuListThree} title="Shop by Category" hasSeeMore={true}/>

          <span className="border-b border-b-[#d5dbdb] p-0 m-[5px_0] block"></span>


          <DeskSideMenuSection menuList={deskSideMenuListFour} title="Programs & Features" hasSeeMore={true}/>

          <span className="border-b border-b-[#d5dbdb] p-0 m-[5px_0] block"></span>

          <DeskSideMenuSection menuList={deskSideMenuListFive} title="Help & Settings" hasSeeMore={false}/>



        </div>
      </div>
    </div>
  );
}

export default DeskSideMenu;
