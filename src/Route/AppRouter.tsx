import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import AllProductList from "../Pages/AllProductList"

const AppRouter=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home/>}></Route>
                <Route path="/productList/:url" element={<AllProductList/>}></Route>
            </Routes>
        </BrowserRouter>

    )
}

export default AppRouter