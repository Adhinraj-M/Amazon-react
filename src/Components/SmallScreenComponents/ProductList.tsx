import { useContext, useEffect, useMemo } from "react";
import ProductIcons from "../../../public/icon-image/ProductIcons.png";
import { VscLoading } from "react-icons/vsc";
import { HomeProductContext } from "../../Context/HomeProductContext";
import { Link, useSearchParams } from "react-router-dom";

function ProductList() {
  const {setFilterList, filterList,products,selecedCategory ,setSelectedCategory} = useContext(HomeProductContext);

  console.log("selecedCategory",selecedCategory)

  const [searchParams,setSearchParams] = useSearchParams()


  const categories = useMemo(()=> searchParams.getAll("category")
   ,[searchParams])

//filter
  useEffect(()=>{
    const cateFilter = categories.includes('All') || categories.length === 0 ? products : products?.filter((product)=>{
       return categories.some((category)=> product.product_category === category)
    })
    setFilterList(cateFilter) 

     if(categories.length > 0){
       setSelectedCategory(categories)
     }             
                 
  },[categories,products])

// setting the searchParams
  useEffect(()=>{
    const newParams = new URLSearchParams()

    selecedCategory.forEach((cat)=>{
      newParams.append("category",cat)
    })
    setSearchParams(newParams)
  },[selecedCategory])
  

  return (
    <div className="grid gap-2 grid-cols-2 relative">
      {filterList?.length === 0 && (
        <div className="flex justify-end">
          <span className="text-2xl text-red-500 relative left-20">
            No Data Found
          </span>
        </div>
      )}

      {filterList ? (
        filterList.map((product) => {
          return (
            <Link to={`productData/${product.id}`}
              className="bg-white border-none flex rounded-lg flex-col h-auto relative !mb-2"
              key={product.id}>
              <div className="h-full relative w-full !mb-0 before:content-[''] before:block before:h-0 before:pb-[100%] after:bg-[#0f1111] after:rounded-lg after:contents-[''] after:h-full after:opacity-[.03] after:absolute after:top-0 after:w-full">
                <img
                  className="rounded-lg max-h-[calc(100%-8px)] max-w-[calc(100%-8px)] w-full absolute top-0 bottom-0 right-0 left-0 m-auto "
                  src={product.product_img[0]}
                  alt="product-img"
                />
                <div className="mb-0 bottom-0 h-9 absolute right-0 w-9 z-[1]">
                  <button className="w-8 h-8 bg-[#ffd814] rounded-[100px] justify-center items-center cursor-pointer flex p-0 relative">
                    <span
                      className="inline-block bg-[length:512px_512px] bg-no-repeat h-4 w-4 bg-[position:-179px_-27px]"
                      style={{ backgroundImage: `url(${ProductIcons})` }}
                    ></span>
                  </button>
                </div>
              </div>
              <div className="mb-0 p-[4px_0] ">
                <span className="!mb-1  text-[13px] font-normal  !leading-[16.9px] max-h-[16.9px] relative block overflow-hidden w-full text-[#0f1111]">
                  {product.product_title}
                </span>
                <div className="inline-flex items-center flex-row flex-wrap">
                  <span className="bg-[#cc0c39] border-b rounded-sm text-white text-[15px] font-normal leading-5 h-[22px] p-[1px_4px] text-center whitespace-nowrap w-[46px]">
                    {product.product_offer}
                  </span>
                  <span className="inline-block w-1.5"></span>
                  <div className="text-[22px] text-[#0f1111] relative leading-normal">
                    <span className="text-[13px] -top-1 relative">₹</span>
                    <span>{product.product_price}</span>
                  </div>
                  <span className="inline-block w-1.5"></span>
                  <span className="relative top-0.5 !text-[#565959] !text-[13px] !leading-[1.4] inline-block line-through">
                    {product.product_actual_price}
                  </span>
                  <span className="pt-1 !mt-0 !mb-1   text-[#565959] text-xs font-normal leading-[18px] w-full">
                    {product.no_of_buyers === "no_data"
                      ? ""
                      : `${product.no_of_buyers} brought in past month`}
                  </span>
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <div className="flex justify-end">
          <VscLoading className=" text-2xl animate-spin text-blue-500 relative left-5" />
        </div>
      )}
    </div>
  );
}

export default ProductList;

