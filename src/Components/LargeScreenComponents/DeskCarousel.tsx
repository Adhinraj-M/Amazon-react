import { useEffect, useState } from "react";
import { deskCarousel } from "../../Types/DeskCategories";

function DeskCarousel() {

  const [index,setIndex]=useState(0)

  const carouselLength=deskCarousel.length

  useEffect(()=>{
    const interval=setInterval(() => {
      setIndex(prev=>(prev+1) % carouselLength )
    },5000);
    
    return()=> clearInterval(interval)

  },[carouselLength])

  const handleNextCarousel=()=>{
      
        setIndex(prev=>(prev + 1) % carouselLength)
      

  }

  const handlePrevCarousel=()=>{
     setIndex(prev=>(prev - 1 + carouselLength) % carouselLength)
  }



  return (
    <div className="w-full max-w-[1500px] m-[0_auto] max-h-[230px] z-0 h-[300px] relative !mb-0 overflow-visible ">
      <div className="max-h-[230px] w-full ">
        <div className="relative h-full ">
          <div className="visible z-10 max-h-[250px] w-21 absolute h-full top-0 left-0 pl-[5px] overflow-visible min-h-px ">
            <button className="absolute left-0 right-0 bottom-0 top-0 outline-0 rounded-[5px] cursor-pointer" onClick={handlePrevCarousel}>
              <i
                className="absolute top-1/2 left-1/2 transform-[translate(-50%,_-50%)] bg-[position:0_0] bg-[length:68px_52px] w-[34px] h-13 outline-0 bg-no-repeat"
                style={{
                  backgroundImage:
                    "url(https://m.media-amazon.com/images/S/sash/ydDD9hnRfziI$y7.png)",
                }}
              ></i>
            </button>
          </div>

          <div className=" m-0  min-h-px relative h-auto w-full overflow-hidden before:bg-[linear-gradient(-180deg,rgba(234,237,237,0),#E3E6E6)] before:bottom-0 before:content-[''] before:left-0 before:absolute before:right-0 before:top-[250px] before:z-[1]">
            <ol className=" transition-all m-0 list-none h-full whitespace-nowrap overflow-x-visible p-0"> 
              <li  className=" w-full m-0 text-center align-top overflow-hidden min-h-full list-none inline-block whitespace-normal ">
                <img
                  className="max-w-full max-h-full"
                  src={deskCarousel[index]}
                  alt="desktop carousel"/>
              </li>
            </ol>
          </div>

          <div className="visible z-10 max-h-[250px] w-21 absolute h-full top-0 text-right right-0 pr-[5px] overflow-visible min-h-px">
            <button className="absolute top-0 right-0 left-0 bottom-0 outline-0 rounded-[5px] cursor-pointer" onClick={handleNextCarousel}>
              <i
                className="absolute top-1/2 left-1/2 transform-[translate(-50%,_-50%)] bg-[position:-34px_0] bg-[length:68px_52px] w-[34px] h-13 outline-0 bg-no-repeat"
                style={{
                  backgroundImage:
                    "url(https://m.media-amazon.com/images/S/sash/ydDD9hnRfziI$y7.png)",
                }}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeskCarousel;
