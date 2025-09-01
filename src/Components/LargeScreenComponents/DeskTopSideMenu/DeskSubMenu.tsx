
type deskSubMenuType={
  handleDetailedMenu:()=>void
  subLists:{heading:string,lists:string[]}[] | undefined
}

function DeskSubMenu({handleDetailedMenu,subLists}:deskSubMenuType) {
  return (
    <div className="pt-[7px] pb-7.5 relative right-0 left-0 bottom-0 top-0  overflow-y-scroll">
        <button onClick={handleDetailedMenu} className="cursor-pointer w-full border-b border-b-[#d5dbdb] flex items-center p-[13px_20px_13px_36px] group hover:bg-[#eaeded]">
          <div className="flex items-center text-sm leading-4 uppercase font-semibold">
            <i className="w-4 h-4 mr-2.5 scale-x-100 bg-[position:-137px_-310px] bg-no-repeat group-hover:bg-[position:-166px_-310px]" style={{backgroundImage:`url(https://m.media-amazon.com/images/G/31/gno/sprites/nav-sprite-global-1x-reorg-privacy._CB546381437_.png)`}}></i>
            main menu
          </div>
        </button>

      { subLists && subLists.map((menuLists,listIndex)=>{
        return(
          <section key={listIndex} className="h-auto block">
          <h1 className="ml-0 p-[13px_20px_7px_36px] text-lg font-fontBold leading-6 text-[#111] inline-block items-center">{menuLists.heading}</h1>
          <ul className="list-none  ">
            {
              menuLists.lists.map((list,index)=>{
                return(
                <li key={index} className=" flex items-center p-[13px_20px_15px_36px] text-[#111] text-sm leading-4 font-medium hover:bg-[#eaeded]" >{list}</li>
                )
              })
            }
          </ul>
         { listIndex < subLists.length-1 && <span className="border-b border-b-[#d5dbdb] m-[5px_0] block"></span>}
        </section>
        )
      }) }
    </div>
  )
}

export default DeskSubMenu


