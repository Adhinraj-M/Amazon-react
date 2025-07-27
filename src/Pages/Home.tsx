import Address from "../Components/SmallScreenComponents/Address"
import AmazonOffer from "../Components/SmallScreenComponents/AmazonOffer"
import CategorySmall from "../Components/SmallScreenComponents/CategorySmall"
import DashboardCategory from "../Components/SmallScreenComponents/DashboardCategory"
import Header from "../Components/SmallScreenComponents/Header"
import HeroCarousel from "../Components/SmallScreenComponents/HeroCarousel"
import CubicList from "../Components/SmallScreenComponents/CubicList"
import CuratedCardList from "../Components/SmallScreenComponents/CuratedCardList"
import { ProductEmergingBusiness, productLocalStore } from "../Types/product"
import SideMenuBar from "../Components/SmallScreenComponents/sideMenuComponents/SideMenuBar"
import { useState } from "react"

function Home() {

  const [toggle,setToggle] =useState(false)

  const handleToggle =()=>{
    setToggle(!toggle)
  }

  return (
    <div className="bg-gray-200 overflow-x-hidden h-screen relative ">
      <Header toggleBtn={handleToggle}/>
      <Address/>
      <CategorySmall/>
      <HeroCarousel/>
      <DashboardCategory/>
      <AmazonOffer/>
      <CubicList products={ProductEmergingBusiness}/>
      <CuratedCardList/>
      <CubicList products={productLocalStore}/>
      { toggle && <SideMenuBar toggleBtn={handleToggle} toggle={toggle}/>}
     
    </div>
  )
}

export default Home