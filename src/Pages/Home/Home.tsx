
import { ToggleBtnProvider } from "../../Context/toggleContext"
import LargeHome from "./LargeHome"
import SmallHome from "./SmallHome"


function Home() {

  return (
    <div>
      <ToggleBtnProvider>
        <SmallHome/>
        <LargeHome/>
      </ToggleBtnProvider>
    </div>
  )
}

export default Home


