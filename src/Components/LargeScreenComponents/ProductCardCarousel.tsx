import mediaIcons from '/icon-image/mediaIcons.png'
import  type {CategoryProductImg}  from '../../Types/DeskCategories'

type ProductCardCarouselType ={
    products:CategoryProductImg[],
    categoryTitle:string
}

function ProductCardCarousel({products,categoryTitle}:ProductCardCarouselType) {
  return (
    <div className="bg-white p-[10px_20px] m-[0_20px]">
      <div className="whitespace-nowrap overflow-hidden m-[10px_0_0]">
        <h2 className="block w-auto float-left !leading-[1.5] overflow-hidden text-ellipsis  pb-0 text-[21px] font-fontBold">
          {categoryTitle}
        </h2>
        <span className="block w-auto float-left text-right text-sm align-middle pl-[15px] leading-[35px] overflow-hidden text-ellipsis text-[#2162a1]">
          See all offers
        </span>
      </div>
      <div className="w-full m-[0_0_5px] relative overflow-hidden">
        <div className="w-full min-h-55 whitespace-nowrap overflow-hidden relative m-0">
          <ul className="inline-block relative m-[0_0_10px] p-0 list-none">
            {products &&
              products.map((item, index) => {
                return (
                  <li
                    className="inline-block m-0 text-center min-w-[145px] max-w-70 max-h-[210px] overflow-hidden p-[5px] relative "
                    key={index}
                  >
                    <img
                      className="w-auto h-auto max-w-[270px] max-h-[200px] align-middle"
                      src={item.img.src}
                      alt={item.img.alt}
                    />
                  </li>
                );
              })}
          </ul>
        </div>

        {
          categoryTitle == "Up to 80% off | Home, kitchen & outdoors" && (
          <div>
            <button className="inline left-0 rounded-[0_3px_3px_0] pr-[5px] opacity-50 absolute top-[55px] bg-white h-25 leading-25 w-[45px] text-center shadow-[0_1px_3px_#888] cursor-pointer">
              <span
                className="bg-[position:-14px_0] inline-block leading-normal align-top relative top-1/2 h-[22px] w-[13px] mt-[-11px] bg-[length:132px_235px]"
                style={{ backgroundImage: `url(${mediaIcons})` }}
              ></span>
            </button>
            <button className="inline right-0 rounded-[0_3px_3px_0] pr-[5px] opacity-100 absolute top-[55px] bg-white h-25 leading-25 w-[45px] text-center shadow-[0_1px_3px_#888] cursor-pointer">
              <span
                className="bg-[position:0_0] inline-block leading-normal align-top relative top-1/2 h-[22px] w-[13px] mt-[-11px] bg-[length:132px_235px]"
                style={{ backgroundImage: `url(${mediaIcons})` }}
              ></span>
            </button>
          </div>
        )
        }
        
      </div>
    </div>
  );
}

export default ProductCardCarousel
