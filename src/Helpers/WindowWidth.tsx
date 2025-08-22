import { useEffect, useState } from "react";

function useWindowWidth():number{
    const [screenWidth,setScreenWidth]=useState<number>(window.innerWidth)
    
    useEffect(()=>{

        const handleResize = ()=>{
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize',handleResize)

    },[screenWidth])

    return screenWidth
}

export default useWindowWidth