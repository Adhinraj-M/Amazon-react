import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import {  ProductListProvider } from "../Context/ProductListContext"
import HomeProductData from "../Components/SmallScreenComponents/HomeProductData"
import { HomeProductProvider } from "../Context/HomeProductContext"
import { ToggleBtnProvider } from "../Context/toggleContext"
import ProductInfo from "../Components/SmallScreenComponents/ProductInfo"
import AllProductList from "../Pages/AllProductList"
import AllProductData from "../Pages/AllProductData"

const AppRouter=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home/>}></Route>
                <Route path="/productList/:url" element={<ProductListProvider><AllProductList/></ProductListProvider>}></Route>  
                <Route path="/productList/productData/:productId" element={<ProductListProvider><AllProductData/></ProductListProvider>}></Route> 
                <Route path="/productData/:productId" element={<HomeProductProvider><HomeProductData/></HomeProductProvider>}></Route> 
                <Route path="/productInfo/:productId" element={<ToggleBtnProvider><ProductInfo/></ToggleBtnProvider>}></Route>  
            </Routes>
        </BrowserRouter>

    )
}

export default AppRouter