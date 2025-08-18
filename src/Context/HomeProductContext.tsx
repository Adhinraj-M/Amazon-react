import React, {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Products } from "../Types/product";
import axiosInstance from "../api/axios";
import { HomeSmallcategories } from "../Types/categories";

type HomeProductType = {
  products: Products[] | undefined;
  handleFilter: () => void;
  activeFilters: { [key: number]: boolean };
  setActiveFilters: React.Dispatch<React.SetStateAction<{ [key: number]: boolean }>>;
  filterList: Products[] | undefined;
  handleCateShow: () => void;
  cateList: boolean;
  selectCateCount:number,
  handleClearFilter:()=>void
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
  handleClearFilter:()=>{}
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


  // filtering according to the category
  const handleFilter = () => {
    const activeKeys = Object.entries(activeFilters)
        .filter(([_, value]) => value === true)
        .map(([key]) => HomeSmallcategories[Number(key)]);
    
        setSelectCateCount(activeKeys.length)

    if (activeKeys.includes("All") || activeKeys.length === 0) {
      setFilterList(products);
    } else {
      const filterd = products?.filter((item) => {
        return activeKeys.some(
          (category) => item.product_category === category
        );
      });

      setFilterList(filterd);
    }
    setCateList(!cateList);
  };

  const handleCateShow = () => {
    setCateList(!cateList);
  };

  //clear filter 
  const handleClearFilter=()=>{
    setActiveFilters({
        0:true
    })
    setSelectCateCount(0)
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
        handleClearFilter
      }}>
      {children}
    </HomeProductContext.Provider>
  );
};


