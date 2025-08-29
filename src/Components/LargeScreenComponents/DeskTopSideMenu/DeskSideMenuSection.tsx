import { useEffect, useState } from "react";
import bigIcon from "/icon-image/bigSizeIcon.png";
import type { deskSideMenuList } from "../../../Types/deskSideMenuList";

type DeskSideMenuSectionType = {
  menuList: deskSideMenuList[];
  title: string;
  hasSeeMore: boolean;
};

function DeskSideMenuSection({
  menuList,
  title,
  hasSeeMore,
}: DeskSideMenuSectionType) {

  const [list, setList] = useState<deskSideMenuList[]>(menuList);
  const [Isexpand, setIsExpand] = useState<boolean>(false);

  useEffect(() => {
    if (hasSeeMore && Isexpand) {
      setList(menuList.slice(0, 4));
    } else {
      setList(menuList);
    }
  }, [menuList, hasSeeMore, Isexpand]);

  const handleSeeMore = () => {
    setIsExpand(!Isexpand);
  };

  return (
    <section className="h-auto ">
      <span className="ml-0 p-[13px_20px_7px_36px] text-lg font-fontBold leading-6 text-[#111] inline-block items-center">
        {title}
      </span>
      <ul className=" p-0 m-[0_0_0_18px] text-[#0f1111] list-none ">
        {list &&
          list.map((item, index) => {
            return (
              <div key={index}>
                <li className=" pb-[15px] m-0 flex items-center pr-5 pl-[18px] pt-[13px] text-[14px] cursor-pointer w-full leading-4 justify-between">
                  <span>{item.list}</span>
                  {item.hasSubList && (
                    <i
                      className=" w-2.5 h-3.5 transform-[scaleX(1)] bg-[position:-137px_-288px] bg-repeat-x"
                      style={{ backgroundImage: `url(${bigIcon})` }}
                    ></i>
                  )}
                </li>

                {!Isexpand && hasSeeMore && index === 3 && (
                  <span className="border-b border-b-[#d5dbdb] p-0 m-[5px_20px_5px_18px] block"></span>
                )}

                {index === 3 && hasSeeMore && Isexpand && (
                  <li className=" pb-[15px] m-0 flex items-center cursor-pointer pr-5 pl-[18px] pt-[13px] text-[14px] w-full leading-4 "
                    onClick={handleSeeMore}>
                    <span>See all</span>

                    <i className="ml-2.5 w-[13px] h-2 transform-[scaleX(1)] bg-[position:-184px_-342px] bg-repeat-x"
                      style={{ backgroundImage: `url(${bigIcon})` }}></i>
                  </li>
                )}

                {index === 10 && !Isexpand && (
                  <li
                    className=" pb-[15px] m-0 flex items-center pr-5 pl-[18px] pt-[13px] text-[14px] w-full leading-4 cursor-pointer"
                    onClick={handleSeeMore}>
                    <span>see less</span>

                    <i className="ml-2.5 w-[13px] h-2  bg-[position:-184px_-342px] bg-repeat-x transform-[rotate(180deg)]"
                      style={{ backgroundImage: `url(${bigIcon})` }}></i>
                  </li>
                )}
              </div>
            );
          })}
      </ul>
    </section>
  );
}

export default DeskSideMenuSection;
 