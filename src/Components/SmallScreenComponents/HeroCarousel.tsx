import { IoIosPlay } from "react-icons/io";

function HeroCarousel() {
  return (
    <>
    <div className="!h-[63vw] relative m-0 w-full z-0">
      <div className="!h-[78vw] w-full overflow-hidden before:bg-[linear-gradient(-180deg,rgba(213,219,219,0)_45%,#E3E6E6_100%)] before:absolute before:top-[50vw] before:bottom-0 before:right-0 before:left-0 before:h-[28vw] before:w-full before:z-index before:content-['']">
        <ol className="w-full list-none h-full whitespace-nowrap overflow-x-visible tracking-[-.4rem] p-0 ">
            <li className="w-full text-center opacity-100 m-0 visible overflow-hidden min-h-full inline-block whitespace-normal tracking-normal"> 
               {/* <img src="https://m.media-amazon.com/images/I/715YzPdi7TL._SR1236,1080_.png" alt="first" className="max-w-full max-h-full relative w-full" /> */}

               <video src="https://m.media-amazon.com/images/I/C1ET+UPm+XL.mp4" muted preload="auto" loop autoPlay >
                <source src="https://m.media-amazon.com/images/I/C1ET+UPm+XL.mp4" type="video/mp4"/>
               </video>

               <div className="flex bottom-[7%] left-auto opacity-[1] right-[15px] w-auto absolute h-[30px] ">
                <button className="!bg-[rgba(0,0,0,.25)] rounded-[50%] mr-[5px] w-[30px] cursor-pointer relative text-center flex justify-center items-center">
                    <IoIosPlay className="text-white"/>              
                </button>
               </div>
            </li>
        </ol>
      </div>
    </div>
        <div className="block bottom-[17px] relative leading-0 !text-center">
          <ul className="border-none block m-0 p-0 list-disc w-full ">
              <li className="rounded-[20px] border border-[#888c8c] bg-white inline-block h-[9px] m-[0_5px] p-0 w-[9px] leading-4"></li>
              <li className="rounded-[20px] border border-[#888c8c] bg-white inline-block h-[9px] m-[0_5px] p-0 w-[9px] leading-4"></li>
              <li className="rounded-[20px] border border-[#888c8c] bg-white inline-block h-[9px] m-[0_5px] p-0 w-[9px] leading-4"></li>
              <li className="rounded-[20px] border border-[#888c8c] bg-white inline-block h-[9px] m-[0_5px] p-0 w-[9px] leading-4"></li>
              <li className="rounded-[20px] border border-[#888c8c] bg-white inline-block h-[9px] m-[0_5px] p-0 w-[9px] leading-4"></li>
              <li className="rounded-[20px] border border-[#888c8c] bg-white inline-block h-[9px] m-[0_5px] p-0 w-[9px] leading-4"></li>
          </ul>
        </div>
    </>
  );
}

export default HeroCarousel;
