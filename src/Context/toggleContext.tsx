import { createContext, useEffect, useState, type ReactNode } from "react";
import type { CarWashProduct } from "../Types/DeskCategories";
import axiosInstance from "../api/axios";

type toggleType={
    
    carProduct:CarWashProduct[] | undefined,
    showHeader:boolean
}

export const ToggleContext = createContext<toggleType>({
   
     carProduct:[] ,
     showHeader:false
})

export const ToggleBtnProvider =({children}:{children:ReactNode})=>{
   
//fetch data
  const [carProduct,setCarProduct] = useState<CarWashProduct[] | undefined>()

  useEffect(()=>{
    axiosInstance.get<CarWashProduct[]>('carWashing.json')
    .then((res)=>setCarProduct(res.data.splice(0,9)) ).catch((err)=>console.log(err))
  },[])

  //header scroll
  const [showHeader,setShowHeader]=useState<boolean>(false)

  useEffect(() => {
    const handleScrollY = () => {
      if (window.scrollY > 10) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };
    window.addEventListener("scroll", handleScrollY);
    return () => window.removeEventListener("scroll", handleScrollY);
  }, [])



  return(
    <ToggleContext.Provider value={{showHeader,carProduct}}>
    {children}
  </ToggleContext.Provider>
  )
}




