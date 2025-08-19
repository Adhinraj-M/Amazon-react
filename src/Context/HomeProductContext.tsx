import React, {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Products } from "../Types/product";
import axiosInstance from "../api/axios";
import { HomeSmallcategories, type priceSortCategoriesType } from "../Types/categories";

type HomeProductType = {
  products: Products[] | undefined;
  handleFilter: () => void;
  activeFilters: { [key: number]: boolean };
  setActiveFilters: React.Dispatch<React.SetStateAction<{ [key: number]: boolean }>>;
  filterList: Products[] | undefined;
  handleCateShow: () => void;
  cateList: boolean;
  selectCateCount:number,
  handleClearFilter:()=>void,
  selectedPrice:{[key:number]:{min:number,max:number,isSelected:boolean }},
  handleFilterPrice:(price:priceSortCategoriesType,index:number)=> void,
};

export const HomeProductContext = createContext<HomeProductType>({
  products: undefined,
  handleFilter: () => {},
  activeFilters: { 0: true },
  setActiveFilters: () => {},
  filterList: undefined,
  handleCateShow: () => {},
  cateList: false,
  selectCateCount:0,
  handleClearFilter:()=>{},
  selectedPrice:{},
  handleFilterPrice:()=>{},
});

export const HomeProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Products[]>();
  const [error, setError] = useState<string | null>(null);
  const [filterList, setFilterList] = useState<Products[] | undefined>();
  const [activeFilters, setActiveFilters] = useState<{[key: number]: boolean;}>({
    0: true,
  });
  const [cateList, setCateList] = useState<boolean>(false);
  const [selectCateCount,setSelectCateCount] = useState<number>(0)
const [selectedPrice,setSelectedPrice] = useState<{[key:number]:{min:number,max:number,isSelected:boolean }}>({
 
})


  // data fetching 
  useEffect(() => {
    axiosInstance
      .get<Products[]>("Product.json")
      .then((res) => {
        setProducts(res.data);
        setFilterList(res.data);
      })
      .catch((err) => {
        setError("Failed to load data.json");
        console.log(err);
      });
  }, []);



  //filtering accoring to the price range
const handleFilterPrice = (price:priceSortCategoriesType,index:number) =>{

   const {min,max} = price

   // i want to use this immediately after updating
   const updated ={
    ...selectedPrice,
     [index]:{ min,
      max,
      isSelected:!selectedPrice[index]?.isSelected}
    
   }

   setSelectedPrice(updated)
   const filtered = filteredProducts(updated)

   setFilterList(filtered)
   
}


  // filtering according to the category and price function
  const filteredProducts = (updated:any) => {

    const activeKeys = Object.entries(activeFilters).filter(([_,value])=>value === true)
                      .map(([key])=>HomeSmallcategories[Number(key)])

    const categoryFiltered = activeKeys.includes("All") || activeKeys.length === 0 ?
                              products : products?.filter((product)=>{
                                return activeKeys.some((category)=> product.product_category === category)
                              })


       const selectedRanges = Object.values(updated).filter((p:any)=> p?.isSelected === true)


      if(selectedRanges?.length === 0 || selectedRanges?.length === undefined){
        console.log("filtered",categoryFiltered)
          return categoryFiltered
      }
      
       const finalFiltered =categoryFiltered?.filter((product)=>{
        
         const price = Number(product.product_price.replace(/,/g, '').trim())
         return selectedRanges.some((range:any)=>{
      
           return price >= range.min && price <= range.max
         })
       })
      console.log("finalFiltered",finalFiltered?.length)
       return finalFiltered
 }

 //category modal toggle function
 const handleCateShow = () => {
   setCateList(!cateList);
  };


//category filter handler
 const handleFilter=()=>{
  const activeKeys = Object.entries(activeFilters).filter(([_,value])=> value === true ).map(([key])=> HomeSmallcategories[Number(key)])
  setSelectCateCount(activeKeys.length)
  console.log("category slectedCheck",selectedPrice)
  setFilterList(filteredProducts(selectedPrice))
  setCateList(!cateList)
}


  //clear filter 
  const handleClearFilter=()=>{
    setActiveFilters({
        0:true
    })
    setSelectCateCount(0)
    setSelectedPrice({})
    setFilterList(products)
}

  return (
    <HomeProductContext.Provider
      value={{
        cateList,
        products,
        handleFilter,
        activeFilters,
        filterList,
        setActiveFilters,
        handleCateShow,
        selectCateCount,
        handleClearFilter,
        handleFilterPrice,
        selectedPrice,
      }}>
      {children}
    </HomeProductContext.Provider>
  );
};


