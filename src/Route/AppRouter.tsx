import { BrowserRouter, Route, Routes } from "react-router-dom"
import {  ProductListProvider } from "../Context/ProductListContext"
import HomeProductData from "../Components/SmallScreenComponents/Product/HomeProductData"
import { HomeProductProvider } from "../Context/HomeProductContext"
import { ToggleBtnProvider } from "../Context/toggleContext"
import ProductInfo from "../Components/SmallScreenComponents/Product/ProductInfo"
import AllProductList from "../Pages/ProductList/AllProductList"
import AllProductData from "../Pages/ProductData/AllProductData"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"

const AppRouter=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home/>}></Route>
                <Route path="/productList/:url" element={<ProductListProvider><AllProductList/></ProductListProvider>}></Route>  
                <Route path="/productList/productData/:productId" element={<ProductListProvider><AllProductData/></ProductListProvider>}></Route> 
                <Route path="/productData/:productId" element={<HomeProductProvider><HomeProductData/></HomeProductProvider>}></Route> 
                <Route path="/productInfo/:productId" element={<ToggleBtnProvider><ProductInfo/></ToggleBtnProvider>}></Route>  
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>

    )
}

export default AppRouter