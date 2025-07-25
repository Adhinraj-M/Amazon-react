import Address from "../Components/Address"
import CategorySmall from "../Components/CategorySmall"
import DashboardCategory from "../Components/DashboardCategory"
import Header from "../Components/Header"
import HeroCarousel from "../Components/HeroCarousel"

function Home() {
  return (
    <div>
        <Header/>
      <Address/>
      <CategorySmall/>
      <HeroCarousel/>
      <DashboardCategory/>
    </div>
  )
}

export default Home