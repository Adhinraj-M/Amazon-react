import smallIcon from "/icon-image/smallSizeIcon.png";


 type TopBarProps={
  toggleBtn:()=>void,

}

function TopBar({toggleBtn}:TopBarProps) {
  return (
    <div className="h-12 fixed top-0  z-[208] flex w-full border-b border-b-[#232f3e] bg-[#232f3e] flex-row flex-nowrap justify-between animate-navbar items-center">
      <button className="flex flex-shrink-0 flex-row flex-nowrap relative w-auto p-[14px_15px] float-left" onClick={toggleBtn}>
        <i
          className=" block w-5 h-5 bg-[position:-20px_-382px] bg-[length:278px] bg-no-repeat overflow-hidden"
          style={{ backgroundImage: `url(${smallIcon})` }}
        ></i>
      </button>

      <div className="w-auto flex-[1] overflow-hidden  whitespace-nowrap rounded-[8px_8px_8px_8px] h-11 m-0 relative bg-white ">
        <input
          type="text"
          className="  relative top-0 left-0  w-full h-full  px-[10px_82px] text-[#000] text-[15px] border-0 outline-0 shadow-[0_1px_0_0_rgba(255,255,255,0.5),_inset_0_1px_0_0_rgba(0,0,0,0.07)]"
          placeholder="Search Amazon.in"
        />
        <div className="absolute top-0 right-0 z-[1] flex w-auto ">
          <div className="bg-[#febd69] w-[43px] rounded-lg relative h-11 border-0 cursor-pointer ">
            <input
              type="submit"
              className="p-[1px_6px] absolute top-0 left-0 w-full h-full cursor-pointer z-[10] border-0 bg-[transparent] indent-[-1000px] leading-px "
            />
            <i
              className=" bg-[length:275px] absolute top-2.5 left-[9px] bg-[position:-73px_-239px] w-[27px] h-[25px] bg-no-repeat invert"
              style={{ backgroundImage: `url(${smallIcon})` }}
            ></i>
          </div>
        </div>
      </div>

      <button className="flex flex-row-reverse flex-wrap overflow-hidden min-w-[61px] p-3 ">
        <div
          className="order-2 !w-[37px]  bg-[length:275px] bg-[position:-10px_-240px] !h-[27px]  relative top-0.5"
          style={{ backgroundImage: `url(${smallIcon})` }}
        >
          <span className="block pl-1.5 text-[16px] text-[#f08804] text-center leading-2.5 font-bold no-underline">
            0
          </span>
        </div>
      </button>
    </div>
  );
}

export default TopBar;
