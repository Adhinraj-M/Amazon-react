
import { HomeProductProvider } from "../../Context/HomeProductContext"
import ProductList from "./ProductList"
import SortCategory from "./SortCategory"

function DiscoverProduct() {

  

  return (
    <div className="mt-0.5 overflow-visible p-2 bg-white ">
        <h3 className="mb-0 mt-2 pl-1 pb-2 text-lg font-bold leading-[1.25]">Disover Product for you</h3>

        <HomeProductProvider>
          <SortCategory/>
          <ProductList/>
          </HomeProductProvider>
          
    </div>
  )
}

export default DiscoverProduct