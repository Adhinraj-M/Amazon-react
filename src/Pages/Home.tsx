import Address from "../Components/SmallScreenComponents/Address"
import AmazonOffer from "../Components/SmallScreenComponents/AmazonOffer"
import CategorySmall from "../Components/SmallScreenComponents/CategorySmall"
import DashboardCategory from "../Components/SmallScreenComponents/DashboardCategory"
import Header from "../Components/SmallScreenComponents/Header"
import HeroCarousel from "../Components/SmallScreenComponents/HeroCarousel"
import CubicList from "../Components/SmallScreenComponents/CubicList"
import CardList from "../Components/SmallScreenComponents/CardList"

function Home() {
  return (
    <div className="bg-gray-200 overflow-x-hidden h-screen relative ">
      <Header/>
      <Address/>
      <CategorySmall/>
      <HeroCarousel/>
      <DashboardCategory/>
      <AmazonOffer/>
      <CubicList/>
      <CardList/>
    </div>
  )
}

export default Home