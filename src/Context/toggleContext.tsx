import { createContext, useState, type ReactNode } from "react";

type toggleType={
    handleSideBar:()=> void,
    showSideBar:boolean
}

export const ToggleContext = createContext<toggleType>({
    handleSideBar:()=> {},
    showSideBar:false
})

export const ToggleBtnProvider =({children}:{children:ReactNode})=>{
    const [showSideBar,setShowSideBar]=useState<boolean>(false)

 const handleSideBar = () =>{
    setShowSideBar(!showSideBar)
  }


  return(
    <ToggleContext.Provider value={{handleSideBar,showSideBar}}>
    {children}
  </ToggleContext.Provider>
  )
}




