function HeroCarousel() {
  return (
    <div className="!h-[63vw] relative m-0 w-full ">
      <div className="!h-[78vw] w-full overflow-hidden before:bg-[linear-gradient(-180deg,rgba(213,219,219,0)_45%,#E3E6E6_100%)] before:absolute before:top-[50vw] before:bottom-0 before:right-0 before:left-0 before:h-7 before:w-full before:z-index before:content-['']">
        <ol className="w-full list-none h-full whitespace-nowrap overflow-x-visible tracking-[-.4rem] p-0 ">
            <li className="w-full text-center opacity-100 m-0 visible overflow-hidden min-h-full inline-block whitespace-normal tracking-normal"> 
               {/* <img src="https://m.media-amazon.com/images/I/715YzPdi7TL._SR1236,1080_.png" alt="first" className="max-w-full max-h-full relative w-full" /> */}

               <video src="https://m.media-amazon.com/images/I/C1ET+UPm+XL.mp4" muted preload="auto" loop  >
                <source src="https://m.media-amazon.com/images/I/C1ET+UPm+XL.mp4" type="video/mp4"/>
               </video>
            </li>
        </ol>
      </div>
    </div>
  );
}

export default HeroCarousel;
