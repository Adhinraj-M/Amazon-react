import {  useRef, useState } from "react";
import { heroCarouselImg } from "../../Types/product";
import Slider from "react-slick";

function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef<Slider | null>(null)

  const settings = {
      dots: false,
      infinte: true,
      speed: 500,
      slidesToShow: 1,
      beforeChange: (_: number, newIndex: number) => setIndex(newIndex),
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed:5000,
      arrows: true,
  };

  return (
    <>
      <div className="!h-[63vw] relative m-0 w-full z-0">
        <div className="!h-[78vw] w-full overflow-hidden before:bg-[linear-gradient(-180deg,rgba(213,219,219,0)_45%,#E3E6E6_100%)] before:absolute before:top-[50vw] before:bottom-0 before:right-0 before:left-0 before:h-[28vw] before:w-full before:z-[1] before:content-['']">
          <ol className="w-full list-none h-full whitespace-nowrap overflow-x-visible tracking-[-.4rem] p-0 ">
            <Slider ref={sliderRef} {...settings}>
              {heroCarouselImg &&
                heroCarouselImg.map((_,index) => {
                  return (
                    <li
                      key={index}
                      className="w-full text-center opacity-100 m-0 visible overflow-hidden min-h-full inline-block whitespace-normal tracking-normal">
                      <img
                        src={heroCarouselImg[index]}
                        alt="carousel"
                        className="max-w-full max-h-full relative w-full"
                      />
                    </li>
                  );
                })}
            </Slider>
          </ol>
        </div>
      </div>
      <div className="block bottom-[17px] relative leading-0 !text-center">
        <ul className="border-none block m-0 p-0 list-disc w-full ">
          {heroCarouselImg.length > 0 &&
            heroCarouselImg.map((_, i) => {
              return (
                <li
                  key={i}
                  className={`rounded-[20px] border border-[#888c8c] ${
                    index === i ? "bg-blue-500 " : "bg-white"
                  }  inline-block h-[9px] m-[0_5px] p-0 w-[9px] leading-4`}
                ></li>
              );
            })}
        </ul>
      </div>
    </>
  );
}

export default HeroCarousel;
