import flagIcon from "../../../public/icon-image/flag.png";

function Footer() {
  const footerMenu: string[] = [
    "Your Amazon.in",
    "Your Orders",
    "Amazon Pay",
    "Amazon App Download",
    "Your Lists",
    "Your Account",
    "Your Recently Viewed Items",
    "Returns",
    "Recalls and Product Safety Alerts",
    "Sell",
    "Customer Service",
  ];

  return (
    <footer className="bg-[#0D141E] pb-[35px] relative w-full min-w-[200px] text-xs leading-3 ">
      <a
        href="#"
        className="h-[50px] pt-[5px] bg-[#37475A] shadow-none block text-center border-b-[#cdcdcd]"
      >
        <i className="border-[5px] bg-[transparent] border-t-0 border-b-[5px] border-b-[#CCCCCC]  border-[transparent] w-0 h-0 leading-0 inline-block "></i>
        <b className="text-white font-normal block text-[11px] leading-[30px] uppercase ">
          Top of page
        </b>
      </a>
      <ul className="m-0 !p-[0_20px_25px_20px] bg-[#232F3E] border-0 rounded-[0] overflow-hidden grid grid-cols-2  gap-x-2">
        {footerMenu.length > 0 &&
          footerMenu.map((item, index) => {
            return (
              <li
                key={index}
                className={`pr-0 w-full block mb-0 mt-[25px] relative border-b-0 list-none m-0 p-0 text-[15px] text-white leading-4 tab:bottom-0 ${
                  index === 9 ? "bottom-4" : ""
                }`}
              >
                {item}
              </li>
            );
          })}
      </ul>
      <div className="pt-[25px] pb-3 text-center ">
        <div className=" !inline-block text-sm text-left p-[14px_12.6px] leading-3">
          <span
            className="bg-[position:-77px_-24px] bg-[length:194px_295px] w-[15px] h-[15px] top-[2.8px] relative left-[-8.4px] inline-block"
            style={{ backgroundImage: `url(${flagIcon})` }}
          ></span>
          <span className="text-[#CCC]">English</span>
        </div>
      </div>
      <div className="py-[25px] m-0 text-white text-[15px] leading-5 text-center ">
        Already a customer?
        <a href="#" className="text-white pl-[5px]">
          Sign in
        </a>
      </div>
      <ul className="mb-2.5 list-none leading-[15px] text-center m-[0_0_13px] p-0 min-h-[11px] flex justify-center gap-[19px]">
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
      <div className="text-[#CCC] text-center text-[11px]">
        © 1996-2025, Amazon.com, Inc. and its affiliates
      </div>
      <div className="mt-[15px]"></div>
    </footer>
  );
}

export default Footer;
