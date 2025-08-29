import {
  deskNavfooterFour,
  deskNavfooterOne,
  deskNavfooterThree,
  deskNavfooterTwo,
} from "../../Types/DeskCategories";
import DeskNavFooter from "./DeskNavFooter";
import bigSizeIcon from "../../../public/icon-image/bigSizeIcon.png";
import flagIcon from "../../../public/icon-image/flag.png";
import AmazonService from "./AmazonService";

function DeskFooter() {
  return (
    <div className=" bg-[#232F3E] min-w-[1000px] relative  m-0 p-[0_0_0px_0] ">
      <a href="#" className="mb-10 bg-[#37475A] text-white block text-center p-[15px_0] leading-[19px] text-[13px]">
        Back to top
      </a>
      <div className="max-w-250 m-[0_auto] flex gap-25">
        <DeskNavFooter navlink={deskNavfooterOne} heading={"Get to Know Us"} />
        <DeskNavFooter navlink={deskNavfooterTwo} heading={"Connect with Us"} />
        <DeskNavFooter
          navlink={deskNavfooterThree}
          heading={"Make Money with Us"}
        />
        <DeskNavFooter
          navlink={deskNavfooterFour}
          heading={"Let Us Help You"}
        />
      </div>
      <div className="mt-10 border-b border-b-[#3a4553]"></div>
      <div className="m-[10px_auto] max-w-250 text-center">
        <span className="p-[0_7.2px] inline-block m-[30px_auto_11px]">
          <div
            className="bg-[position:-10px_-90px] w-19 h-[27px] m-[0_auto] bg-repeat-x"
            style={{ backgroundImage: `url(${bigSizeIcon})`}}
          ></div>
        </span>
        <span className="mt-[18px] ml-[70px] p-[0_7.2px] inline-block align-top leading-[18px] ">
          <div className="!inline-block border border-[#848668] rounded-[3px] p-[6px_18px_6px_8px] mr-1 text-[13px]">
            <a
              className="inline-block p-[0_7.2px] no-underline whitespace-normal "
              href="#">
              <div
                className=" inline-block bg-[position:-77px_-24px] bg-[length:194px_295px] w-[15px] h-[15px] relative top-0.5 left-0"
                style={{ backgroundImage: `url(${flagIcon})`}}></div>
              <span className="text-[#CCC] inline-block p-[0_7.8px] leading-[18px]">
                English
              </span>
            </a>
            <button
              className="bg-[position:-79px_-79px] w-3 h-4  bg-[length:194px_295px] p-[1px_6px] relative top-[4px] left-2 border-none cursor-pointer"
              style={{ backgroundImage: `url(${flagIcon})`}}></button>
          </div>

          <a
            className="inline-block border border-[#848668] rounded-[3px] p-[6px_18px_6px_8px] mr-1 "
            href="#">
            <span
              className="bg-[position:-18px_-36px] m-[3px_0_0] relative top-px p-[0_7.8px] inline-block bg-[length:194px_295px] w-[18px] h-3"
              style={{ backgroundImage: `url(${flagIcon})` }}
            ></span>
            <span className="text-[#CCC] p-[0_7.8px] text-[13px] leading-[18px]">
              India
            </span>
          </a>
        </span>
      </div>
      <AmazonService />

      <div className="bg-[#131A22] max-w-full text-center p-[10px_0_30px] leading-[18px] text-xs">
        <ul className="flex flex-wrap justify-center list-none ml-[18px] text-xs">
          <li className="inline text-[#DDD] p-[0_7.2px] leading-[18px]">
            Conditions of Use & Sale
          </li>
          <li className="inline text-[#DDD] p-[0_7.2px] leading-[18px]">
            Privacy Notice
          </li>
          <li className="inline text-[#DDD] p-[0_7.2px] leading-[18px]">
            Interest-Based Ads
          </li>
        </ul>
        <span className="inline text-[#DDD] p-[0_7.2px] font-normal !h-[18px]">
          © 1996-2025, Amazon.com, Inc. or its affiliates
        </span>
      </div>
    </div>
  );
}

export default DeskFooter;
