import { createContext, useEffect, useState, type ReactNode } from "react";
import type { CarWashProduct } from "../Types/DeskCategories";
import axiosInstance from "../api/axios";

type toggleType={
    handleSideBar:()=> void,
    showSideBar:boolean,
    carProduct:CarWashProduct[] | undefined
}

export const ToggleContext = createContext<toggleType>({
    handleSideBar:()=> {},
    showSideBar:false,
     carProduct:[] 
})

export const ToggleBtnProvider =({children}:{children:ReactNode})=>{
    const [showSideBar,setShowSideBar]=useState<boolean>(false)

 const handleSideBar = () =>{
    setShowSideBar(!showSideBar)
  }

  const [carProduct,setCarProduct] = useState<CarWashProduct[] | undefined>()

  useEffect(()=>{
    axiosInstance.get<CarWashProduct[]>('carWashing.json')
    .then((res)=>setCarProduct(res.data.splice(0,9)) ).catch((err)=>console.log(err))
  },[])



  return(
    <ToggleContext.Provider value={{handleSideBar,showSideBar,carProduct}}>
    {children}
  </ToggleContext.Provider>
  )
}




