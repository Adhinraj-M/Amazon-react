import { useContext } from "react";
import { ProductListContext } from "../../Context/ProductListContext";
import { Link } from "react-router-dom";

function ProductList() {
  const { filteredLists } = useContext(ProductListContext);

  return (
    <div className="flex flex-col items-center h-auto w-full">
      {filteredLists.length === 0 && (
        <div className="text-4xl text-red-600 flex justify-center w-full">
          No Data Found!
        </div>
      )}

      <ul className=" mx-auto w-[90%] max-w-[1500px] min-w-250 grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] px-0.5 gap-3 pt-0.5  m-0 list-none">
        {filteredLists.length > 0 &&
          filteredLists.map((item) => {
            return (
              <li
                key={item.id}
                className="flex border border-[#d5d9d9] rounded-md flex-col h-full p-0 relative"
              >
                <Link
                  to={`/productList/productData/${item.id}`}
                  className="p-3  bg-[rgba(0,0,0,.03)]  max-h-100 overflow-hidden  aspect-[18/19] flex justify-center relative mb-2 cursor-pointer"
                >
                  <img
                    className="flex-[0_0_auto] m-auto max-h-full mix-blend-multiply hover:scale-110 hover:transition-transform hover:duration-400 hover:ease-in"
                    src={item.product_img[0]}
                    alt={item.product_title}
                  />
                </Link>
                <div className="px-3 pt-1">
                  <span className="leading-[20.8px] line-clamp-3 text-[16px] ">
                    {item.product_title}
                  </span>
                  <div className="flex items-center">
                    <i
                      className="bg-[position:-2px_-400px] bg-[length:512px_512px] bg-no-repeat mr-1 -top-px h-4.5 w-20 relative align-text-top inline-block"
                      style={{
                        backgroundImage: `url(https://m.media-amazon.com/images/S/sash/5iL84kcaRCLp$es.png)`,
                      }}
                    ></i>
                    {item.no_of_buyers !== "no_data" && (
                      <span className="text-[#565959] text-sm leading-5">
                        {item.no_of_buyers}
                      </span>
                    )}
                  </div>
                  <span className="bg-[#CC0C39] p-[4px_8px_4px_8px] rounded-sm mb-1 text-white text-[13px] leading-[1.4] block mt-1 w-[123.219px]">
                    Limited time deal
                  </span>
                  <span className="text-[#cc1c39] mr-1 text-[28px] leading-9">
                    {item.product_offer}
                  </span>
                  <span className="text-[28px] text-[#0f1111] ">
                    <span className="text-[13px] top-[-9.75px] relative">
                      ₹
                    </span>
                    <span className="font-medium">{item.product_price}</span>
                    <span className="text-[13px] top-[-9.75px] relative">
                      00
                    </span>
                  </span>
                  <div className="flex">
                    <span className="text-[#565959] text-xs leading-4 block">
                      M.R.P.:
                    </span>
                    <span className=" text-xs text-[#565959] ml-1">
                      ₹{item.product_actual_price}
                    </span>
                  </div>
                  <span className="text-sm leading-5 text-[#0f1111] block">
                    Get it by&nbsp; <b>Monday, September 1</b>
                  </span>
                  <span className="text-sm leading-5">
                    FREE Delivery by Amazon
                  </span>
                </div>
                <div className="mt-auto p-[16px_24px] justify-center flex items-center">
                  <button className="rounded-[100px] w-full border border-[#888c8c] inline-block bg-white text-center align-middle cursor-pointer h-7.5 text-[13px]">
                    Buying options
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default ProductList;


