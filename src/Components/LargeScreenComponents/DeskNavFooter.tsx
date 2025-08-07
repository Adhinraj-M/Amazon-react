type deskNavFooterTypes={
    navlink:string[],
    heading:string
}

function DeskNavFooter({navlink,heading}:deskNavFooterTypes) {
  return (
    <div className="p-[0_10px] leading-[120%] table-cell align-top">
        <h3 className="font-fontBold text-white text-[16px] m-[6px_0_14px_0] leading-[16.8px]">{heading}</h3>
              <ul className="m-0 p-0 list-none">
               {
                navlink && navlink.map((item:string)=>{
                return(
                    <li className="m-[0_0_10px] whitespace-normal text-[#DDD] text-[14px] leading-[16.8px]">{item}</li>
                )
               })}
              
              </ul>
    </div>
  )
}

export default DeskNavFooter