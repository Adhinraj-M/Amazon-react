import smallIconImage from '../../../public/icon-image/smallSizeIcon.png'

 type HeaderProps={
  toggleBtn:()=>void,
  
}

function Header({toggleBtn}:HeaderProps) {

  const smallIcon = smallIconImage

  return (
    <header className="relative z-[208] text-xs leading-[1em] min-w-[200px]">
      <div className="flex relative h-12 w-full border-b-[#232f3e] flex-row flex-nowrap justify-between bg-[#232f3e]">
        <div className="flex-shrink-0 flex-row flex-nowrap flex relative w-auto">
          <button className="float-left p-3.5 cursor-pointer" onClick={toggleBtn}>
            <i className=" block w-5 h-5 bg-[position:-20px_-382px] bg-[length:278px] bg-no-repeat overflow-hidden" style={{backgroundImage:`url(${smallIcon})`}}></i>
          </button>
          <div className="ml-auto relative float-left z-20 mt-[13px]">
            <span className=" bg-[length:275px] float-left padding-[10px_40px_0px_20px] bg-[position:-185px_-236px] w-20 h-7" style={{backgroundImage:`url(${smallIcon})`}}></span>
            <span className="block float-left m-[1px_0_0_1px] text-[13.5px] text-white leading-3.5 pt-[1px]">
              .in
            </span>
          </div>
        </div>
        <div className="flex-row-reverse flex-wrap overflow-hidden min-w-[60px] flex relative w-auto">
          <div className="order-2">
            <button className="flex ml-[5px] leading-12 text-[13px] text-white">
              Sign in ›
            </button>
          </div>
          <button className="order-1 flex p-[9px_0px_12px_4px] relative w-[39px] cursor-pointer">
            <i className="bg-[length:275px] block  w-[35px] h-[27px] order-2 bg-[position:-141px_-300px]" style={{backgroundImage:`url(${smallIcon})`}}></i>
          </button>
          <button className="pl-[7px] order-0 flex p-[10px_18px_11px_12px]">
            <div className="order-2 w-[37px]  bg-[length:275px] bg-[position:-10px_-240px] h-[27px]" style={{backgroundImage:`url(${smallIcon})`}}>
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
              <i className=" bg-[length:275px] absolute top-2.5 left-3 bg-[position:-73px_-239px] w-[27px] h-[25px] bg-no-repeat invert" style={{backgroundImage:`url(${smallIcon})`}}></i>
            </div>
          </div>
        </form>
      </div>

      <div className="flex h-[45px] overflow-x-scroll pt-3 w-full bg-[#232f3e] overflow-hidden">
        <ul className="contents list-none ">
          <li className="relative m-[0px_0px_20px_15px] pr-[3px] leading-[15px] text-[15px] font-normal text-white">
            Category
            <span className="absolute top-[-14px] left-0 text-[11px] text-white">
              Shop By
            </span>
          </li>

          <li className="m-[0px_0px_20px_15px] pr-[3px] leading-[15px] text-[15px] font-normal text-white">
            Deals
          </li>
          <li className="m-[0px_0px_20px_15px] pr-[3px] leading-[15px] text-[15px] font-normal text-white">
            Sell
          </li>
        </ul>
      </div>



    </header>
  );
}

export default Header;
