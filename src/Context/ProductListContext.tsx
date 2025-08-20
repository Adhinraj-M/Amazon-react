import { createContext, useEffect, useState, type ReactNode } from "react";
import type { CategoryFilter, CategoryProdut } from "../Types/product";
import { useParams } from "react-router-dom";
import axiosInstance from "../api/axios";

type ProductListContextType={
    cateProduct:CategoryProdut[] | [],
    sortCategory:string[] | [],
    filterCategory:CategoryFilter[] | []
}

export const ProductListContext = createContext<ProductListContextType>({
    cateProduct:[],
    sortCategory:[],
    filterCategory:[]
})

export const ProductListProvider = ({children}:{children:ReactNode})=>{

  const params = useParams();
  const [cateProduct, setCateProduct] = useState<CategoryProdut[]>([]);
  const [sortCategory,setSortCategory]=useState<string[]>([])
  const [error, setError] = useState<string | null>(null);
  const [filterCategory,setFilterCategory]=useState<CategoryFilter[]>([])


  // data fetching
  useEffect(() => {
    axiosInstance
      .get(`/${params.url}.json`)
      .then((res:any) => {
        setCateProduct(res.data.product);
        setSortCategory(res.data.category)
        setFilterCategory(res.data.filterCategory)
      })
      .catch((err) => {
        setError("Failed to load data");
        console.log(err);
      });
     
  }, []);


   return(
        <ProductListContext.Provider value={{cateProduct,sortCategory,filterCategory}}>
            {children}
        </ProductListContext.Provider>
    )
}


