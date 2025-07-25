import bigScreenIcon from '../../public/icon-image/bigSizeIcon.png'


function NavDesk() {

    const bigIcon = bigScreenIcon

    const menuCategory=['Fresh','MX Player','Sell','Bestsellers',`Today's Deal`,'Mobiles','prime','Customer Service','Fashion','New Releases','Home & Kitchen']

  return (
    <nav className="pl-[1px] h-[39px] pt-0 flex static flex-nowrap bg-[#232f3e] w-full transform translate-[0,0,0] z-[4] bg-[position:0_-725px] ">
      <a
        href="#"
        className="flex static items-center w-auto h-auto border:none p-[8px_9px_8px_9px] m-0 text-[25px] text-white rounded-[3px]"
      >
        <i
          className="w-[17px] h-[14px] bg-[position:-172px_-255px] flex static "
          style={{ backgroundImage:`url(${bigIcon})`}}
        ></i>
        <span className="font-fontBold text-sm pl-[5px] whitespace-nowrap leading-3">
          All
        </span>
      </a>

      <ul className="list-none p-0 m-0 h-full flex flex-[1_1_auto]">
        { menuCategory.length > 0 &&
          menuCategory.map((item, index) => {
            return (
             <li
                className="inline-block p-[0_5px] relative align-middle h-full"
                key={index}>
                <a className="m-[5px_0px_6px_0px] p-[8px-5px] h-7 text-white text-sm flex items-center "
                href="#">
                {item}
                </a>
            </li>
            );
          })}
      </ul>
    </nav>
  );
}

export default NavDesk;

