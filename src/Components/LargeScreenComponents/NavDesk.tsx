import { useEffect, useState } from 'react';
import bigScreenIcon from '../../../public/icon-image/bigSizeIcon.png'
import useWindowWidth from '../../Resize/WindowWidth';

type NavDeskType={
  sideBar:()=> void
}

function NavDesk({sideBar}:NavDeskType) {


    const menuCategory:string[]=['Fresh','MX Player','Sell','Bestsellers',`Today's Deals`,'Mobiles','Prime','Customer Service','Fashion','New Releases','Home & Kitchen','Electronics','Amazon Pay','Computers','Beauty & Personal Care','Books','Car & Motorbike','Video Games']

    const [menuList,setMenuList] = useState<string[]>(menuCategory.slice(0,10))

    const screenWidth = useWindowWidth()

  useEffect(()=>{
    if(screenWidth >= 1760){
      setMenuList(menuCategory.slice(0,18))
    }
    else if(screenWidth >= 1650){
      setMenuList(menuCategory.slice(0,17))
    }
    else if(screenWidth >= 1526){
      setMenuList(menuCategory.slice(0,16))
    }
    else if(screenWidth >= 1468){
      setMenuList(menuCategory.slice(0,15))
    }
   else if(screenWidth > 1312){
      setMenuList(menuCategory.slice(0,14))
    }
    else if(screenWidth > 1212){
      setMenuList(menuCategory.slice(0,13))
    }
    else if(screenWidth > 1112){
      setMenuList(menuCategory.slice(0,12))
    }
    else if(screenWidth > 1012){
      setMenuList(menuCategory.slice(0,11))
    }
    else{
      setMenuList(menuCategory.slice(0,10))
    }
  },[screenWidth])

  return (
    <nav className="pl-[11px]  h-[39px] pt-0 flex static flex-nowrap bg-[#232f3e] w-full transform translate-[0,0,0] z-[4] bg-[position:0_-725px] desk2xl:pl-[15px]">
      <button
        onClick={sideBar}
        className="flex static items-center cursor-pointer w-auto h-auto border:none p-[8px_9px_8px_9px] m-0 text-[25px] text-white rounded-[3px] desk2xl:mr-[3px] hover:outline hover:outline-white hover:rounded-none ">
        <i
          className="w-[17px] h-[14px] bg-[position:-172px_-255px] flex static "
          style={{ backgroundImage:`url(${bigScreenIcon})`}} ></i>
        <span className="font-fontBold text-sm pl-[5px] whitespace-nowrap leading-3">
          All
        </span>
      </button>

      <ul className="list-none p-0 m-0 h-full flex flex-[1_1_auto]">
        { menuList.length > 0 &&
          menuList.map((item,index) => {
            return (
             <li
                className="inline-flex p-[0px_10px] relative align-middle h-full hover:outline hover:outline-white "
                key={index}>
                <a className="m-[5px_0px_6px_0px] p-[8px-5px] h-7 text-white text-sm flex items-center "
                href="#">
                {item}
                </a>
                <button className={`m-[18px_0px_4px] relative left-[5px] border-4 border-b-0 cursor-pointer border-[transparent] ${index === 6 ? 'inline-block':'hidden'}  border-t-[#a7acb2] p-0  w-0 h-0 leading-0 items-center `}>
               </button>
            </li>
            );
          })}
      </ul>
    </nav>
  );
}

export default NavDesk;

