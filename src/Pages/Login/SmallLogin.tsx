import { Link } from "react-router-dom"
import smallIconImage from '/icon-image/smallSizeIcon.png'
import flag from '/icon-image/flag.png'


function SmallLogin() {
  return (
    <div className="min-large:hidden">
        <header className="flex relative z-[288] h-12 w-full  bg-[#232f3e] flex-nowrap justify-start ">
        <Link to={'/'}className=" relative float-left z-20 m-[13px_0_0_12px]">
            <span className=" bg-[length:275px] float-left padding-[10px_40px_0px_20px] bg-[position:-185px_-236px] w-20 h-7" style={{backgroundImage:`url(${smallIconImage})`}}></span>
            <span className="block float-left m-[1px_0_0_1px] text-[13.5px] text-white leading-3.5 pt-[1px]">
              .in
            </span>
        </Link>
        </header>
        <div className="min-w-50 p-[12px_14px_28px_14px] m-[0_auto] mb-[13px] max-w-[383.5px] ">
          <h3 className="mb-4 font-fontBold text-lg leading-[1.25] pb-1">
            Sign in or create account
        </h3>
        <p className="mb-1 font-fontBold text-[15px] leading-[20.25px]">Enter mobile number or email</p>
        <div className="flex border border-[#888C8C] rounded-[3px] shadow-[0_1px_2px_rgba(15_17_17/15%)_inset] outline-0 mb-6 ">
        <input  type="text" className=" p-[11px_15px] text-[16px] h-10.5 w-full border-none outline-none shadow-none flex-1 rounded-sm" />
        </div>

      <button className="relaive text-center h-11 w-full rounded-[100px] bg-[#ffd814] border-[#ffd814] cursor-pointer p-[11px_15px] text-[16px] leading-5">Continue</button>
      <p className="text-[13px] mt-4 leading-[1.4] my-[16px_13px] ">
       By continuing, you agree to Amazon's  <span className="text-[#2162a1] underline">Conditions of Use</span> and <span className="text-[#2162a1] underline">Privacy Notice</span>.</p>
       <hr className="bg-transparent border-[#d5d9d9] h-px leading-[1.35] mb-[13px]" />
       <p className="mb-1 font-fontBold text-[15px] !leading-[20.25px]">
        Buying for work?
      </p>
      <p className="text-[#2162a1] text-[15px] leading-[20.25px]">Create a free business account</p>
        </div>

        <footer className="bg-[#0D141E] pb-[35px] relative w-full min-w-50 text-sx">
          <div className="py-[25px_12px] text-center">
            <div className=" !inline-block text-sm text-left p-[14px_12.6px] leading-3 mr-0.5">
              <span className="bg-[position:-77px_-24px] bg-[length:194px_295px] w-[15px] h-[15px] top-[2.8px] relative left-[-8.4px] inline-block" style={{backgroundImage:`url(${flag})`}}></span>
              <span className="text-[#CCC]">English</span>
            </div>
            <div className="!inline-block text-sm text-left p-[10.5px_12.6px] leading-3 ml-0.5 ">
              <span className="bg-[position:-18px_-36px] mx-[7px] relative top-px bg-[length:194px_295px] w-4.5 inline-block h-3" style={{backgroundImage:`url(${flag})`}}></span>
              <span className="text-[#ccc] !text-sm">India</span>
            </div>
          </div>
           <ul className="mb-2 list-none leading-[15px] text-center m-[0_0_13px] p-0 min-h-[11px] flex justify-center gap-[19px]">
        <li className="inline-block  text-[11px] text-[#CCC]">
          Conditions of Use
        </li>
        <li className="inline-block  text-[11px] text-[#CCC]">
          Privacy Notice
        </li>
        <li className="inline-block  text-[11px] text-[#CCC]">
          Interest-Based Ads
        </li>
      </ul>
      <div className="text-[#CCC] text-center text-[11px] mb-3">
        © 1996-2025, Amazon.com, Inc. and its affiliates
      </div>
        </footer>
    </div>
  )
}

export default SmallLogin    





 