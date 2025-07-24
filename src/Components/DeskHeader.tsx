
function DeskHeader() {
  return (
    <header>
      {/* first section  */}
      <div className="bg-[#131921] flex h-[60px] flex-row flex-nowrap w-full">
        <div className="h-[60px] flex">
          <div className="m-[1px_1px_1px_2px] w-auto p-[5px_8px_0px_6px] flex relative top-0 right-0 bottom-0 left-0 flex-shrink-0 cursor-pointer ">
            <span className="bg-[url('/icon-image/bigSizeIcon.png')] mt-[11px] bg-[position:-9px_-125px] w-[98px] h-[34px] bg-repeat-x"></span>
            <span className="w-auto mt-[16.5px] bg-[position:-270px_-109px] h-3.5 m-[6px_0px_0px_1px] text-[13.5px] text-white leading-3.5">
              .in
            </span>
          </div>
        
          <div className="w-auto h-[60px] p-0 m-0 flex overflow-hidden static ">
            <div className="p-[0px_9px_0px_9px] m-[5px_2px_5px_0] flex overflow-hidden flex-row flex-nowrap items-center">
              <div className="bg-[url('/icon-image/bigSizeIcon.png')] bg-repeat-x w-[15px] h-[18px] mt-2 bg-[position:-71px_-378px]"></div>
            <div className="ml-[3px] flex flex-col flex-nowrap ">
              <span className="text-[#ccc] mt-0 pr-0 text-xs leading-3.5 h-3.5 font-normal ">
                Delivering to Kalpatta 673122
              </span>
              <span className="pb-[1px] pr-0 text-white text-sm leading-[15px] font-bold font-test">Update location</span>
            </div>
            </div>
          </div>
        </div>

        {/* center search bar */}

        <div className="flex h-[60px]  flex-[1_1_auto] w-auto items-center">
          <form className=" h-[40px] flex rounded-[4px] flex-[1_1_0px] overflow-hidden m-[10px_4px_10px_3px]">
            <div className="flex pl-[5px] overflow-hidden h-full bg-[#e6e6e6] relative border border-[#cdcdcd]  ">
              <span className="block h-full relative overflow-hidden whitespace-nowrap text-ellipsis text-[#555] text-xs leading-[33px] mr-[21px] ml-[5px] min-w-[19px] top-[3px]">All</span>
              <i className="bg-[url('/icon-image/bigSizeIcon.png')] absolute  right-2 border-4 border-[transparent] border-t-[#666] top-[17px]"></i>

            {/* <select name="" id="">

            </select> */}

            </div>

            <div className="flex relative h-auto flex-[1_1_0px]">
              <div className="flex flex-[1_1_0px] static border-none border-t border-t-[transparent] h-10 bg-white">
              <input type="text" className="flex static float-none z-[9]  w-full leading-[15px] p-[7px_10px_10px_0px] m-0 border-0  outline-none text-[15px] text-[#111] indent-2 align-middle placeholder:text-gray-500" placeholder="Search Amazon.in" />
              </div>

            </div>

            <div className="w-[45px] bg-[#febd69] cursor-pointer rounded-[0px_4px_4px_0px] bg-[position:0_-381px]">
            <span className="bg-[url('/icon-image/bigSizeIcon.png')] flex flex-[1_1_auto] bg-[position:2px_-280px] bg-repeat-x h-full">
              <button className="h-full w-full text-sm p-0 m-0 text-white border-none leading-[1px]"></button>
            </span>
            </div>
              
          </form>
         </div>

            <div className="h-[60px] flex mt-0.5 p-[3px_0px_0px_0px] ">

              {/* language -section */}

              <div className="m-[0_1px_0_1px] pl-[7px] pb-[5px] flex relative pr-1.5">
                <a href="#" className="p-[0_0_5px] m-[1px] items-center text-white text-sm leading-11 font-bold flex static h-[50px]">
                  <span className="flex static m-0 p-0 flex-col flex-nowrap justify-center">
                    <span className="pb-0.5 pr-2 flex text-xs leading-3.5 font-normal h-3.5"></span>
                    <span className="ml-1px flex m-0 p-0 items-center text-white text-sm leading-[15px] font-bold">
                     <span className="bg-[url('/icon-image/flag.png')] scale-90 m-[0_2px_1px_0] flex bg-[position:0_-166px] w-6 h-[18px]"></span>
                    <span className="flex items-center p-0 m-0 leading-[15px]">EN</span>
                    </span>
                    </span>               
                </a>
                <button className="m-[6px_0_0_1px] mt-[31px] relative  border-4 border-b-0 cursor-pointer border-[transparent]  border-t-[#a7acb2] p-0 inline-block w-0 h-0 leading-0 items-center " style={{visibility:"visible"}}></button>
              </div>



                <div className="mr-0 ml-0 px-[9px] flex relative items-start left-0 right-0 bottom-0 top-0">
                <a href="#" className="p-[0_4px_8px] flex flex-shrink-0 justify-center pl-[9px] h-[50px] overflow-hidden flex-col flex-nowrap">
                  <span className="relative w-full h-3.5 mt-[9px] items-center p-0 m-0 text-white text-xs leading-3.5 font-normal">Hello, sign in</span>
                  <span className="w-auto flex static items-center p-0 m-0 text-white text-sm leading-[15px] font-bold">Account & Lists</span>
                </a>
                <button className="m-[6px_0_0_1px] mt-[31px] bottom-2 relative border-4 cursor-pointer border-[transparent]  border-t-[#a7acb2] p-0 flex items-center" style={{visibility:"visible"}}></button>
                </div>

                <div className="h-[50px] mr-0 ml-0 p-[0px_9px_10px_9px] flex flex-col flex-nowrap justify-center static">
                  <span className="mt-[9px] h-3.5 flex items-center text-white text-xs leading-3.5 font-normal ">Returns</span>
                  <span className="flex static items-center text-white text-sm leading-[15px] font-bold ">& Orders</span>
                </div>

                <a className="flex p-[0_9px_11px_10px] justify-center ml-0 mr-[3px[ flex-row flex-nowrap h-[50px]" href="#">
                  <div className="pb-0 relative flex flex-col flex-nowrap justify-end items-start">
                    <span className="absolute left-[13px] right-auto top-2 justify-center flex items-center text-[#f08804] text-[16px] w-[19px] font-bold leading-4 text-center">0</span>
                    <span className="bg-[url('/icon-image/bigSizeIcon.png')] bg-[position:-10px_-340px] h-[26px] w-[38px]  bg-repeat-x"></span>
                  </div>
                  <span className="flex static items-end justify-start text-white text-sm leading-[15px] font-bold">Cart</span>
                </a>

            </div>

      </div>
    </header>



              

  
  );
}

export default DeskHeader