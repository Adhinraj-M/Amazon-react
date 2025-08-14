
import { useNavigate } from "react-router-dom";
import { CuratedProduct } from "../../Types/product";

function CuratedCardList() {

  const navigate = useNavigate()


  const handleNavigate=(url:string)=>{
   navigate(`/productList/${url}`)
  }

  return (
    <div className="mt-[2px] mb-[2px] bg-white overflow-auto p-[12px_15px] ">
      <h3 className="font-fontBold text-lg leading-[23.4px] pb-2">
        Curated stores for you
      </h3>
      <div className="grid gap-2 grid-cols-2">
        {CuratedProduct &&
          CuratedProduct.map((item) => {
            return (
              <div  className="h-auto" key={item.id} onClick={()=>handleNavigate(item.url_endpoint)}>
                <img
                  className="w-full rounded-[4px]"
                  src={item.img}
                  alt={item.title}
                />
                <span className="text-[15px] !leading-[19.5px] h-auto whitespace-normal inline-block">
                  {item.title}
                </span>
              </div>
            );
          })}
      </div>
      <p className="text-[#2162a1] text-[15px] leading-[19.5px] pt-[13px]">
        See more
      </p>
    </div>
  );
}

export default CuratedCardList;


