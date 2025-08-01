import DeskCarousel from "../Components/LargeScreenComponents/DeskCarousel"
import DeskHeader from "../Components/LargeScreenComponents/DeskHeader"

function LargeHome() {
  return (
    <div className="hidden min-tab:block">
        <DeskHeader/>
        <DeskCarousel/>
    </div>
  )
}

export default LargeHome