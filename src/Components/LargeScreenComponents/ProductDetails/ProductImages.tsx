import { useState } from "react";

type ProductImagesType={
    productImg:string[] | undefined
}

function ProductImages({productImg}:ProductImagesType) {

    const [index,setIndex] = useState <number>(0)
    
  return (
   <>
    {
        productImg  && (
             <div className="sticky top-1 h-auto float-left mr-[2%] w-[45%] overflow-visible">
      <div className="absolute z-[3] border-none rounded-[50%] flex items-center justify-center top-2.5 right-2.5 bg-white w-[calc(24px*1.4)] h-[calc(24px*1.4)] ">
        <button
          className="h-6 w-6 cursor-pointer inline-block bg-cover outline-0"
          style={{
            backgroundImage:`url(https://m.media-amazon.com/images/G/01/share-icons/share-std.svg)`,
          }}
        ></button>
      </div>
      <div className="w-10 -mr-10 float-left relative z-[50]">
        <ul className="list-none mt-8 ">
          {productImg?.map((item,i)=> {
            return (
              <li
                onMouseEnter={()=>setIndex(i)}
                key={i}
                className={`mb-2 block p-0 text-center align-middle cursor-pointer border border-[#0a7cd1] overflow-hidden rounded-[7px]  !w-10 h-13 ${index === i ? 'border-2 border-[#0a7cd1]':'border-[#000000]'} `}>
                <img
                  src={item}
                  alt="img"
                  className=" max-w-full  rounded-[7px] min-w-[5px] align-top"/>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="relative overflow-visible pl-[calc(1%+40px)] float-left w-full mb-2">
        <div className="max-h-175 relative p-[1px_6px] desk2xl:h-175  after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#000] after:opacity-[.03] after:pointer-events-none after:content-[''] after:block">
          <img
            src={productImg[index]}
            alt="product-image"
            className="flex mx-auto h-full w-auto align-top"
          />
        </div>
      </div>
    </div>
        )
    }
   </>
  );
}

export default ProductImages;



