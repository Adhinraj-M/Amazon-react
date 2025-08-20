import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import AllProductList from "../Pages/AllProductList"
import {  ProductListProvider } from "../Context/ProductListContext"
import SmallProductDetails from "../Pages/SmallProductDetails"
import Test from "./Test"

const AppRouter=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home/>}></Route>
                <Route path="/productList/:url" element={<ProductListProvider><AllProductList/></ProductListProvider>}></Route>  
                <Route path="/productList/productData" element={<SmallProductDetails/>}></Route>    
                <Route path="/test" element={<Test/>}></Route>      
            </Routes>
        </BrowserRouter>

    )
}

export default AppRouter